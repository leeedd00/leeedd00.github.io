---
title: Gallery
subtitle: 활동 사진들입니다
---

{% if site.data.gallery.size == 0 %}
<p class="muted">아직 사진이 없습니다.</p>
{% endif %}
<div class="gallery">
  {% for g in site.data.gallery %}
  <figure>
    <img src="{{ g.src | relative_url }}" alt="{{ g.caption }}" loading="lazy">
    <figcaption>{{ g.caption }}</figcaption>
  </figure>
  {% endfor %}
</div>
