---
title: Activities
subtitle: 동아리 · 학생회 · 대외활동입니다
---

<div class="grid-2">
  {% for a in site.data.activities %}
  <div class="box">
    <p class="eyebrow">{{ a.period }}</p>
    <h3>{{ a.title }}</h3>
    {% if a.org %}<p class="org">{{ a.org }}</p>{% endif %}
    <p>{{ a.detail }}</p>
  </div>
  {% endfor %}
</div>
