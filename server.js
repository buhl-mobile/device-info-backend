const getDeviceModel = (userAgent) => {
  const deviceMapping = {
    "iPhone10,1": "iPhone 8",
    "iPhone10,4": "iPhone 8",
    "iPhone10,2": "iPhone 8 Plus",
    "iPhone10,5": "iPhone 8 Plus",
    "iPhone10,3": "iPhone X",
    "iPhone10,6": "iPhone X",
    "iPhone11,8": "iPhone XR",
    "iPhone11,2": "iPhone XS",
    "iPhone11,6": "iPhone XS Max",
    "iPhone12,1": "iPhone 11",
    "iPhone12,3": "iPhone 11 Pro",
    "iPhone12,5": "iPhone 11 Pro Max",
    "iPhone13,2": "iPhone 12",
    "iPhone13,3": "iPhone 12 Pro",
    "iPhone14,2": "iPhone 13 Pro",
    "iPhone14,5": "iPhone 13",
    "iPhone15,2": "iPhone 14 Pro",
    "iPhone15,4": "iPhone 14"
    // Füge weitere Modelle hinzu, falls notwendig
  };

  // Suche im User-Agent nach den iPhone-Identifikatoren
  const match = userAgent.match(/iPhone\d+,\d+/);
  if (match) {
    const identifier = match[0];
    return deviceMapping[identifier] || "Unbekanntes iPhone-Modell";
  }
  return "Kein iPhone-Modell erkannt";
};

// Im POST-Endpunkt verwenden:
app.post('/device-info', (req, res) => {
  const userAgent = req.headers['user-agent'];
  const model = getDeviceModel(userAgent);

  console.log('Erkanntes Modell:', model);

  res.json({
    message: 'Gerätedaten erfolgreich empfangen!',
    deviceModel: model,
    userAgent,
    storage: 'Nicht verfügbar', // Speicher ist weiterhin nicht verfügbar
    battery: 'Nicht verfügbar'  // Batterie ebenfalls
  });
});
