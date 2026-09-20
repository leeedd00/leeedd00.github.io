---
title: Education
subtitle: 학력 · 교육 과정
---

<ol class="timeline">
  {% for e in site.data.education %}
  <li>
    <span class="when">{{ e.period }}</span>
    <div>
      <h3>{{ e.title }}</h3>
      {% if e.org %}<p class="org">{{ e.org }}</p>{% endif %}
      {% if e.detail %}<p>{{ e.detail }}</p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ol>
