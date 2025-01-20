const express = require('express'); // Express importieren
const app = express(); // Express-Anwendung erstellen

const port = process.env.PORT || 10000;

// Middleware hinzufügen, um JSON-Daten zu parsen
app.use(express.json());

// API-Route definieren
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body; // JSON-Daten aus der Anfrage lesen
  console.log('Empfangene Handydaten:', deviceInfo);

  // Prüfen, ob Daten vorhanden sind
  if (!deviceInfo || Object.keys(deviceInfo).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Keine Daten empfangen'
    });
  }

  // Antwort senden
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo
  });
});

// Server starten
app.listen(port, () => {
  console.log(`Server läuft auf Port ${port}`);
});
