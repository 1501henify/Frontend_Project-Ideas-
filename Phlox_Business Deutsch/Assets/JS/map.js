// Geografische Koordinaten der festen Position
var latitude = 6.1524;
var longitude = 6.8257;

// Initialisierung der Karte mit festem Standort
var map = L.map('map', {
  center: [latitude, longitude],
  zoom: 15, // Zoom-Stufe festlegen
  zoomControl: false, // Zoom-Kontrollen deaktivieren
  dragging: false, // Ziehen der Karte deaktivieren
  scrollWheelZoom: false, // Zoom mit Scrollrad deaktivieren
  doubleClickZoom: false, // Zoom mit Doppelklick deaktivieren
  boxZoom: false, // Rechteck-Zoom deaktivieren
  touchZoom: false, // Zoom mit Touch-Gesten deaktivieren
});

// OpenStreetMap-Kartenlayer hinzufügen
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap-Mitwirkende',
}).addTo(map);

// Marker an der festen Position hinzufügen
L.marker([latitude, longitude])
  .addTo(map)
  .bindPopup(
    '<b>Fester Standort</b><br>Breite: ' + latitude + '<br>Länge: ' + longitude
  )
  .openPopup();
