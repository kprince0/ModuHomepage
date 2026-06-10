import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import sharp from 'sharp';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const IMAGE_DIR = path.join(__dirname, 'public/images');
const MENU_DIR = path.join(IMAGE_DIR, 'menu');
const SRC_DIR = path.join(__dirname, 'src');

const mapping = [
  { old: 'menu/Pork Bulgogi.png', new: 'menu/signature-pork-bulgogi-ramen-jacksonville.webp' },
  { old: 'menu/beef Bulgogi Set canva.png', new: 'menu/authentic-beef-bulgogi-set-jacksonville.webp' },
  { old: 'menu/Kimchi Tonkatsu.png', new: 'menu/best-kimchi-tonkotsu-ramen-jacksonville.webp' },
  { old: 'menu/matcha-ramen.jpg', new: 'menu/unique-matcha-ramen-jacksonville.webp' },
  { old: 'menu/Veg.png', new: 'menu/healthy-vegetable-ramen-jacksonville.webp' },
  { old: 'menu/TanTan.png', new: 'menu/creamy-tantanmen-ramen-jacksonville.webp' },
  { old: 'menu/spicy modu wings.png', new: 'menu/korean-spicy-fried-chicken-wings-jacksonville.webp' },
  { old: 'menu/curry tonkatsu 1.jpg', new: 'menu/savory-curry-tonkotsu-ramen-jacksonville.webp' },
  { old: 'chef-kim.jpg', new: 'chef-kim-culinary-mastery-jacksonville.webp' },
  { old: 'Broth.jpg', new: '18-hour-slow-cooked-ramen-broth-jacksonville.webp' },
  { old: 'Hand_Made_Noodle.png', new: 'hand-crafted-ramen-noodles-jacksonville.webp' },
];

async function optimize() {
  console.log('Starting image optimization...');

  for (const item of mapping) {
    const oldPath = path.join(IMAGE_DIR, item.old);
    const newPath = path.join(IMAGE_DIR, item.new);

    if (fs.existsSync(oldPath)) {
      console.log(`Optimizing: ${item.old} -> ${item.new}`);
      try {
        await sharp(oldPath)
          .webp({ quality: 90, force: true })
          .toFile(newPath);
        
        // Optionally delete old file if successful
        // fs.unlinkSync(oldPath); 
      } catch (err) {
        console.error(`Error optimizing ${item.old}:`, err);
      }
    } else {
      console.warn(`File not found: ${oldPath}`);
    }
  }

  console.log('Updating references in source code...');
  updateReferences(SRC_DIR);
  console.log('Optimization complete!');
}

function updateReferences(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      updateReferences(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.xml') || file.endsWith('.txt')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;
      for (const item of mapping) {
        const oldRef = item.old.replace(/ /g, '%20');
        const newRef = item.new;
        
        // Handle both URL encoded and literal filenames
        if (content.includes(item.old) || content.includes(oldRef)) {
          console.log(`Updating reference in ${file}: ${item.old} -> ${item.new}`);
          content = content.split(item.old).join(newRef);
          content = content.split(oldRef).join(newRef);
          changed = true;
        }
      }
      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

optimize();
