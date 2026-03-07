const https = require('https');
https.get('https://kprince0.github.io/ModuHomepage/', (res) => {
  let data = '';
  res.on('data', d => data += d);
  res.on('end', () => {
    const regex = /src=\\?"([^"]*?images[^"]*?)\\?"/g;
    let match;
    const matches = [];
    while ((match = regex.exec(data)) !== null) {
      matches.push(match[1]);
    }
    console.log(matches.slice(0, 10));
  });
});
