const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware, um JSON-Daten zu verarbeiten
app.use(express.json());

// Einfache Route für Tests
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

app.post('/device-info', (req, res) => {
  // Empfange die Daten im Request-Body
  const deviceInfo = req.body;

  // Protokolliere die empfangenen Daten in der Konsole
  console.log('Empfangene Handydaten:', deviceInfo);

  // Sende eine Antwort zurück an den Client
  res.json({
    status: 'success',
    message: 'Daten empfangen',
    data: deviceInfo,
  });
});

    // Überprüfen, ob die notwendigen Daten vorhanden sind
    if (!os || !model) {
        return res.status(400).json({ error: 'Betriebssystem und Modell sind erforderlich.' });
    }

    // Hier kannst du die Daten weiterverarbeiten (z. B. in einer Datenbank speichern)
    res.json({
        message: 'Handydaten empfangen!',
        data: {
            os,
            model,
            storage: storage || 'Nicht angegeben',
            color: color || 'Nicht angegeben',
            battery: battery || 'Nicht angegeben'
        }
    });
});

// Starten des Servers
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
