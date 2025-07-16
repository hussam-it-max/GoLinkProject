import { InitResultsPage } from "./resultsPage.js";
import { showError } from "./errorPage.js";
import { removeLoadingElement } from "../views/loadingView.js";
import { getMap } from "./mapPage.js";
import { handleSearchError } from "./errorPage.js";

export const fetchData = async (query) => {
  const link = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query
  )}&format=json&limit=1`;

  const response = await fetch(link);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`NOT_FOUND ${response.status} ${response.statusText}`);
    } else if (response.status === 500) {
      throw new Error(`SERVER_ERROR ${response.status} ${response.statusText}`);
    } else {
      throw new Error(
        `NETWORK_ERROR ${response.status} ${response.statusText}`
      );
    }
  }
  const data = await response.json();
  const lat = data[0].lat;
  const lon = data[0].lon;
  return { lat, lon };
};

async function getDestance(originLon, originLat, desLon, desLat) {
  const response = await fetch(
    `https://api.openrouteservice.org/v2/directions/driving-car?api_key=eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6Ijg2NDc0YjE3YmE3NDRhMGRhMDEzN2I3NzczZDA0ZmI3IiwiaCI6Im11cm11cjY0In0=&start=${originLon},${originLat}&end=${desLon},${desLat}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`NOT_FOUND ${response.status} ${response.statusText}`);
    } else if (response.status === 500) {
      throw new Error(`SERVER_ERROR ${response.status} ${response.statusText}`);
    } else {
      throw new Error(
        `NETWORK_ERROR ${response.status} ${response.statusText}`
      );
    }
  }
  const data = await response.json();
  const segment = data.features[0].properties.segments[0];
  const distanceKmMeters = (segment.distance / 1000).toFixed(2);
  const durationMin = (segment.duration / 60).toFixed(1);
  const coordinates = data.features[0].geometry.coordinates;
  return { distanceKmMeters, durationMin, coordinates };
}

export const getCoordinates = async () => {
  try {
    const inputLocation = document.getElementById("inputLocation").value.trim();
    const inputDestination = document
      .getElementById("inputDestination")
      .value.trim();
    if (!inputLocation || !inputDestination) {
      removeLoadingElement();
      showError("Both location and Destination are required!");
      return;
    }
    const [originData, destinationDate] = await Promise.all([
      fetchData(inputLocation),
      fetchData(inputDestination),
    ]);
    const { lat: originLat, lon: originLon } = originData;
    const { lat: desLat, lon: desLon } = destinationDate;
    const { distanceKmMeters, durationMin, coordinates } = await getDestance(
      originLon,
      originLat,
      desLon,
      desLat
    );
    removeLoadingElement();
    InitResultsPage(
      originLat,
      originLon,
      desLat,
      desLon,
      distanceKmMeters,
      durationMin,
      coordinates,
      inputLocation,
      inputDestination
    );
  } catch (error) {
    removeLoadingElement();
    console.error(error);
    handleSearchError(error);
  }
};

export const getDrivers = async (distance, duration, originLon, originLat) => {
  const baseFare = 3;
  const drivers = await fetchDrivers();

  const result = await getDriversToCustomerMatrix(
    originLon,
    originLat,
    drivers
  );
  for (let i = 0; i < drivers.length; i++) {
    drivers[i].distanceToCustomer = (result.distances[0][i] / 1000).toFixed(2);
    drivers[i].durationToCustomer = (result.durations[0][i] / 60).toFixed(1);
    drivers[i].distance = distance;
    drivers[i].duration = duration;
    drivers[i].price = (baseFare + distance * drivers[i].ratePerKm).toFixed(2);
  }
  setDriverOnMap(drivers);
  return drivers;
};

async function fetchDrivers() {
  const response = await fetch("/src/modules/Drivers.json");
  if (!response.ok) {
    throw new Error(
      `FetchDriver error ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
}

async function getDriversToCustomerMatrix(originLon, originLat, drivers) {
  const apiKey =
    "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6Ijg2NDc0YjE3YmE3NDRhMGRhMDEzN2I3NzczZDA0ZmI3IiwiaCI6Im11cm11cjY0In0=";
  const locations = [
    [originLon, originLat],
    ...drivers.map((driver) => [driver.lon, driver.lat]),
  ];
  const body = {
    locations,
    sources: [0],
    destinations: drivers.map((_, i) => i + 1),
    metrics: ["distance", "duration"],
  };
  const response = await fetch(
    "https://api.openrouteservice.org/v2/matrix/driving-car",
    {
      method: "POST",
      headers: {
        Authorization: apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }
  );
  const data = await response.json();
  return data;
}
export const getSuggestion = async (query) => {
  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(
    query
  )}&format=json&limit=5&countrycodes=nl`;
  const response = await fetch(url);
  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`NOT_FOUND ${response.status} ${response.statusText}`);
    } else if (response.status === 500) {
      throw new Error(`SERVER_ERROR ${response.status} ${response.statusText}`);
    } else {
      throw new Error(
        `NETWORK_ERROR ${response.status} ${response.statusText}`
      );
    }
  }

  const data = await response.json();
  return data;
};
export const renderSuggestions = (suggestions, suggestionsList) => {
  suggestionsList.innerHTML = "";
  suggestions.forEach((item) => {
    const suggestionItem = document.createElement("option");
    suggestionItem.value = item.display_name;
    suggestionsList.appendChild(suggestionItem);
  });
};
function setDriverOnMap(drivers) {
  const map = getMap();
  const carIcon = L.icon({
    iconUrl:
      "https://icon-library.com/images/car-icon-side-view/car-icon-side-view-25.jpg",
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
  drivers.forEach((driver) => {
    L.marker([driver.lat, driver.lon], { icon: carIcon })
      .addTo(map)
      .bindPopup(driver.name);
  });
}
