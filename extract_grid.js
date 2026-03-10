const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function extractGrid() {
  const scanDir = 'public/images/menu scan';
  const outDir = 'public/images/extracted';
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(scanDir).filter(f => f.match(/menu-\d+\.jpg/));
  
  for (const file of files) {
    if (file === 'menu-1.jpg') continue; // Title page
    
    console.log(`Extracting grid for ${file}...`);
    try {
      const image = sharp(path.join(scanDir, file));
      const { width, height } = await image.metadata();
      
      const cols = 2;
      const rows = 4;
      const cellW = Math.floor(width / cols);
      const cellH = Math.floor(height / rows);
      
      // Inside each cell, the text is on the left (~50%) and image is on the right (~50%)
      // For the right column, text is on the left, image on right.
      const photoBoxW = Math.floor(cellW * 0.45);
      const photoBoxH = Math.floor(cellH * 0.7);
      
      let index = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const cellX = c * cellW;
          const cellY = r * cellH;
          
          // Photo is on the right side of the cell
          const cropX = cellX + Math.floor(cellW * 0.5);
          const cropY = cellY + Math.floor(cellH * 0.15);
          
          // boundary check
          if (cropX + photoBoxW > width || cropY + photoBoxH > height) continue;

          await sharp(path.join(scanDir, file))
            .extract({ left: cropX, top: cropY, width: photoBoxW, height: photoBoxH })
            .toFile(path.join(outDir, `${file.replace('.jpg', '')}_${index}.jpg`));
            
          index++;
        }
      }
    } catch (err) {
      console.error(`Status error on ${file}:`, err);
    }
  }
}

extractGrid().then(() => console.log('Extraction complete.')).catch(console.error);
