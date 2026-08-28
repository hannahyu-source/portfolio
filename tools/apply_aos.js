const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

// 1. Add AOS CSS
if (!html.includes('aos.css')) {
  html = html.replace('</head>', '  <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">\n</head>');
}

// 2. Add AOS JS
if (!html.includes('aos.js')) {
  const aosInit = `
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<script>
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 50
  });
</script>
</body>`;
  html = html.replace('</body>', aosInit);
}

// 3. Add Custom Floating Animation CSS
if (!html.includes('animate-float')) {
  const customCss = `
    @keyframes float {
      0% { transform: translateY(0px); }
      50% { transform: translateY(-15px); }
      100% { transform: translateY(0px); }
    }
    .animate-float { animation: float 4s ease-in-out infinite; }
  }
`;
  html = html.replace('  }\n</style>', customCss + '</style>');
}

// 4. Add data-aos attributes
// Helper function to safely add data-aos
function addAos(htmlStr, searchStr, aosAttr) {
  // Only replace the first occurrence that doesn't already have data-aos to avoid duplicate if script runs twice
  if (htmlStr.includes(searchStr) && !htmlStr.includes(`${searchStr} ${aosAttr}`)) {
    return htmlStr.replace(searchStr, `${searchStr} ${aosAttr}`);
  }
  return htmlStr;
}

// Hero container
html = html.replace(/<div class="grid items-center gap-10 lg:grid-cols-2">/g, '<div class="grid items-center gap-10 lg:grid-cols-2" data-aos="fade-in">');

// Hero image animation
html = html.replace(/<img src="assets\/profile\.jpg"/g, '<img src="assets/profile.jpg" class="animate-float"');

// Section headers (mx-auto mb-12 max-w-xl text-center)
html = html.replace(/<div class="mx-auto mb-12 max-w-xl text-center">/g, '<div class="mx-auto mb-12 max-w-xl text-center" data-aos="fade-up">');

// About paragraph container
html = html.replace(/<div class="prose prose-lg mx-auto max-w-3xl text-slate-500">/g, '<div class="prose prose-lg mx-auto max-w-3xl text-slate-500" data-aos="fade-up" data-aos-delay="100">');

// Skills flex containers
html = html.replace(/<div class="flex flex-wrap gap-2\.5">/g, '<div class="flex flex-wrap gap-2.5" data-aos="fade-up" data-aos-delay="100">');

// Project cards
html = html.replace(/<div class="card cursor-pointer" /g, '<div class="card cursor-pointer" data-aos="fade-up" ');

// Publication tabs
html = html.replace(/<div id="pubTabs"/g, '<div id="pubTabs" data-aos="fade-up" data-aos-delay="100"');

// The new grid cards for Publications/Patents/Funding/Conf
html = html.replace(/<div class="group flex h-full flex-col/g, '<div data-aos="fade-up" class="group flex h-full flex-col');

// Timeline cards in Career
html = html.replace(/<div class="timeline-card">/g, '<div class="timeline-card" data-aos="fade-up">');

// Training grid
html = html.replace(/<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">/g, '<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4" data-aos="fade-up" data-aos-delay="100">');

// Contact section buttons
html = html.replace(/<div class="flex flex-wrap justify-center gap-3\.5">/g, '<div class="flex flex-wrap justify-center gap-3.5" data-aos="fade-up" data-aos-delay="100">');

fs.writeFileSync('index.html', html);
console.log('Applied AOS and interactive motions.');
