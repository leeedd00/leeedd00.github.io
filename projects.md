---
title: Projects
subtitle: 지금까지 진행한 프로젝트들입니다
---

<div class="grid-3">
  {% assign projects = site.projects | sort: "order" %}
  {% for p in projects %}{% include project-card.html p=p %}{% endfor %}
</div>
