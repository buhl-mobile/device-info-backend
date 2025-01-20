const express = require('express');
const app = express();
const port = process.env.PORT || 1000;

// Middleware, um JSON-Daten zu parsen
app.use(express.json());

// POST-Endpunkt zum Empfangen der Handydaten
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body;
  console.log('Empfangene Handydaten:', deviceInfo);  // Logge die empfangenen Daten

  // Sende eine Antwort zurück
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo
  });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
