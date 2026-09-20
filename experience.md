---
title: Experience
subtitle: 프로젝트 · 연구 · 활동 경험
---

<ol class="timeline">
  {% for e in site.data.experience %}
  <li>
    <span class="when">{{ e.period }}</span>
    <div>
      <h3>{% if e.type %}<span class="type-tag">{{ e.type }}</span>{% endif %}{{ e.title }}</h3>
      {% if e.org %}<p class="org">{{ e.org }}</p>{% endif %}
      {% if e.detail %}<p>{{ e.detail }}</p>{% endif %}
      {% if e.link %}<p><a href="{{ e.link | relative_url }}">자세히 보기 →</a></p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ol>
