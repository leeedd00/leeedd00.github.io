---
layout: default
title: About Me
---

<section class="hero">
  <p class="eyebrow">AI · Distribution & Logistics</p>
  <h1>안녕하세요,<br>이동건 (Ethan) 입니다.</h1>
  <p class="lead">( 빈칸: 나를 한 줄로 소개하는 문장 )</p>
  <p class="hero-sub">경상국립대학교 유통물류학 & 컴퓨터공학 복수전공</p>
  <p class="links">
    <a class="btn primary" href="{{ '/projects/' | relative_url }}">프로젝트 보기</a>
    <a class="btn" href="{{ '/contact/' | relative_url }}">연락하기</a>
  </p>
</section>

<section class="section">
  <h2>소개</h2>
  <div class="prose">
    <p>( 빈칸: 3~5문장 자기소개. 어떤 문제에 관심이 있고, 어떤 경험을 해왔고, 무엇을 하고 싶은지 )</p>
  </div>
</section>

<section class="section">
  <h2>관심 분야</h2>
  <p class="tags">
    <span class="tag lg">BigData</span><span class="tag lg">AI Agent</span><span class="tag lg">CS</span><span class="tag lg">Distribution & Logistics</span>
  </p>
</section>

<section class="section">
  <h2>관심 직무</h2>
  <div class="grid-2">
    {% for j in site.data.jobs %}
    <div class="box"><h3>{{ j.title }}</h3><p>{{ j.why }}</p></div>
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

<section class="section">
  <h2>최근 프로젝트</h2>
  <div class="grid-3">
    {% assign projects = site.projects | sort: "order" %}
    {% for p in projects limit: 3 %}{% include project-card.html p=p %}{% endfor %}
  </div>
  <p class="more"><a href="{{ '/projects/' | relative_url }}">전체 프로젝트 보기 →</a></p>
</section>
