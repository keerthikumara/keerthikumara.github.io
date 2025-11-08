// Netlify Function: visit-counter
// - GET: returns current count
// - POST: increments count and returns updated count

const GITHUB_API = 'https://api.github.com';

exports.handler = async function (event, context) {
  const token = process.env.GITHUB_TOKEN;
  const repo = process.env.GITHUB_REPO; // format: owner/repo
  const path = process.env.GITHUB_FILE_PATH || 'data/visit-count.json';
  const branch = process.env.GITHUB_BRANCH || 'main';

  if (!token || !repo) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'GITHUB_TOKEN and GITHUB_REPO must be set in environment variables.' })
    };
  }

  // helper to get file from GitHub
  async function getFile() {
    const url = `${GITHUB_API}/repos/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'visit-counter-function'
      }
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`GitHub GET failed: ${res.status}`);
    return res.json();
  }

  // helper to put file to GitHub
  async function putFile(contentBase64, sha, message) {
    const url = `${GITHUB_API}/repos/${repo}/contents/${encodeURIComponent(path)}`;
    const body = {
      message: message || 'Update visit counter',
      content: contentBase64,
      branch
    };
    if (sha) body.sha = sha;

    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        Authorization: `token ${token}`,
        'User-Agent': 'visit-counter-function',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(`GitHub PUT failed: ${res.status}`);
    return res.json();
  }

  try {
    if (event.httpMethod === 'GET') {
      const file = await getFile();
      if (!file) return { statusCode: 200, body: JSON.stringify({ count: 0 }) };
      const content = JSON.parse(Buffer.from(file.content, file.encoding).toString());
      return { statusCode: 200, body: JSON.stringify({ count: content.count || 0 }) };
    }

    if (event.httpMethod === 'POST') {
      // increment
      const file = await getFile();
      let count = 0;
      let sha = null;
      if (file) {
        const content = JSON.parse(Buffer.from(file.content, file.encoding).toString());
        count = parseInt(content.count || 0, 10);
        sha = file.sha;
      }
      count = count + 1;
      const newContent = Buffer.from(JSON.stringify({ count }, null, 2)).toString('base64');
      const resp = await putFile(newContent, sha, 'Increment visit counter');
      // return new count
      return {
        statusCode: 200,
        body: JSON.stringify({ count })
      };
    }

    return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
