const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function fixMissing() {
  const scanDir = 'public/images/menu scan';
  const outDir = 'public/images/extracted_smart';
  
  // Approximate grid locations based on 1538x1991 size
  const w = 450;
  const h = 450;
  
  // Col 1 is approx left: 450, Col 2 is approx left: 1000
  // Rows: approx top 300, 700, 1100, 1500
  
  const tasks = [
    // Menu 6 (Tea & Drink) - 2x2 grid
    { file: 'menu-6.jpg', name: 'menu-6_0.jpg', left: 450, top: 400, width: w, height: h }, // Iced Yuzu Tea
    { file: 'menu-6.jpg', name: 'menu-6_1.jpg', left: 1000, top: 400, width: w, height: h }, // Butterscotch Latte
    { file: 'menu-6.jpg', name: 'menu-6_2.jpg', left: 450, top: 800, width: w, height: h }, // Hot Yuzu Tea
    { file: 'menu-6.jpg', name: 'menu-6_3.jpg', left: 1000, top: 800, width: w, height: h }, // Strawberry Matcha Latte
    
    // Menu 7 (Ramen) - Missing row 4 right (Kimchi Tonkotsu)
    { file: 'menu-7.jpg', name: 'menu-7_7.jpg', left: 1045, top: 1530, width: 440, height: 420 },
    
    // Menu 8 (Ramen) - Missing row 4 right (Kimchi Shoyu)
    { file: 'menu-8.jpg', name: 'menu-8_7.jpg', left: 1045, top: 1530, width: 440, height: 420 },
    
    // Menu 10 (Entree) - Missing row 4 left and right (Beef Bulgogi Don, Pork Bulgogi Don)
    { file: 'menu-10.jpg', name: 'menu-10_6.jpg', left: 450, top: 1530, width: 440, height: 420 },
    { file: 'menu-10.jpg', name: 'menu-10_7.jpg', left: 1045, top: 1530, width: 440, height: 420 }
  ];

  for (const t of tasks) {
    console.log(`Extracting ${t.name}...`);
    try {
      await sharp(path.join(scanDir, t.file))
        .extract({ left: t.left, top: t.top, width: t.width, height: t.height })
        .toFile(path.join(outDir, t.name));
      console.log(`Success: ${t.name}`);
    } catch (e) {
      console.error(`Failed ${t.name}:`, e.message);
    }
  }
}

fixMissing().then(() => console.log('Done'));
