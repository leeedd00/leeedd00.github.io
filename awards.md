---
title: Awards
subtitle: 수상 · 자격증
---

{% assign awards = site.awards | sort: "order" %}
{% assign prizes = awards | where: "category", "수상" %}
{% assign certs = awards | where: "category", "자격증" %}

<h2>수상</h2>
<div class="grid-3">
  {% for a in prizes %}{% include award-card.html a=a %}{% endfor %}
</div>

<h2 class="mt">자격증</h2>
<div class="grid-3">
  {% for a in certs %}{% include award-card.html a=a %}{% endfor %}
</div>
