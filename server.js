const express = require('express');
const app = express();
const port = process.env.PORT || 10000;

// Middleware, um JSON-Daten zu verarbeiten
app.use(express.json());

// Einfache Route für Tests
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

// API-Route zum Empfangen von Handydaten (z. B. vom QR-Code)
app.post('/device-info', (req, res) => {
    const { os, model, storage, color, battery } = req.body;

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
