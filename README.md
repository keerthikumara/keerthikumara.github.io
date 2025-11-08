# 👋 Hi, I'm Keerthi Kumaran

🎓 **PhD Candidate in Physics @ Purdue University**  
🔬 **Quantum Computing Researcher | Quantum Simulations | Error Mitigation | Quantum Error Correction (QEC)**  
📍 West Lafayette, IN  
📧 kalagars@purdue.edu  
🌐 [Website](https://keerthikumara.github.io/) | [GitHub](https://github.com/keerthikumara) | [LinkedIn](https://linkedin.com/in/keerthikumaran) | [Google Scholar](https://scholar.google.com/citations?user=DK3QFcQAAAAJ)

---

## 🧠 About Me

I'm a fourth-year PhD student in Physics at Purdue University, specializing in **quantum computing**. My research focuses on:

- Quantum simulations of complex systems  
- Error mitigation and suppression techniques  
- Hardware-aware quantum circuit optimization  
- Scalable quantum algorithm design  
- Building foundational skills in **Quantum Error Correction (QEC)** through coursework and simulation of non-Abelian anyons for topological QEC schemes

I’ve contributed to high-impact projects at **IBM Quantum** and Purdue, and I’m passionate about pushing the boundaries of quantum technology through interdisciplinary collaboration and open-source development.

---

## 🧪 Research Highlights

- **Transmon Qutrit-Based Simulation of Spin-1 AKLT Systems**  
  Demonstrated qutrit advantages using calibrated superconducting transmons.  
  [arXiv:2412.19786](https://arxiv.org/abs/2412.19786)

- **Quantum Simulation of Superdiffusion Breakdown**  
  Simulated 2D Heisenberg chains using quantum circuits with advanced error mitigation.  
  [arXiv:2503.14371](https://arxiv.org/abs/2503.14371)

- **Random Projection Using Quantum Circuits**  
  Benchmarked quantum dimensionality reduction vs classical PCA.  
  [Phys. Rev. Research 6, 013010 (2024)](https://journals.aps.org/prresearch/abstract/10.1103/PhysRevResearch.6.013010)

- **Physics‑Inspired Quantum Simulation of Resonating Valence Bond States**  
  [J. Phys. Chem. A, 127(41), 8751–8764 (2023)](https://pubs.acs.org/doi/10.1021/acs.jpca.3c05172)

- **Robust Chiral Edge Dynamics on a Trapped Ion Processor**  
  [arXiv:2507.08939](https://arxiv.org/abs/2507.08939)

---

## 🛠️ Skills & Tools

**Languages**: Python, C/C++, R, MATLAB, Mathematica  
**Quantum Frameworks**: Qiskit, PennyLane, Cirq, CUDA-Q  
**ML Libraries**: PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas  
**Simulation Tools**: qutip, scqubits, tensor networks, DMRG  
**HPC & Software**: SLURM, CUDA, NVIDIA A30 GPUs, GitHub, LaTeX (Overleaf), Origin, SciDavis

---

## 🏆 Achievements

- 📝 **Reviewer**, *Journal of Physics A*  
- 🇩🇪 **DAAD WISE Scholar**, Germany  
- 🇮🇳 **KVPY & NTSE Scholar**, India  
- 🧠 **Top 15%**, QHack 2023 (Xanadu), PennyLane Coding Camp  
- 🧑‍🏫 **Advanced Badge**, IBM Fall Quantum Challenge

---

## 📚 Publications

See full list on [Google Scholar](https://scholar.google.com/citations?user=DK3QFcQAAAAJ)

---

## 🤝 Let's Connect

Open to collaborations, research discussions, and new opportunities in quantum computing.  
Feel free to reach out via [email](mailto:kalagars@purdue.edu) or connect on [LinkedIn](https://linkedin.com/in/keerthikumaran).

---

## Analytics / Site Visits

This site supports Google Analytics (GA4). To enable visit tracking, add your GA4 Measurement ID (format: `G-XXXXXXXXXX`) to `config/_default/params.yaml` at `marketing.analytics.google_analytics`.

Privacy options:
- Enable `features.privacy_pack` in `config/_default/params.yaml` to access HugoBlox privacy features.
- For privacy-first analytics consider using Plausible, Fathom, or Pirsch (params are available under `marketing.analytics`).

After setting the measurement ID, HugoBlox will automatically include the GA4 snippet in the page head.

### Visible visit counter (Netlify Functions)

I added an optional visible visit counter that stores the count in a JSON file in this repository and is updated by a Netlify Function.

Required Netlify environment variables (set in Netlify dashboard for the site):

- `GITHUB_TOKEN` — a GitHub personal access token with repo permissions (public_repo for a public repo). This token lets the function update the JSON file that stores the counter.
- `GITHUB_REPO` — the repository path (format `owner/repo`, for example `keerthikumara/keerthikumara.github.io`).
- `GITHUB_FILE_PATH` — path to the JSON file that will store the count (default: `data/visit-count.json`).
- `GITHUB_BRANCH` — (optional) branch to commit to; defaults to `main`.

How it works:

1. A small Netlify Function is available at `/.netlify/functions/visit-counter`.
2. The site partial `layouts/partials/visit-counter.html` posts to that function on page load. The function increments the counter by updating the file specified by `GITHUB_FILE_PATH` in the repo and returns the new count.
3. The partial displays the count inline. To show it on your site, include the partial where you'd like the counter to appear, e.g. in a footer partial:

  {{/* in your layout or footer partial */}}
  {{ partial "visit-counter.html" . }}

Security & notes:

- The GitHub token must be kept secret — do NOT commit it to the repository. Use Netlify site environment variables.
- This approach writes to your repository on every page view; for very high traffic sites, consider using a hosted key-value store (Upstash, Fauna, Redis, or Netlify Edge KV) to avoid frequent commits.
- If you prefer a privacy-preserving, serverless counter with no Git writes, I can scaffold an alternative using Upstash or Netlify Edge KV (requires additional account/setup).

