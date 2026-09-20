---
title: Keeping 2차 — AI 매장 비서 앱
order: 1
roles: [Backend, AI, Mobile]
category: 모바일 앱 · AI 에이전트 · 수요예측
summary: 소규모 식당의 재고를 대신 지켜보다가 부족·소비기한 임박 품목을 감지해 발주 초안을 자동 생성하고, 사장님은 승인만 하면 장바구니·결제·입고까지 이어지는 AI 매장 비서 앱
period: 2026.03 – 2026.06
role: "백엔드 AI 발주 로직 · 수요예측 연동 · 모바일 화면(수요예측·회원가입·거래처·장바구니) · 온보딩 문서"
team: 5인 팀
stack: [Python, FastAPI, SQLAlchemy, Supabase PostgreSQL, XGBoost · LightGBM · RandomForest, Gemini API, MCP (fastmcp), Expo (React Native), TypeScript, Zustand, TanStack Query]
thumbnail: /assets/img/keeping.png
# 팀 저장소(dlgusw0/Keeping2)는 비공개. 공개용 저장소를 만들면 아래 주석 해제
# links:
#   - label: GitHub
#     url: https://github.com/leeedd00/keeping-showcase
---

## 문제 인식

소규모 식당은 대기업 수준의 재고 관리 시스템에 접근할 수 없습니다. 재고는 엑셀이나 수기, 또는 사장님의 감으로 관리되고, 발주는 사장님 머릿속에서 결정됩니다. 그 결과 두 가지 손실이 반복됩니다.

| 현재 방식 | 결과 |
|-----------|------|
| 아무도 재고를 실시간으로 보지 않음 | 소비기한 초과 → **폐기 손실** |
| 체계 없는 발주 주기 | 재고 부족 → **품절 · 매출 기회 손실** |

타겟은 1~3인이 운영하는 독립 식당입니다. 카페와 프랜차이즈는 본사 체계가 있어서 제외했습니다. 핵심 가치는 "비서 한 명 고용한 것처럼". 재고를 보고, 발주를 준비하고, 사장님은 최종 결정만 합니다.

> 재고 부족 · 소비기한 임박 감지 → AI 발주 초안 생성(근거 포함) → 사장님 승인 → 장바구니 자동 구성 → 결제 → 재고 자동 입고

## 프로젝트 연혁

| 시기 | 단계 | 팀 | 내용 |
|------|------|-----|------|
| 2025.09 – 2025.12 | 1차 · 웹 버전 · 린스타트업 MVP | 3인 / 팀 Autoful | 웹 플랫폼과 수요예측 파이프라인, MVP 앱 외주 발주 → [1차 프로젝트 보기](/projects/keeping-web/) |
| 2026.03 – 2026.06 | **2차 · 모바일 고도화 (이 페이지)** | 5인 | Expo 앱으로 재구축. AI 발주 엔진, POS 연동, 거래처 · 결제 · 자동 입고, 온보딩 |

## 앱 화면

<div class="screens">
  <figure><img src="/assets/img/keeping/screens/01_home.jpg" alt="홈" loading="lazy"><figcaption><b>홈</b> — 이번 주 AI 발주 제안서, 재고 상태(충분/주의/위험), 긴급 발주 품목, 경남 수요 영향 이벤트</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/02_orders.jpg" alt="발주 — AI 발주 초안" loading="lazy"><figcaption><b>발주 — AI 발주 초안</b> — 품목별 발주량과 근거(예측 수요 · 안전재고 · 소비기한 · 폐기위험)를 보여주고 전체 승인으로 장바구니 구성</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/03_inventory.jpg" alt="재고" loading="lazy"><figcaption><b>재고</b> — 품목별 현재고 · 소비기한 D-day · 상태 색상, 입고/차감 처리와 바코드 스캔</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/04_forecast.jpg" alt="수요예측" loading="lazy"><figcaption><b>수요예측</b> — 재료별 주간 소요량 · 현재고 · 폐기 예정량과 폐기 위험 등급</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/05_cart.jpg" alt="장바구니" loading="lazy"><figcaption><b>장바구니</b> — 승인한 발주 초안이 거래처 단가로 자동 구성됨</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/06_checkout.jpg" alt="결제" loading="lazy"><figcaption><b>결제</b> — 거래처 계좌 정보와 품목 합계, 결제 확정 시 재고 자동 입고</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/07_chatbot.jpg" alt="AI 챗봇" loading="lazy"><figcaption><b>AI 챗봇</b> — 재고 확인 · 장바구니 담기 · 발주 계획 수립을 자연어로 요청</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/08_vendors.jpg" alt="거래처 관리" loading="lazy"><figcaption><b>거래처 관리</b> — 거래처 계좌 · 취급 품목 · 단가 등록</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/09_recipes.jpg" alt="레시피" loading="lazy"><figcaption><b>레시피</b> — 메뉴별 재료 구성(BOM). POS 판매 시 이 기준으로 재고 차감</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/10_sales.jpg" alt="판매량 입력" loading="lazy"><figcaption><b>판매량 입력</b> — POS 연동 전 수동 판매 입력 — 재고 차감과 수요 학습 데이터로 반영</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/11_store.jpg" alt="내 가게 관리" loading="lazy"><figcaption><b>내 가게 관리</b> — 업종 · 좌석 수 · 상권 유형 등 수요예측에 쓰이는 매장 정보</figcaption></figure>
  <figure><img src="/assets/img/keeping/screens/12_profile.jpg" alt="프로필" loading="lazy"><figcaption><b>프로필</b> — 계정 · 매장 · 지역 설정</figcaption></figure>
</div>

## 아키텍처

<figure class="chart">
  <img src="/assets/img/keeping/architecture.jpg" alt="Keeping 시스템 아키텍처" loading="lazy">
  <figcaption>모바일(Expo) — HTTP 클라이언트 — 백엔드(FastAPI + MCP 서버 + AI 모델) — DB(Supabase PostgreSQL) — 외부 API(Gemini · OpenWeather · Kakao · KAMIS)</figcaption>
</figure>

**핵심 데이터 흐름**

1. POS 판매 신호가 들어오면 레시피(BOM) 기준으로 재료 재고를 차감하고, 일별 소진 로그를 남깁니다. 이 로그가 수요예측 모델의 학습 데이터가 됩니다.
2. Model A(XGBoost + LightGBM + RandomForest Voting 앙상블)가 날씨 체감지수, 공휴일, 지역 축제, 대학 학사일정을 피처로 품목별 수요를 예측합니다.
3. 발주 엔진이 "예측 수요 + 유통기한 + 안전재고"를 종합해 품목별 발주량과 근거를 계산합니다.
4. Gemini가 그 결과를 사장님이 읽기 쉬운 2~3문장으로 설명합니다.
5. 사장님이 승인하면 장바구니가 구성되고, 결제 후 재고가 자동 입고됩니다.

<figure class="chart">
  <img src="/assets/img/keeping/pos_flow.jpg" alt="POS 판매 → 레시피 실행 → 재고 차감 자동화 흐름" loading="lazy">
  <figcaption>POS 판매 1건이 레시피 기준 출고와 재고 차감으로 자동 반영되는 흐름</figcaption>
</figure>

## 가장 큰 문제: LLM API 비용

초기 설계는 Gemini 에이전트가 재고 분석부터 발주 판단, 설명까지 모두 담당하는 구조였습니다. 챗봇에 말을 걸거나 발주 버튼을 누를 때마다 전체 재고와 대화 이력을 프롬프트에 실어 LLM을 호출했습니다. 데모에서는 문제가 없었지만, 실제 서비스를 가정하면 매장 수와 호출 횟수에 비례해 비용이 늘어나는 구조였습니다. 소규모 식당을 위한 서비스가 LLM 비용 때문에 구독료를 올려야 한다면 제품의 전제가 무너집니다.

( 확인: 당시 추산했던 비용 수치나 호출 횟수가 있으면 여기에 한 줄 )

### 해결 과정

**1. 판단은 LLM 밖으로, LLM은 설명만**

가장 큰 변화입니다. "무엇을 얼마나 발주할지"는 LLM이 아니라 수요예측 모델과 결정적인 수식이 계산하도록 바꿨습니다.

```
demand_order  = 예측 수요 기반 권장량 (Model A + 유통기한)   ← compute_order_quantity
safety_order  = max(0, 안전재고 − 현재고)
order_qty     = max(demand_order, safety_order)
```

- 재고가 예측 기간 안에 만료되면 "만료 전 부족분 + 만료 후 필요분"으로 나눠 계산하고, 유통기한 안에 못 쓸 폐기분은 발주량에서 뺍니다.
- 품목별 발주 근거("수요 > 현재고", "선제 발주", "폐기 위험", "소비기한 D-2")도 코드가 생성합니다.
- Gemini는 이미 계산된 결과를 받아 사장님용 설명문 2~3문장만 씁니다. 호출당 토큰이 크게 줄었고, 결과의 일관성도 좋아졌습니다.
- Gemini 호출이 실패해도 기본 설명문으로 대체되어 발주 기능은 그대로 동작합니다. LLM이 죽어도 서비스는 살아 있습니다.

**2. 프롬프트에 필요한 것만 넣기**

챗봇은 LLM이 필요하지만, 매번 전체 재고를 보낼 이유는 없었습니다.

- 메시지 키워드를 감지해 필요한 데이터만 주입: "날씨"가 있으면 날씨 캐시, "축제"가 있으면 축제 일정, "수요"가 있으면 3일 예측만
- "발주", "주문" 키워드나 "예"/"응" 같은 짧은 답에는 부족 품목만 포함하고, 특정 품목명이 나오면 그 줄만 포함
- 대화 이력은 최근 4개(2회 교환)만 유지, 응답은 최대 3문장에 인사말·결어 금지
- MCP 툴(function calling)로 모델이 필요한 데이터만 골라 조회하도록 해서 DB를 통째로 프롬프트에 싣지 않음

**3. 저렴한 모델과 캐시**

- 모델은 Flash 계열(gemini-2.0-flash / 2.5-flash)로 고정하고, 구조화 응답은 JSON 모드로 받아 재요청을 줄임
- 날씨는 60분, 농산물 시세는 1시간 캐시. 클라이언트도 수요예측 응답을 10분 캐시해 불필요한 재조회를 막음

**결과**: LLM 호출은 "사용자가 챗봇에 말을 걸 때"와 "발주 초안 설명문 생성" 두 곳으로 줄었고, 핵심 기능인 발주 판단은 LLM 없이도 완결됩니다. ( 확인: 절감 비율이나 호출 수 변화가 있으면 수치로 )

## 그 외 문제 해결

**발주 판단 로직 통일**: 홈 화면의 자동 제안과 발주 탭의 초안 생성이 서로 다른 규칙을 쓰고 있었습니다. 과거에는 `안전재고 × 2 − 현재고`라는 단순 규칙만 써서 수요예측과 유통기한을 전혀 보지 않았습니다. 두 경로를 하나의 후보 생성 함수로 일원화하고, 수요예측 화면과 같은 발주 공식을 재사용해 "수요가 현재고를 초과할 것으로 예측되면 재고가 아직 임계값 위여도 선제 발주"하도록 바꿨습니다.

**단위 불일치로 인한 총액 폭증**: 재고는 g 단위인데 거래처 단가는 kg 단위라 발주 총액이 1,000배로 튀는 버그가 있었습니다. 발주량을 거래처 판매 단위로 환산하는 단계를 넣고, 거래처에 연결된 품목만 제안하도록 게이팅했습니다.

**수요예측 화면이 옛 재고를 보여주던 버그**: 재고를 바꾸는 여러 경로(추가·수정·삭제·일괄삭제·바코드 스캔)에서 수요예측 쿼리 캐시 무효화가 빠져 있었습니다. 모든 뮤테이션에 무효화를 보강하고, 화면 포커스 시 재조회하는 안전망을 추가했습니다.

**폐기 위험 모델(Model B) 대신 수식**: XGBoost·LightGBM·RandomForest 앙상블로 "3일 내 폐기 확률"을 예측하는 모델을 만들었지만, 운영 환경에서 모델 로드가 불안정했고 102MB pkl을 서버에 얹는 부담도 있었습니다. "예측 수요 ÷ 7 × 남은 유통기한"과 현재고를 비교하는 수식으로 대체했습니다. 수요는 AI가 예측하고, 그 예측을 유통기한과 비교하는 마지막 한 단계만 산수로 처리하는 구조입니다.

## 내가 맡은 부분

- **AI 발주 엔진 개선**: 수요예측 + 폐기 위험 + 안전재고를 통합한 발주량 계산, 자동 제안과 초안 생성 경로 일원화, 거래처 단위 환산
- **수요예측 연동**: Model A 예측 결과를 발주·수요예측 화면에 연결, Model A/B 학습 데이터 정비
- **모바일 화면**: 수요예측, 회원가입 4단계(매장 → 메뉴 가져오기 → 재고 등록), 내 가게 관리, 거래처 관리, 장바구니, 알림
- **구매 프로세스**: 승인 → 장바구니 → 결제 → 재고 자동 입고 흐름 정리와 버그 수정
- **온보딩 문서**: 새 팀원이 문서 하나로 프로젝트 전체를 잡을 수 있도록 실제 코드 동작 기준의 온보딩 가이드 작성

## 수요예측 모델

**Model A — 혼잡도 예측 → 발주량 계산**

| 항목 | 내용 |
|------|------|
| 구조 | LightGBM 40% + XGBoost 40% + Random Forest 20% Voting 앙상블 |
| 입력 피처 18개 | POS 최근 7일 판매량 lag, 기온·습도 기반 불쾌지수, 축제까지의 거리 감쇠값, 요일·계절·공휴일·방학·시험기간 |
| 예측 대상 | 3일치 가게 좌석 점유율(혼잡도, 0~1) |
| 성능 | 학습 데이터 300,000건 기준 **MAE 0.040 · R² 0.887** (혼잡도 ±4% 오차, 실용 기준 ±20% 이내) |
| 재학습 | 실제 POS 판매 데이터가 30일 이상 쌓이면 자동 재학습, 90/10 분할로 MAE·R² 검증 후 새 모델 저장 |

<figure class="chart">
  <img src="/assets/img/keeping/model_metrics.png" alt="수요예측 모델 성능 지표" loading="lazy">
  <figcaption>Model A 성능 지표와 피처 중요도 — POS 판매량 lag가 가장 큰 영향</figcaption>
</figure>

발주량은 "혼잡도 × 좌석 수 = 예상 방문객 수 → 레시피 1인당 재료 × 방문객 = 예상 소비량 → 예상 소비량 − 사용 가능한 현재고 = 발주량" 순서로 계산됩니다.

**한계와 대응**: 초기에는 실거래 데이터가 없어 시뮬레이션 데이터로 학습했기 때문에 예측 오차가 큽니다. 그래서 Day 0에는 휴리스틱 100%, Day 30부터 ML 50% + 휴리스틱 50%, Day 100 이후 실제 데이터 중심의 매장 맞춤 예측으로 비중을 옮기는 단계적 전환을 설계했습니다.

## 배운 점

- **LLM은 마지막 한 단계에만.** 판단을 코드와 모델에 맡기고 LLM은 사람이 읽을 설명을 쓰게 하면 비용, 일관성, 장애 내성이 모두 좋아진다. "AI 서비스"라고 해서 모든 것을 LLM에 시킬 필요가 없다.
- **같은 계산은 한 곳에서.** 발주 공식이 두 군데에 따로 있으면 반드시 어긋난다. 단일 출처 함수로 모으고 나서야 화면 간 불일치 버그가 사라졌다.
- **단위와 캐시는 사소해 보여도 제품을 망친다.** g/kg 환산 하나로 총액이 1,000배가 되고, 캐시 무효화 하나가 빠지면 사장님은 옛날 재고를 보고 발주한다.
- **문서는 코드 기준으로.** 온보딩 문서를 쓰면서 "죽어 있는 코드"와 "동작하지 않는 모델"을 찾아냈다. 문서화가 곧 감사(audit)였다.
