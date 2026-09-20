---
layout: default
title: About Me
---

<section class="hero">
  <p class="links contact-row">
    <a class="btn sm c-mail" href="mailto:{{ site.author.email }}">✉ Email</a>
    <a class="btn sm c-github" href="https://github.com/{{ site.author.github }}" target="_blank" rel="noopener">GitHub ↗</a>
    <a class="btn sm c-linkedin" href="https://www.linkedin.com/in/%EB%8F%99%EA%B1%B4-%EC%9D%B4-5b73753a5/" target="_blank" rel="noopener">LinkedIn ↗</a>
  </p>
  <p class="eyebrow">AI · Distribution & Logistics</p>
  <h1>안녕하세요,<br>이동건 (Ethan) 입니다.</h1>
  <p class="hero-sub">경상국립대학교 유통물류학 & 컴퓨터공학 복수전공</p>
  <p class="links">
    <a class="btn primary" href="{{ '/projects/' | relative_url }}">프로젝트 보기</a>
  </p>

  <div class="stats">
    <div class="stat"><div class="num" data-count="4">4</div><div class="label">프로젝트 · 연구<br>(Keeping 1·2차, 린스타트업, Purdue)</div></div>
    <div class="stat"><div class="num" data-count="16" data-suffix="%">16%</div><div class="label">수요예측 MAPE<br>29% → 16%로 개선</div></div>
    <div class="stat"><div class="num" data-count="0.73" data-decimals="2">0.73</div><div class="label">작물 수확량 예측 R²<br>카운티 그룹 교차검증</div></div>
    <div class="stat"><div class="num" data-count="3">3</div><div class="label">창업 수상<br>우수상 · 특별상 · 장려상</div></div>
  </div>
</section>

<section class="section">
  <h2>소개</h2>
  <div class="prose">
    <p>유통물류학과 컴퓨터공학을 함께 공부하며 <b>"물류의 문제를 코드와 데이터로 푸는 사람"</b>이 되려고 합니다. 재고가 남아서 버려지고, 부족해서 못 파는 일이 매장에서 매일 반복되는데, 그 판단을 감이 아니라 데이터에 맡길 수 있다고 믿습니다.</p>
    <p>그래서 소규모 식당의 재고를 지켜보고 발주 초안까지 만들어 주는 <a href="/projects/keeping/">Keeping</a>을 웹 버전부터 모바일 앱까지 두 번에 걸쳐 만들었습니다. LLM이 모든 판단을 하던 구조를 "수요예측 모델과 수식이 판단하고, LLM은 설명만 한다"로 바꾸면서 비용과 안정성을 함께 잡는 법을 배웠습니다. Purdue University 연구 프로그램에서는 기후 데이터로 작물 수확량을 예측하고 메타휴리스틱으로 최적 배치를 찾는 프로젝트를 하며, 예측을 의사결정으로 잇는 최적화를 경험했습니다.</p>
    <p>창업동아리 대표, GNU 창업탐색팀 팀장, 린스타트업 스쿨 외주 발주까지 기획과 개발을 오가며 일했습니다. 앞으로는 물류 현장의 언어와 개발자의 언어를 둘 다 쓸 수 있는 사람으로, 재고·발주·수요예측 문제를 실제 서비스로 만드는 일을 하고 싶습니다.</p>
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
