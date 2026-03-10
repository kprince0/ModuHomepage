const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processImage(file) {
  const scanDir = 'public/images/menu scan';
  const outDir = 'public/images/extracted_smart';
  
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const filePath = path.join(scanDir, file);
  console.log(`Processing ${file}...`);
  
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    const origW = metadata.width;
    const origH = metadata.height;
    
    // Downscale for faster processing
    const scale = 0.1;
    const sw = Math.floor(origW * scale);
    const sh = Math.floor(origH * scale);
    
    // Convert to grayscale and raw buffer
    const smallBuffer = await image
      .resize(sw, sh)
      .greyscale()
      .raw()
      .toBuffer();
    
    const visited = new Uint8Array(sw * sh);
    const components = [];
    
    // Helper to get pixel
    const getLuma = (x, y) => {
      if (x < 0 || x >= sw || y < 0 || y >= sh) return 0;
      return smallBuffer[y * sw + x];
    };
    
    for (let y = 0; y < sh; y++) {
      for (let x = 0; x < sw; x++) {
        const idx = y * sw + x;
        if (visited[idx]) continue;
        
        // White threshold (assuming polaroid border is brighter than 200)
        if (getLuma(x, y) > 200) {
          // BFS to find connected component
          const queue = [[x, y]];
          visited[idx] = 1;
          
          let minX = x, maxX = x, minY = y, maxY = y;
          let count = 0;
          
          while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            count++;
            
            if (cx < minX) minX = cx;
            if (cx > maxX) maxX = cx;
            if (cy < minY) minY = cy;
            if (cy > maxY) maxY = cy;
            
            // Check neighbors
            const neighbors = [
              [cx+1, cy], [cx-1, cy], [cx, cy+1], [cx, cy-1],
              [cx+1, cy+1], [cx-1, cy-1], [cx+1, cy-1], [cx-1, cy+1]
            ];
            
            for (const [nx, ny] of neighbors) {
              if (nx >= 0 && nx < sw && ny >= 0 && ny < sh) {
                const nIdx = ny * sw + nx;
                if (!visited[nIdx] && getLuma(nx, ny) > 200) {
                  visited[nIdx] = 1;
                  queue.push([nx, ny]);
                }
              }
            }
          }
          
          // Check if component size is reasonable for a polaroid
          // Expected polaroid size in small image: maybe 40x40 to 100x100
          const width = maxX - minX;
          const height = maxY - minY;
          
          if (width > 20 && height > 20 && width < sw * 0.8 && height < sh * 0.5) {
            // Also check density (is it mostly a box?)
            const boxArea = width * height;
            if (count > boxArea * 0.3) {
              components.push({
                minX: Math.floor(minX / scale),
                minY: Math.floor(minY / scale),
                maxX: Math.floor(maxX / scale),
                maxY: Math.floor(maxY / scale),
                width: Math.floor(width / scale),
                height: Math.floor(height / scale),
                smallCount: count
              });
            }
          }
        } else {
          visited[idx] = 1;
        }
      }
    }
    
    // Merge or remove overlaps
    const unique = [];
    for (const comp of components) {
      let overlap = false;
      for (const u of unique) {
        // If center of comp is inside u
        const cx = comp.minX + comp.width/2;
        const cy = comp.minY + comp.height/2;
        if (cx >= u.minX && cx <= u.maxX && cy >= u.minY && cy <= u.maxY) {
          overlap = true;
          break;
        }
      }
      if (!overlap) unique.push(comp);
    }

    // Sort components: Split into Left column and Right column based on minX, then sort by Y
    const splitX = Math.floor(sw / 2);
    const leftCol = unique.filter(c => c.minX < splitX);
    const rightCol = unique.filter(c => c.minX >= splitX);

    leftCol.sort((a, b) => a.minY - b.minY);
    rightCol.sort((a, b) => a.minY - b.minY);

    // Merge them back: Left column items first, then Right column items
    // Wait, the original page.tsx reading order (which used my simple grid)
    // read row by row (e.g. Row 1 Left, Row 1 Right, Row 2 Left, Row 2 Right).
    // Let's interleave them to reconstruct that reading order!
    const finalSorted = [];
    const maxLen = Math.max(leftCol.length, rightCol.length);
    for (let i = 0; i < maxLen; i++) {
        if (i < leftCol.length) finalSorted.push(leftCol[i]);
        if (i < rightCol.length) finalSorted.push(rightCol[i]);
    }
    
    console.log(`Found ${finalSorted.length} potential images in ${file}`);
    
    // Extract them
    for (let i = 0; i < finalSorted.length; i++) {
        const box = finalSorted[i];
        try {
          // Crop and let sharp figure out rotation if possible, but actually we just do bounding box
          await sharp(filePath)
            .extract({ left: box.minX, top: box.minY, width: box.width, height: box.height })
            .toFile(path.join(outDir, `${file.replace('.jpg', '')}_${i}.jpg`));
        } catch (e) {
          console.error(`Error cropping box ${i} in ${file}:`, e.message);
        }
    }
    
  } catch (err) {
    console.error(`Error processing ${file}:`, err);
  }
}

async function run() {
  const scanDir = 'public/images/menu scan';
  const files = fs.readdirSync(scanDir).filter(f => f.match(/menu-\d+\.jpg/));
  
  for (const file of files) {
    if (file === 'menu-1.jpg') continue; 
    await processImage(file);
  }
}

run().then(() => console.log('All done!')).catch(console.error);
