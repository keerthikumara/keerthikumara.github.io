# Visit Counter Setup Guide

This guide completes the setup of the visit counter for your portfolio website.

## Status: Almost Complete! ✅

Your repository now has:
- ✅ `visit-counter.html` partial component (displays the counter)
- ✅ `footer-override.html` (includes the counter in your footer)
- ✅ `netlify/functions/visit-counter.js` (serverless function to track visits)
- ✅ `data/visit-count.json` (data file initialized)

## Final Step: Configure Netlify Environment Variables

To activate the visit counter, you need to add environment variables to your Netlify site:

### Instructions:

1. **Go to Netlify Dashboard**
   - Visit https://app.netlify.com
   - Log in with your GitHub account
   - Select your `keerthikumara.github.io` site

2. **Navigate to Build Settings**
   - Click on "Build & deploy" in the left sidebar
   - Select "Environment" tab
   - Click "Edit variables"

3. **Add These Environment Variables:**

   | Key | Value | Notes |
   |-----|-------|-------|
   | `GITHUB_TOKEN` | Your GitHub Personal Access Token | Must have `repo` scope for read/write access |
   | `GITHUB_REPO` | `keerthikumara/keerthikumara.github.io` | Your repository in owner/name format |
   | `GITHUB_FILE_PATH` | `data/visit-count.json` | Path to the visit count data file |
   | `GITHUB_BRANCH` | `main` | (Optional) Default branch |

### Creating a GitHub Personal Access Token:

1. Go to GitHub Settings: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Netlify Visit Counter"
4. Select scopes:
   - ✅ `repo` (Full control of private repositories)
5. Generate and copy the token
6. Paste it as `GITHUB_TOKEN` in Netlify

**Important:** Never commit the token to your repository. Only set it in Netlify.

## Verification

Once environment variables are set:

1. **Redeploy the site:**
   - Go to Deploys tab
   - Click "Trigger deploy" > "Deploy site"

2. **Check the footer:**
   - Visit your portfolio: https://keerthikumara.github.io
   - Scroll to the bottom of the page
   - You should see "X visits" displayed
   - Refresh the page - the counter should increment

3. **Verify data file updates:**
   - Check GitHub: https://github.com/keerthikumara/keerthikumara.github.io/blob/main/data/visit-count.json
   - After each visit, the count should increase

## Troubleshooting

**Counter not showing?**
- Check Netlify function logs in "Functions" tab
- Verify environment variables are set correctly
- Ensure GitHub token has proper permissions

**Increment not working?**
- Verify `GITHUB_TOKEN` has `repo` scope
- Check that `GITHUB_FILE_PATH` matches: `data/visit-count.json`
- Review browser console for JavaScript errors

**Want to reset the counter?**
- Edit `data/visit-count.json` in the main branch
- Change `"count": 0` to any starting number
- Commit and wait for redeploy

## Additional Notes

- The counter increments on every page load
- Visits are tracked server-side (no client-side tracking)
- Data is stored in your GitHub repository
- The function runs on Netlify's servers (serverless)

---

For questions or issues, refer to the Netlify documentation:
- https://docs.netlify.com/functions/overview/
- https://docs.netlify.com/env-vars/overview/
