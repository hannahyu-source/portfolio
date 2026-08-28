# Hannah Yu — Portfolio

유한나(Hannah Yu, Clinical Genomics Scientist)의 개인 포트폴리오 웹사이트입니다. HTML/CSS/JS 단일 페이지로 제작되었으며, GitHub Pages에서 저장소 루트를 그대로 서빙합니다.

🔗 **라이브 사이트:** https://hannahyu-source.github.io/portfolio/

## 구성

- **소개** — 프로필 및 자기소개
- **기술 역량** — 보유 기술 스택 요약
- **대표 연구** — 대표 프로젝트 3건을 카드로 소개 (클릭 시 상세 모달 표시)
  - CLAE: Oxford Nanopore 기반 고정확도 시퀀싱 전략 (Advanced Science 게재)
  - 임상 유전체 데이터 생산 & 변이 해석 (삼성서울병원 · 쓰리빌리언)
  - 유전자 계량 표준 측정 방법 개발 (박사학위 연구, KRISS)
- **경력 · 학력** — 타임라인 형태의 경력 및 학력 사항
- **논문 · 특허 · 연구실적** — 게재 논문, 특허, 발표 이력 그리드 (탭 라벨의 건수는 카드 수에서 자동 계산)
- **AI & Data Science Training · Certification** — 관련 교육/자격 이력
- **Contact / CV 다운로드** — 국문·영문 이력서(PDF) 다운로드 링크 (`assets/`)

## 기술 스택

| 항목 | 내용 |
|---|---|
| 마크업/스타일 | HTML5, [Tailwind CSS](https://tailwindcss.com/) 3.4.17 (로컬 빌드) |
| 웹폰트 | [Pretendard](https://github.com/orioncactus/pretendard) Variable (jsDelivr, dynamic subset) |
| 인터랙션 | Vanilla JavaScript (프로젝트 카드는 JS 배열을 DOM에 동적 렌더링) |
| 스크롤 애니메이션 | [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/) |
| 배포 | GitHub Pages (저장소 루트 서빙) |

## CSS 빌드

스타일은 Tailwind CDN이 아니라 **미리 빌드한 `assets/tailwind.css`** 를 사용합니다.
`index.html`의 클래스를 추가·변경했다면 반드시 다시 빌드해서 **함께 커밋**해야 합니다.
빌드 결과물이 곧 배포본이므로, 빌드를 잊으면 새 클래스가 사이트에 적용되지 않습니다.

```bash
npm install     # 최초 1회
npm run build   # src/input.css + index.html  →  assets/tailwind.css (minify)
npm run watch   # 편집하면서 자동 재빌드
```

- `tailwind.config.js` — 브랜드 색상, 폰트 스택, `max-w-container` 등 테마 정의
- `src/input.css` — `@tailwind` 지시자 + `@layer components`의 사용자 정의 클래스(`.btn`, `.card`, `.tab-btn` 등)
- 스캔 대상은 `index.html` 하나입니다. JS가 문자열로 만들어 내는 클래스도 이 파일 안에 리터럴로 들어 있어 그대로 감지됩니다.

## 저장소 구조

```
.
├── index.html                                  # 포트폴리오 전체 페이지
├── tailwind.config.js                          # Tailwind 테마 설정
├── package.json                                # 빌드 스크립트
├── src/
│   └── input.css                               # Tailwind 입력 CSS (사용자 정의 클래스 포함)
├── assets/
│   ├── tailwind.css                            # 빌드 산출물 (커밋 대상)
│   ├── profile.webp                            # 프로필 사진
│   ├── SMC_logo.png  3billion_logo.png         # 기관 로고
│   ├── osu_logo.png  KRISS_logo.png
│   ├── HannahYu_CurriculumVitae_2026_Eng.pdf   # 영문 이력서
│   └── 유한나_국문이력서_2026.pdf                 # 국문 이력서
├── tools/                                      # index.html 일괄 수정용 일회성 스크립트
└── README.md
```
