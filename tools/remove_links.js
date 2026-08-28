const fs = require('fs');
let content = fs.readFileSync('index.html', 'utf8');

// The link block to remove from Patents, Funding, and Conference panels
const linkRegex = /<a href="#" target="_blank" class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-\[#e1f5fe\] text-\[#0288d1\] transition group-hover:bg-\[#b3e5fc\]">\s*<svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M3 10a\.75\.75 0 01\.75-\.75h10\.638L10\.23 5\.29a\.75\.75 0 111\.04-1\.08l5\.5 5\.25a\.75\.75 0 010 1\.08l-5\.5 5\.25a\.75\.75 0 11-1\.04-1\.08l4\.158-3\.96H3\.75A\.75\.75 0 013 10z" clip-rule="evenodd" \/><\/svg>\s*<\/a>/g;

// We only want to remove them from tab-patents, tab-funding, and tab-conf.
// tab-pubs might have real links (e.g., doi), though earlier we generated some with URLs. Wait, the generated ones for pubs have actual URLs (e.g. href="https://doi.org...").
// Only the patents, funding, and conf cards have href="#"
// Therefore, simply replacing all matches of href="#" with this exact class structure will safely target only the empty links.

content = content.replace(linkRegex, '');

fs.writeFileSync('index.html', content);
console.log('Removed empty links from cards.');
