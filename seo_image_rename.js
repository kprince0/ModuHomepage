const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/app/digital-menu/page.tsx');
let content = fs.readFileSync(pagePath, 'utf-8');

const imageDir = path.join(__dirname, 'public/images/extracted_smart');

// Match lines like: { name: "Tonkotsu", description: "...", image: "/images/extracted_smart/menu-7_6.jpg" }
const regex = /{ name: "([^"]+)",([^}]*?)image: "\/images\/extracted_smart\/([^"]+)" }/g;

let match;
let count = 0;
const changes = [];

while ((match = regex.exec(content)) !== null) {
  const name = match[1];
  const oldFilename = match[3];
  
  // Slugify name: lowercase, replace spaces with hyphens, remove special chars
  let slug = name.toLowerCase().replace(/[^a-z0-string]/g, ' ').trim().replace(/\s+/g, '-');
  
  // Create SEO filename
  const newFilename = `${slug}-jacksonville.jpg`;
  
  changes.push({
    oldPath: path.join(imageDir, oldFilename),
    newPath: path.join(imageDir, newFilename),
    oldPattern: `/images/extracted_smart/${oldFilename}`,
    newPattern: `/images/extracted_smart/${newFilename}`
  });
}

console.log(`Found ${changes.length} images to rename/update.`);

let successCount = 0;
for (const change of changes) {
  try {
    if (fs.existsSync(change.oldPath)) {
      // First, handle name collisions if multiple items share the same slug/filename
      let finalNewPath = change.newPath;
      let finalNewPattern = change.newPattern;
      let counter = 1;
      while(fs.existsSync(finalNewPath) && finalNewPath !== change.oldPath) {
          const parts = change.newFilename.split('.jpg');
          const altName = `${parts[0]}-${counter}.jpg`;
          finalNewPath = path.join(imageDir, altName);
          finalNewPattern = `/images/extracted_smart/${altName}`;
          counter++;
      }
      
      fs.renameSync(change.oldPath, finalNewPath);
      
      // Replace in TSX content
      content = content.replace(change.oldPattern, finalNewPattern);
      successCount++;
    } else {
        // If file already renamed but tsx not updated, or missing
        console.log(`File missing or already renamed: ${change.oldPath}`);
    }
  } catch (err) {
    console.error(`Error with ${change.oldPath}:`, err);
  }
}

// Save TSX
fs.writeFileSync(pagePath, content);
console.log(`Successfully renamed ${successCount} images and updated digital-menu/page.tsx.`);

// Also let's rename the two blog/hero images that were manually uploaded if needed,
// but they are already descriptive: 'Kimchi Tonkatsu.png', 'Broth.jpg'. Maybe we can just stick to extracted_smart.
