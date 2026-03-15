---
title: "Keerthi Kumaran AM"
date: 2024-10-24
type: landing

design:
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      username: admin
      text: |
        <div style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 20px; border-radius: 10px; color: #fff;">
        <style>
        .glass-links a { color: #fff !important; font-weight: bold; }
        strong, b { color: #fff !important; }
        </style>
        <span style="font-size:1.7em; font-weight:600; color:#fff;">Hello, I am Keerthi Kumaran.</span><br>
        <strong style="color:#fff;">PhD candidate in Physics, Purdue University</strong><br><br>
        <span class="glass-links">
        <a href="https://github.com/keerthikumara">GitHub</a> &nbsp;|&nbsp;
        <a href="https://linkedin.com/in/keerthikumaran">LinkedIn</a> &nbsp;|&nbsp;
        <a href="https://scholar.google.com/citations?user=DK3QFcQAAAAJ&hl=en">Google Scholar</a> &nbsp;|&nbsp;
        <a href="https://inspirehep.net/authors/2687921">INSPIRE-HEP</a>
        </span>
        <br><br>
        <div style="display: flex; flex-wrap: wrap; gap: 10px; align-items: center; margin-bottom: 18px;">
          <a href="/uploads/resume.pdf" style="background: #007bff; color: #fff; padding: 8px 18px; border-radius: 6px; text-decoration: none; font-weight: 600;">Download CV</a>
        </div>
        I build reliable, hardware‑aware quantum algorithms and simulations for practically relevant applications that run on today’s pre–fault‑tolerant devices while helping chart a path toward future fault‑tolerant quantum computing. I work on hardware‑aware quantum simulations, error‑mitigation methods, and utility‑scale workflows that push current systems toward classically challenging regimes. Through my work at Purdue and IBM Quantum, especially in Sample‑Based Quantum Diagonalization and utility‑scale experiments, I develop methods that scale as hardware improves. My vision is to advance meaningful Quantum Advantage by identifying promising applications and contributing to open‑source tools.
        </div>
    design:
      css_class: dark
      avatar:
        size: medium
        shape: circle
      background:
        color: black
        image:
          # Add a dark overlay using a linear-gradient for more darkness and less opacity of the image
          style: |
            background-image: linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url('/media/stacked-peaks.svg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
          filename: stacked-peaks.svg
          filters:
            brightness: 0.35
          size: cover
          position: center
          parallax: false

  - block: markdown
    content:
      title: "Interests, Education and Experience"
      text: |
        <div style="display: flex; justify-content: center; margin-top: 2em; width: 100vw; position: relative; left: 50%; right: 50%; margin-left: -50vw; margin-right: -50vw;">
          <style>
            @media (min-width: 900px) {
              .mainpage-cols { display: flex !important; flex-direction: row !important; }
              .mainpage-col { flex: 1 1 0 !important; min-width: 0 !important; max-width: none !important; }
            }
            @media (max-width: 899px) {
              .mainpage-cols { display: block !important; }
              .mainpage-col { width: 100% !important; max-width: 100% !important; }
            }
          </style>
          <div class="mainpage-cols" style="background: rgba(255,255,255,0.15); backdrop-filter: blur(10px); padding: 28px 24px; border-radius: 10px; color: #26588777; text-align:left; font-size:0.8em; max-width: 2400px !important; width: 90%; margin: 0 auto; box-sizing: border-box; display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 12px;">
            <div class="mainpage-col" style="flex: 1 1 0; min-width:0; box-sizing:border-box; padding: 0 12px;">
              <strong style="color:#fff;">Interests</strong><br>
              <ul style="margin-top:0.5em;">
                <li>Quantum simulations</li>
                <li>Quantum-Classical Hybrid workflows</li>
                <li>Quantum Error mitigation</li>
                <li>Quantum Error suppression</li>
              </ul>
            </div>
            <div class="mainpage-col" style="flex: 1 1 0; min-width:0; box-sizing:border-box; padding: 0 12px;">
              <strong style="color:#fff;">Education</strong><br>
              <ul style="margin-top:0.5em;">
                <li><b>PhD in Physics (Quantum Computing)</b>, Purdue University, West Lafayette, United States (2022– )<br>
                  GPA: 3.9/4.0<br>
                </li>
                <li><b>BS in Physics</b>, Indian Institute of Science (IISc), Bengaluru, India (2018–2022)<br>
                  CGPA: 9.3/10.0<br>
                </li>
                <li><b>High School</b>, Maharishi Vidya Mandir, Chennai, India (2016–2018)<br>
                  Score: 486/500<br>
                </li>
              </ul>
            </div>
            <div class="mainpage-col" style="flex: 1 1 0; min-width:0; box-sizing:border-box; padding: 0 12px;">
              <strong style="color:#fff;">Experience</strong><br>
              <ul style="margin-top:0.5em;">
                <li><b>Intern</b>, IBM Quantum (2024, 2025)<br>
                  Quantum algorithms, error mitigation, and simulation projects.
                </li>
                <li><b>Research Assistant</b>, Purdue University (2022– )<br>
                  Quantum simulations and circuit optimization.
                </li>
              </ul>
            </div>
          </div>
        </div>


  - block: cta-card
    demo: true
    content:
      title: 👉 Build your own academic website like this
      text: |-
        This site is generated by Hugo Blox Builder - the FREE, Hugo-based open source website builder trusted by 250,000+ academics like you.

        https://github.com/HugoBlox/hugo-blox-builder

        Easily build anything with blocks - no-code required!

        From landing pages, second brains, and courses to academic resumés, conferences, and tech blogs.
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        css_class: "bg-primary-700"
        css_style: ""
---
