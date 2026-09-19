# leeedd00.github.io

이동건(Ethan) 포트폴리오 사이트. GitHub Pages(Jekyll)로 자동 빌드됩니다.
푸시하면 약 1분 뒤 https://leeedd00.github.io 에 반영됩니다.

## 파일별 역할

| 파일 | 수정할 때 |
|------|-----------|
| `index.md` | 메인 페이지 소개 문구 |
| `_projects/*.md` | 프로젝트 하나 = 파일 하나. 상세 페이지가 자동 생성됨 |
| `_data/experience.yml` | 경험 타임라인 |
| `_data/awards.yml` | 수상 · 자격증 |
| `_data/skills.yml` | 기술 스택 |
| `_data/jobs.yml` | 관심 직무 |
| `assets/img/` | 프로젝트 썸네일 이미지 |
| `assets/css/style.css` | 디자인 |

## 프로젝트 추가하기

1. `_projects/_template.md.txt`를 복사해 `_projects/프로젝트이름.md`로 저장
2. 맨 위 `---` 사이의 항목(제목, 기간, 역할, 스택, 링크)을 채우기
3. `order` 숫자로 메인 페이지 카드 순서 조정
4. 썸네일은 `assets/img/`에 넣고 `thumbnail: /assets/img/파일명.png` 지정
