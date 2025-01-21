const express = require('express');
const cors = require('cors'); // CORS hinzufügen
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // CORS aktivieren
app.use(express.json());

// API-Endpunkt
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body;

  console.log('Daten empfangen:', deviceInfo);

  if (!deviceInfo || Object.keys(deviceInfo).length === 0) {
    return res.status(400).json({ error: 'Keine Daten empfangen' });
  }

  // Beispielantwort
  res.json({
    message: 'Erfolgreich empfangen!',
    data: deviceInfo,
  });
});

// Start der App
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
