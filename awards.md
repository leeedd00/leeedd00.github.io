---
title: Awards
subtitle: 수상 · 자격증입니다
---

<h2>수상</h2>
<ol class="timeline">
  {% for a in site.data.awards.prizes %}
  <li>
    <span class="when">{{ a.when }}</span>
    <div>
      <h3>{{ a.title }}</h3>
      {% if a.org %}<p class="org">{{ a.org }}</p>{% endif %}
      {% if a.detail %}<p>{{ a.detail }}</p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ol>

<h2 class="mt">자격증</h2>
<ol class="timeline">
  {% for c in site.data.awards.certificates %}
  <li>
    <span class="when">{{ c.when }}</span>
    <div><h3>{{ c.title }}</h3>{% if c.org %}<p class="org">{{ c.org }}</p>{% endif %}</div>
  </li>
  {% endfor %}
</ol>
