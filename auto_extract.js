const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function extractPhotos() {
  const scanDir = 'public/images/menu scan';
  const outDir = 'public/images/extracted';
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const files = fs.readdirSync(scanDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));
  
  for (const file of files) {
    if (file === 'menu-1.jpg') continue; // Skip huge bulgogi set poster for now
    
    const filePath = path.join(scanDir, file);
    console.log(`Processing ${file}...`);
    
    try {
      const image = sharp(filePath);
      const { width, height } = await image.metadata();
      const raw = await image.raw().toBuffer();
      
      const isWhite = (idx) => raw[idx] > 220 && raw[idx+1] > 220 && raw[idx+2] > 220;
      
      const boxes = [];
      const visited = new Uint8Array(width * height);
      
      // We will look for horizontal white lines that represent the top of a polaroid
      for (let y = 0; y < height; y += 5) {
        for (let x = 0; x < width; x += 5) {
          const vIdx = y * width + x;
          if (visited[vIdx]) continue;
          
          if (isWhite(vIdx * 3)) {
            // Check if this is a large white block.
            // Let's find the approximate bounding box.
            let minX = x, maxX = x;
            while (maxX < width && isWhite((y * width + maxX) * 3)) {
              maxX++;
            }
            
            // If the white line is at least 150px wide, it might be a polaroid top edge
            if (maxX - minX > 150) {
              let minY = y, maxY = y;
              // Find bottom edge by scanning down from the middle
              const midX = Math.floor((minX + maxX) / 2);
              while (maxY < height && isWhite((maxY * width + midX) * 3)) {
                maxY++;
              }
              
              const boxWidth = maxX - minX;
              const boxHeight = maxY - minY;
              
              if (boxWidth > 150 && boxHeight > 150 && boxWidth < width * 0.9) {
                // We found a box! 
                boxes.push({
                  file,
                  left: minX,
                  top: minY,
                  width: boxWidth,
                  height: boxHeight
                });
                
                // Mark region as visited so we don't overlapping boxes
                for (let vy = minY; vy < maxY; vy += 5) {
                  for (let vx = minX; vx < maxX; vx += 5) {
                    visited[vy * width + vx] = 1;
                  }
                }
              }
            } else {
              visited[vIdx] = 1;
            }
          } else {
            visited[vIdx] = 1;
          }
        }
      }
      
      console.log(`Found ${boxes.length} boxes in ${file}`);
      
      // Filter overlapping boxes or duplicates
      const uniqueBoxes = [];
      for (const box of boxes) {
        let overlap = false;
        for (const uBox of uniqueBoxes) {
          if (Math.abs(box.left - uBox.left) < 100 && Math.abs(box.top - uBox.top) < 100) {
            overlap = true;
            break;
          }
        }
        if (!overlap) uniqueBoxes.push(box);
      }
      
      // Extract them
      for (let i = 0; i < uniqueBoxes.length; i++) {
        const box = uniqueBoxes[i];
        // add some padding or adjust to crop inside the white border
        // Actually, cropping the white border is fine, or we can crop inside it.
        // Let's just crop exactly the white box
        let cropLeft = Math.max(0, box.left);
        let cropTop = Math.max(0, box.top);
        let cropWidth = Math.min(width - cropLeft, box.width);
        let cropHeight = Math.min(height - cropTop, box.height);
        
        await sharp(filePath)
          .extract({ left: cropLeft, top: cropTop, width: cropWidth, height: cropHeight })
          .toFile(path.join(outDir, `${file.replace('.jpg', '')}_crop_${i}.jpg`));
      }
      
    } catch (err) {
      console.error(`Error processing ${file}:`, err);
    }
  }
}

extractPhotos().then(() => console.log('All done!')).catch(console.error);
