const fs = require('fs');

const trainingHtml = `
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      
      <!-- Card 1 -->
      <div class="relative flex h-[340px] flex-col overflow-hidden rounded-[32px] bg-[#e4edcd] p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <!-- Bubbles -->
        <div class="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-white/40 blur-2xl"></div>
        <div class="absolute right-0 top-1/4 h-24 w-24 rounded-full bg-white/30 blur-xl"></div>
        
        <div class="relative z-10 flex h-full flex-col">
          <h3 class="mb-2 text-[21px] font-extrabold leading-tight text-slate-800">
            AI 융합 데이터 분석 전문인력 양성
          </h3>
          <div class="mb-3 text-[13px] font-bold text-slate-600">WISET × AWS | 2026.04 – 05</div>
          <ul class="mb-4 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-slate-600/90">
            <li>Python 기반 데이터 분석, 전처리, API 활용</li>
            <li>데이터 시각화 및 대시보드 구현</li>
            <li>AWS 기반 데이터 분석 프로젝트</li>
          </ul>
          
          <div class="mt-auto flex items-center justify-between">
            <span class="text-[14px] font-extrabold text-slate-700">Read More</span>
            <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:scale-110">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="relative flex h-[340px] flex-col overflow-hidden rounded-[32px] bg-[#f1f2f0] p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/60 blur-2xl"></div>
        
        <div class="relative z-10 flex h-full flex-col">
          <h3 class="mb-2 text-[21px] font-extrabold leading-tight text-slate-800">
            생성형 AI 전문강사 양성과정
          </h3>
          <div class="mb-3 text-[13px] font-bold text-slate-600">WISET × AWS | 2026.06 – 07</div>
          <ul class="mb-4 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-slate-600/90">
            <li>프롬프트 엔지니어링, RAG, Agentic AI</li>
            <li>AWS 기반 생성형 AI 활용</li>
            <li>AI 교육 콘텐츠 개발 프로젝트</li>
          </ul>
          
          <div class="mt-auto flex items-center justify-between">
            <span class="text-[14px] font-extrabold text-slate-700">Read More</span>
            <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dce6c3] text-slate-800 shadow-sm transition hover:scale-110">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="relative flex h-[340px] flex-col overflow-hidden rounded-[32px] bg-[#e4edcd] p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-white/40 blur-2xl"></div>
        
        <div class="relative z-10 flex h-full flex-col">
          <h3 class="mb-2 text-[21px] font-extrabold leading-tight text-slate-800">
            AI 활용 실무 훈련
          </h3>
          <div class="mb-3 text-[13px] font-bold text-slate-600">WISET × 상상력집단 | 2026.07 – 08</div>
          <ul class="mb-4 list-disc space-y-1.5 pl-4 text-[13px] leading-relaxed text-slate-600/90">
            <li>ChatGPT·Claude·Gemini 업무 자동화</li>
            <li>Python·Colab 기반 데이터 분석</li>
            <li>연구 데이터 분석 및 포트폴리오 제작</li>
          </ul>
          
          <div class="mt-auto flex items-center justify-between">
            <span class="text-[14px] font-extrabold text-slate-700">Read More</span>
            <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:scale-110">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Card 4 (Certification) -->
      <div class="relative flex h-[340px] flex-col overflow-hidden rounded-[32px] bg-[#f1f2f0] p-7 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div class="absolute -left-8 top-10 h-32 w-32 rounded-full bg-white/60 blur-xl"></div>
        
        <div class="relative z-10 flex h-full flex-col">
          <div class="mb-2 inline-block rounded-full bg-slate-200/50 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-slate-600 w-fit">Certification</div>
          <h3 class="mb-2 mt-2 text-[21px] font-extrabold leading-tight text-slate-800">
            데이터분석준전문가 (ADsP)
          </h3>
          <div class="mb-4 text-[13px] font-bold text-slate-600">한국데이터산업진흥원</div>
          
          <p class="mb-4 text-[13px] leading-relaxed text-slate-600/90">
            데이터 이해 및 데이터 분석 기획, 데이터 분석 역량을 검정하는 국가공인 민간자격증. (2026.06.05 취득)
          </p>
          
          <div class="mt-auto flex items-center justify-between">
            <span class="text-[14px] font-extrabold text-slate-700">Read More</span>
            <a href="#" class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-800 shadow-sm transition hover:scale-110">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" /></svg>
            </a>
          </div>
        </div>
      </div>

    </div>
`;

let content = fs.readFileSync('index.html', 'utf8');

// Replace everything inside the container-custom of the #training section after the header
const regex = /<div class="mb-4 text-lg font-extrabold text-accent2-500">AI &amp; Data Science Training<\/div>[\s\S]*?<\/div>\s*<\/section>/;

content = content.replace(regex, trainingHtml + '\n  </div>\n</section>');

fs.writeFileSync('index.html', content);
console.log('Successfully updated HTML structure for training section');
