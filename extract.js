const sharp = require('sharp');

async function extract() {
  await sharp('public/images/menu scan/menu-2.jpg')
    .extract({ width: 300, height: 300, left: 400, top: 300 })
    .toFile('public/images/test_crop.jpg');
  console.log('done');
}

extract();
