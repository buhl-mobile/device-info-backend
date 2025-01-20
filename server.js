const express = require('express');
const bodyParser = require('body-parser');
const winston = require('winston');  // Winston für Logging importieren
const app = express();

// Logging konfigurieren
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.simple(),
  transports: [
    new winston.transports.Console(),  // Logs in der Konsole anzeigen
    new winston.transports.File({ filename: 'logs/app.log' })  // Logs in einer Datei speichern
  ],
});

// Body Parser Middleware, um den Request-Body zu lesen
app.use(bodyParser.json());

// Beispiel-POST-Route für Handydaten
app.post('/device-info', (req, res) => {
  const deviceInfo = req.body;  // Empfangene Daten aus dem Request-Body

  // Logge die empfangenen Daten
  logger.info('Empfangene Handydaten:', deviceInfo);

  // Antworte dem Client, dass die Daten erfolgreich empfangen wurden
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo,
  });
});

// Server starten
app.listen(3000, () => {
  logger.info('Server läuft auf Port 3000');
});
