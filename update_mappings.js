const fs = require('fs');
const path = require('path');

const pagePath = 'src/app/digital-menu/page.tsx';
let content = fs.readFileSync(pagePath, 'utf8');

const regex = /image:\s*"\/images\/extracted\/(menu-\d+_\d+)\.jpg"/g;

let match;
let replacements = [];

while ((match = regex.exec(content)) !== null) {
  const fullMatch = match[0];
  const filename = match[1] + '.jpg';
  const smartPath = path.join('public/images/extracted_smart', filename);
  
  if (fs.existsSync(smartPath)) {
    replacements.push({
      old: fullMatch,
      new: `image: "/images/extracted_smart/${filename}"`
    });
  } else {
    // If it doesn't exist, we remove the image property entirely (including preceding comma if any)
    // Actually, we can just replace the image portion with an empty string, but let's be careful about trailing commas.
    replacements.push({
      old: fullMatch,
      new: `/* missing image */`
    });
  }
}

// Remove the /* missing image */ and surrounding commas
for (const rep of replacements) {
  content = content.replace(rep.old, rep.new);
}

// cleanup commas: e.g. `, /* missing image */` -> ``
content = content.replace(/,\s*\/\*\smissing image\s\*\//g, '');
content = content.replace(/\/\*\smissing image\s\*\//g, '');

fs.writeFileSync(pagePath, content, 'utf8');
console.log('Updated page.tsx mappings!');
