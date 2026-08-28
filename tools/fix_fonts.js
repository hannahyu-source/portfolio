const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. html font-size: 120% 제거
content = content.replace(/html\s*\{\s*scroll-behavior:\s*smooth;\s*font-size:\s*120%;\s*\}/, 'html { scroll-behavior: smooth; }');

// 2. 임의의 px 기반 text 크기를 표준 tailwind 클래스로 변경하는 로직
content = content.replace(/text-\[([0-9\.]+)px\]/g, (match, p1) => {
  const size = parseFloat(p1);
  
  // 기준점은 주관적일 수 있으나 일반적인 웹 사이즈에 맞게 매핑
  if (size <= 16.8) return 'text-xs';
  if (size <= 20) return 'text-sm';
  if (size <= 24) return 'text-base';
  if (size <= 27) return 'text-lg';
  if (size <= 32) return 'text-xl';
  if (size <= 38) return 'text-2xl';
  if (size <= 46) return 'text-3xl';
  if (size <= 54) return 'text-4xl';
  if (size <= 62) return 'text-5xl';
  return 'text-6xl';
});

// 기타 명시적으로 수정할 부분 (예: 년도 표시 원 안의 글자, 제목 텍스트 크기 등)
// 위의 로직으로 대부분 커버됨.

fs.writeFileSync('index.html', content);
console.log('Successfully adjusted font sizes in index.html');
