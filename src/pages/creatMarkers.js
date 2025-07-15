import { getMap } from "./mapPage.js";
export const addMark = (originLat, originLon, desLat, desLon, coordinates) => {
  const map = getMap();
  if (map) {
    L.marker([originLat, originLon]).addTo(map);
    L.marker([desLat, desLon]).addTo(map);
    const bounds = L.latLngBounds([
      [originLat, originLon],
      [desLat, desLon],
    ]);
    map.fitBounds(bounds);
    const leafletCoords = coordinates.map((coord) => [coord[1], coord[0]]);
    const polyline = L.polyline(leafletCoords, { color: "blue" }).addTo(map);
    map.fitBounds(polyline.getBounds());
  }
};
