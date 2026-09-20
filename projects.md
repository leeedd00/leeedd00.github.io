---
title: Projects
---

<div class="grid-3">
  {% assign projects = site.projects | sort: "order" %}
  {% for p in projects %}{% include project-card.html p=p %}{% endfor %}
</div>
