export const fetchLocation = async () => {
  let lon;
  let lat;
  if (navigator.geolocation) {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    lon = position.coords.longitude;
    lat = position.coords.latitude;
  }
  const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;
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
  const result = await response.json();
  console.log(result);
  const inputLocation = document.getElementById("inputLocation");
  inputLocation.value = result.display_name;
};
