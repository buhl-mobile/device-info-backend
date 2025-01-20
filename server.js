const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware, um statische Dateien zu bedienen (falls du statische Assets wie HTML/CSS/JS hast)
app.use(express.static('public'));

// Einfache Route für Tests
app.get('/', (req, res) => {
    res.send('Hello, your server is up and running!');
});

// Weitere API-Endpoints können hier hinzugefügt werden
// Beispiel: Eine Route, die Handydaten verarbeitet (z. B. vom QR-Code)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
