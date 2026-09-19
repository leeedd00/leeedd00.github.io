---
title: Experience
subtitle: 실무 · 프로젝트 경험입니다
---

<ol class="timeline">
  {% for e in site.data.experience %}
  <li>
    <span class="when">{{ e.period }}</span>
    <div>
      <h3>{{ e.title }}</h3>
      {% if e.org %}<p class="org">{{ e.org }}</p>{% endif %}
      {% if e.detail %}<p>{{ e.detail }}</p>{% endif %}
      {% if e.link %}<p><a href="{{ e.link | relative_url }}">자세히 보기 →</a></p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ol>
