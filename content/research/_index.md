---
title: "Research Articles"
description: "Explore my published and in-progress research articles. Each article links to a subpage with a figure and a short description."
---

## Research Articles

Below are selected research articles. Click on any article to view a figure and a short description.


{{ range .Pages }}
### [{{ .Title }}]({{ .RelPermalink }})

{{ if .Params.featured_image }}
<img src="{{ .Params.featured_image }}" alt="{{ .Title }}" style="max-width:300px; margin:1em 0;" />
{{ end }}

{{ .Summary }}
---
{{ end }}
