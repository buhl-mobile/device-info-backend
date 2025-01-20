const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware: JSON-Daten parsen
app.use(express.json());

// POST-Endpunkt für Handydaten
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body; // JSON-Daten aus der Anfrage lesen
  
  // Überprüfen, ob Daten gesendet wurden
  if (!deviceInfo || Object.keys(deviceInfo).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Keine Daten empfangen'
    });
  }

  console.log('Empfangene Handydaten:', deviceInfo); // Log für Debugging

  // Antwort mit den empfangenen Daten
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo
  });
});

// GET-Route für die Basis-URL (optional)
app.get('/', (req, res) => {
  res.send('Willkommen bei der Device-Info-API! Benutze /device-info mit POST, um Daten zu senden.');
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
