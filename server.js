const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware zum Parsen von JSON-Daten
app.use(bodyParser.json());

// POST-Route, um die Handydaten zu empfangen
app.post('/device-info', (req, res) => {
  // Empfange die Handydaten aus dem Request-Body
  const deviceInfo = req.body;

  // Debugging: Die empfangenen Handydaten in der Konsole ausgeben
  console.log('Empfangene Handydaten:', deviceInfo);

  // Antworte dem Client mit einer Bestätigung
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo
  });
});

// Server starten
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
