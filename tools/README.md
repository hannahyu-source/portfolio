# tools

`index.html`을 일괄 수정할 때 쓴 일회성 Node 스크립트 모음입니다.

각 스크립트는 `index.html`을 **현재 작업 디렉터리 기준 상대 경로**로 읽고
덮어쓰므로, 반드시 저장소 루트에서 실행해야 합니다.

```bash
node tools/update_pubs.js      # 저장소 루트에서 (O)
cd tools && node update_pubs.js  # index.html을 찾지 못함 (X)
```

파일을 제자리에서 덮어쓰기 때문에, 실행 전 워킹트리가 깨끗한지
(`git status`) 확인하면 결과를 `git diff`로 검토하고 되돌릴 수 있습니다.

| 스크립트 | 하는 일 |
|---|---|
| `apply_aos.js` | 섹션에 AOS 스크롤 애니메이션 속성 추가 |
| `fix_fonts.js` | 폰트 크기 조정 |
| `remove_links.js` | Patents/Funding/Conference 패널의 링크 블록 제거 |
| `update_pubs.js` | Publications 섹션 갱신 |
| `update_training.js` | Training 섹션 갱신 |
