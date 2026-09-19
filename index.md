---
layout: default
---

<section class="hero" id="about">
  <p class="eyebrow">AI · Distribution & Logistics</p>
  <h1>안녕하세요,<br>이동건 (Ethan) 입니다.</h1>
  <p class="lead">( 빈칸: 나를 한 줄로 소개하는 문장 )</p>
  <p class="hero-sub">경상국립대학교 유통물류학 & 컴퓨터공학 복수전공 · 관심 분야: BigData, AI Agent, CS, Distribution & Logistics</p>
</section>

<section class="section">
  <h2>관심 직무</h2>
  <div class="grid-2">
    {% for j in site.data.jobs %}
    <div class="box">
      <h3>{{ j.title }}</h3>
      <p>{{ j.why }}</p>
    </div>
    {% endfor %}
  </div>
</section>

<section class="section">
  <h2>기술 스택</h2>
  <dl class="skills">
    {% for g in site.data.skills %}
    <div><dt>{{ g.group }}</dt><dd>{% for s in g.items %}<span class="tag">{{ s }}</span>{% endfor %}</dd></div>
    {% endfor %}
  </dl>
</section>

<section class="section" id="projects">
  <h2>프로젝트</h2>
  <div class="grid-3">
    {% assign projects = site.projects | sort: "order" %}
    {% for p in projects %}{% include project-card.html p=p %}{% endfor %}
  </div>
</section>

<section class="section" id="experience">
  <h2>경험</h2>
  <ol class="timeline">
    {% for e in site.data.experience %}
    <li>
      <span class="when">{{ e.period }}</span>
      <div>
        <h3>{{ e.title }}</h3>
        {% if e.detail %}<p>{{ e.detail }}</p>{% endif %}
      </div>
    </li>
    {% endfor %}
  </ol>
</section>

<section class="section">
  <h2>수상 · 자격증</h2>
  <ul class="plain">
    {% for a in site.data.awards %}
    <li><span class="when">{{ a.when }}</span> {{ a.title }}</li>
    {% endfor %}
  </ul>
</section>

<section class="section" id="contact">
  <h2>연락처</h2>
  <p class="links">
    <a class="btn" href="mailto:{{ site.author.email }}">Email</a>
    <a class="btn" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub ↗</a>
    <a class="btn" href="( 빈칸: LinkedIn URL )" target="_blank" rel="noopener">LinkedIn ↗</a>
  </p>
</section>
