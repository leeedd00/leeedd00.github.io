---
title: Blog
subtitle: 공부하고 느낀 것을 기록합니다
---

{% if site.posts.size == 0 %}
<p class="muted">아직 글이 없습니다.</p>
{% endif %}
<ul class="post-list">
  {% for post in site.posts %}
  <li>
    <span class="when">{{ post.date | date: "%Y.%m.%d" }}</span>
    <div>
      <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
      {% if post.excerpt %}<p>{{ post.excerpt | strip_html | truncate: 120 }}</p>{% endif %}
    </div>
  </li>
  {% endfor %}
</ul>
