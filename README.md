# Hannah Yu — Portfolio

유한나(Hannah Yu, Clinical Genomics Scientist)의 개인 포트폴리오 웹사이트입니다. 순수 HTML/CSS/JS 단일 페이지(SPA 형태)로 제작되었으며, 별도 빌드 과정 없이 GitHub Pages에서 바로 서빙됩니다.

🔗 **라이브 사이트:** https://hannahyu-source.github.io/portfolio/

## 구성

- **소개** — 프로필 및 자기소개
- **기술 역량** — 보유 기술 스택 요약
- **대표 연구** — 대표 프로젝트 3건을 카드로 소개 (클릭 시 상세 모달 표시)
  - CLAE: Oxford Nanopore 기반 고정확도 시퀀싱 전략 (Advanced Science 게재)
  - 임상 유전체 변이 해석 & AI 진단 모델 고도화 (쓰리빌리언)
  - 유전자 계량 표준 측정 방법 개발 (박사학위 연구, KRISS)
- **경력 · 학력** — 타임라인 형태의 경력 및 학력 사항
- **논문 · 특허 · 연구실적** — 게재 논문, 특허, 발표 이력 그리드
- **AI & Data Science Training · Certification** — 관련 교육/자격 이력
- **Contact / CV 다운로드** — 국문·영문 이력서(PDF) 다운로드 링크 (`assets/`)

## 기술 스택

| 항목 | 내용 |
|---|---|
| 마크업/스타일 | HTML5, [Tailwind CSS](https://tailwindcss.com/) (CDN) |
| 인터랙션 | Vanilla JavaScript (프로젝트 카드는 JS 배열을 DOM에 동적 렌더링) |
| 스크롤 애니메이션 | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) |
| 배포 | GitHub Pages (저장소 루트 서빙) |

## 저장소 구조

```
.
├── index.html                                   # 포트폴리오 전체 페이지
├── assets/
│   ├── profile.png                              # 프로필 사진
│   ├── HannahYu_CurriculumVitae_2026_Eng.pdf     # 영문 이력서
│   └── 유한나_국문이력서_2026.pdf                  # 국문 이력서
└── README.md
```
