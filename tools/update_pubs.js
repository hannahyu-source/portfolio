const fs = require('fs');

const data = {
  pubs: [
    { title: "CLAE: A High Fidelity Nanopore Sequencing Strategy for Read Level Viral Variant Detection and Environmental RNA Virus Discovery.", desc: "Advanced Science (2025) Sep 11:305978. IF 14.5", year: "2025", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.1002/advs.202505978" },
    { title: "Single-molecule epitranscriptomic analysis of full-length HIV-1 RNAs reveals functional roles of site-specific m6As.", desc: "Nature Microbiology (2024) May;9(5):1340-1355. IF 28.3", year: "2024", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC11087264/" },
    { title: "Mapping m6A Sites on HIV-1 RNA Using Oligonucleotide LC-MS/MS.", desc: "Methods Protoc. (2024) Jan 10;7(1). IF 2.4", year: "2024", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.3390/mps7010007" },
    { title: "CD3e-immunotoxin spares CD62Llo Tregs and reshapes organ-specific T-cell composition by preferentially depleting CD3ehi T cells.", desc: "Front Immunol. (2022); 13:1011190. IF 8.8", year: "2022", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.3389/fimmu.2022.1011190" },
    { title: "Comparison of CD3e Antibody and CD3e-sZAP Immunotoxin Treatment in Mice Identifies sZAP as the Main Driver of Vascular Leakage.", desc: "Biomedicines (2022), 10, 1221. IF 6.0", year: "2022", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.3390/biomedicines10061221" },
    { title: "The clonal repopulation of HSPC gene modified with anti-HIV-1 RNAi is not affected by preexisting HIV-1 infection.", desc: "Science Advances (2020). IF 13.1", year: "2020", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.1126/sciadv.aay9206" },
    { title: "Normalization of human RNA-seq experiments using chimpanzee RNA as a spike-in standard.", desc: "Sci. Rep. (2016). IF 4.3", year: "2016", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.1038/srep31923" },
    { title: "Reference materials for calibration of analytical biases in quantification of DNA methylation.", desc: "PLOS One (2015). IF 3.2", year: "2015", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.1371/journal.pone.0137006" },
    { title: "Quantification of trace-level DNA by real time whole genome amplification.", desc: "PLOS One (2011). IF 3.2", year: "2011", type: "Paper", icon: "M2 2v12h12V2H2z", link: "https://doi.org/10.1371/journal.pone.0028661" }
  ],
  patents: [
    { title: "Quantitative analysis method using microorganism 16S rDNA gene having single nucleotide polymorphism.", desc: "US Patent 10,253,378", year: "2019", type: "Patent", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", link: "#" },
    { title: "Methods of making and using tandem, twin barcode molecules.", desc: "PCT/US2018/049203", year: "2018", type: "Patent", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", link: "#" },
    { title: "Methods and kits for the quantification of nucleic acids.", desc: "US 9,297,038", year: "2016", type: "Patent", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", link: "#" },
    { title: "Bacterial 16s rDNA sequences with defined single nucleotide polymorphisms.", desc: "PCT/KR2014/011040", year: "2014", type: "Patent", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", link: "#" },
    { title: "Methods and kits for the quantification of nucleic acids.", desc: "PCT/KR2011/008494", year: "2011", type: "Patent", icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5", link: "#" }
  ],
  funding: [
    { title: "On-site, high-fidelity target sequencing and absolute quantitation for HIV-1 surveillance", desc: "NHGRI R01 (PI: Kim S)", year: "2018-2024", type: "Grant", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", link: "#" },
    { title: "Virus in soils: key modulators of microbiomes and nutrient cycling?", desc: "Department of Energy (PI: Sullivan M; Co-I: Kim S)", year: "2019-2023", type: "Grant", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", link: "#" },
    { title: "High-accuracy, long-range sequencing for HIV genotyping", desc: "NHGRI R21 (PI: Kim S)", year: "2018-2022", type: "Grant", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", link: "#" }
  ],
  conf: [
    { title: "Advanced Genomic Technology Development Meeting, Boston, USA", desc: "Short talk", year: "2019", type: "Conference", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", link: "#" },
    { title: "Nanopore Community Meeting, San Francisco, USA", desc: "Poster", year: "2018", type: "Conference", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", link: "#" },
    { title: "Nanopore Community Meeting, New York, USA", desc: "Poster", year: "2016", type: "Conference", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", link: "#" },
    { title: "Nucleic Acid Summit, San Francisco, USA", desc: "Poster", year: "2013", type: "Conference", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z", link: "#" }
  ]
};

function generateCards(items) {
  return `<div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
${items.map(item => `
    <div class="group flex h-full flex-col rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-slate-100 transition duration-300 hover:shadow-lg hover:-translate-y-1">
      <div class="mb-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500">
        <svg class="h-3.5 w-3.5 fill-current text-slate-700" viewBox="0 0 24 24"><path fill="currentColor" d="${item.icon}"/></svg>
        ${item.type}
      </div>
      <h3 class="mb-2 text-[17px] font-bold leading-snug text-slate-900 line-clamp-3">${item.title}</h3>
      <p class="mb-5 text-[13px] leading-relaxed text-slate-500 line-clamp-3 flex-1">${item.desc}</p>
      <div class="mt-auto flex items-center justify-between border-t border-slate-50 pt-4">
        <div class="flex items-center gap-1.5 text-[12px] font-medium text-slate-500">
          <svg class="h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          ${item.year}
        </div>
        <a href="${item.link}" target="_blank" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#e1f5fe] text-[#0288d1] transition group-hover:bg-[#b3e5fc]">
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clip-rule="evenodd" /></svg>
        </a>
      </div>
    </div>`).join('')}
  </div>`;
}

let content = fs.readFileSync('index.html', 'utf8');

// Replace the sections one by one
const pubsRegex = /<!-- Publications -->\s*<div class="tab-panel" id="tab-pubs">[\s\S]*?<!-- Patents -->/;
content = content.replace(pubsRegex, `<!-- Publications -->\n    <div class="tab-panel" id="tab-pubs">\n      ${generateCards(data.pubs)}\n    </div>\n\n    <!-- Patents -->`);

const patentsRegex = /<!-- Patents -->\s*<div class="tab-panel hidden" id="tab-patents">[\s\S]*?<!-- Funding -->/;
content = content.replace(patentsRegex, `<!-- Patents -->\n    <div class="tab-panel hidden" id="tab-patents">\n      ${generateCards(data.patents)}\n    </div>\n\n    <!-- Funding -->`);

const fundingRegex = /<!-- Funding -->\s*<div class="tab-panel hidden" id="tab-funding">[\s\S]*?<!-- Conferences -->/;
content = content.replace(fundingRegex, `<!-- Funding -->\n    <div class="tab-panel hidden" id="tab-funding">\n      ${generateCards(data.funding)}\n    </div>\n\n    <!-- Conferences -->`);

const confRegex = /<!-- Conferences -->\s*<div class="tab-panel hidden" id="tab-conf">[\s\S]*?<\/section>/;
content = content.replace(confRegex, `<!-- Conferences -->\n    <div class="tab-panel hidden" id="tab-conf">\n      ${generateCards(data.conf)}\n    </div>\n  </div>\n</section>`);

fs.writeFileSync('index.html', content);
console.log('Successfully updated HTML structure for publications section');
