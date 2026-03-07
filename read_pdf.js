const { PdfReader } = require("pdfreader");
const fs = require("fs");

let fullText = "";

new PdfReader().parseFileItems("c:/Users/BigDaddy/Documents/Modu Web/2.23.2026 Black Red and White Modern Japanese Menu A4.pdf", (err, item) => {
  if (err) console.error("error:", err);
  else if (!item) console.log(fullText);
  else if (item.text) {
    fullText += item.text + "\n";
  }
});
