const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware, um JSON-Daten zu parsen
app.use(express.json());

// POST-Endpunkt für Handydaten
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body; // Daten aus der Anfrage lesen

  // Überprüfen, ob Daten vorhanden sind
  if (!deviceInfo || Object.keys(deviceInfo).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Keine Daten empfangen'
    });
  }

  console.log('Empfangene Handydaten:', deviceInfo); // Logge die Daten für die Überprüfung

  // Antwort mit den empfangenen Daten
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
