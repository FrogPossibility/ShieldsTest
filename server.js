const express = require("express");

const app = express();
const PORT = 3000;

// Genera lo shield come SVG
function generateShield(label, message, labelColor, messageColor) {
  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="150" height="30">
    <rect width="75" height="30" fill="${labelColor || '#555'}" />
    <rect x="75" width="75" height="30" fill="${messageColor || '#4c1'}" />
    <text x="37.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${label}</text>
    <text x="112.5" y="20" fill="#fff" font-family="Arial" font-size="14" text-anchor="middle">${message}</text>
  </svg>
  `;
}

// Endpoint per generare lo shield
app.get("/shield", (req, res) => {
  const { label, message, labelColor, messageColor } = req.query;

  const shield = generateShield(
    label || "Label",
    message || "Message",
    labelColor || "#555",
    messageColor || "#4c1"
  );

  res.setHeader("Content-Type", "image/svg+xml");
  res.send(shield);
});

// Avvia il server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
