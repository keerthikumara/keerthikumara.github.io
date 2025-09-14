# Copilot Instructions for keerthikumara.github.io

This repository builds a personal academic portfolio website using Hugo/HugoBlox. It is structured for easy content management and reproducible builds.

## Architecture & Structure
- **Static Site Generator:** Uses [Hugo](https://gohugo.io/) with HugoBlox modules for academic/portfolio features.
- **Content Organization:**
  - `content/` holds all site content (authors, publications, experience, etc.)
  - `assets/` for images, icons, and media
  - `static/` for files served as-is (e.g., resume.pdf)
  - `config/_default/` for Hugo and theme configuration (menus, params, languages)
  - `layouts/partials/` for custom HTML (e.g., GitHub button)
- **Key files:**
  - `hugoblox.yaml`, `hugo.yaml`: Main site and theme config
  - `netlify.toml`: Netlify deployment settings
  - `go.mod`: Hugo module dependencies

## Developer Workflows
- **Local Development:**
  - Install Hugo Extended (see https://gohugo.io/getting-started/installing/)
  - Run locally: `hugo server -D` (drafts enabled)
- **Build/Deploy:**
  - Netlify auto-builds on push using `netlify.toml` settings
  - Manual build: `hugo` (output in `public/`)
- **Content Editing:**
  - Edit Markdown in `content/` (e.g., `authors/admin/_index.md` for About Me)
  - Add images to `assets/media/` or `static/uploads/`
- **Custom HTML:**
  - Place partials in `layouts/partials/`
  - Use `config/_default/params.yaml` for custom theme params

## Project Conventions
- **Front Matter:** Use YAML or TOML front matter in Markdown files for metadata
- **Image Paths:** Use relative paths from `/` (e.g., `/media/featured.jpg`)
- **About Me:** Update in `content/authors/admin/_index.md` under the `## About Me` section
- **Publications:** Each paper in `content/publication/` with its own folder and `index.md`
- **No custom build scripts:** All builds use standard Hugo/Netlify commands

## External Integrations
- **Netlify:** Handles production deployment
- **GitHub Buttons:** Custom HTML in `layouts/partials/hooks/head-end/github-button.html`

## Examples
- To add a new publication: copy an existing folder in `content/publication/`, update `index.md`, and add images/bib files as needed.
- To change site-wide config: edit `config/_default/hugo.yaml` or `hugoblox.yaml`.

For more, see the [HugoBlox docs](https://docs.hugoblox.com/) and this repo's `README.md`.
