export const creatSearchBoxWithTitle = () => {
  const element = document.createElement("div");
  element.classList.add("container");
  element.innerHTML = String.raw`
    <div class='search-box'>
    <div class='title-search-box'>
    <h1>Get ready for your first trip</h1>
    <p>Discover the convenience of Uber. Request a ride now, or schedule one for later directly from your browser.</p></div>
    <a class='location-link'>Your Current Location</a>
    <input list='pickupSuggestions' type='text' class='input-location input' id='inputLocation' placeholder="Pickup Location">
    <datalist id='pickupSuggestions' class='suggestion'></datalist>
    <input list='dropoffSuggestions' type='text' class='input-destination input' id='inputDestination' placeholder="Dropoff Location">
    <datalist id='dropoffSuggestions' class='suggestion'></datalist>
    <div id='errorMessage' class='error-box'></div>
    <button id='button-search' class='btn-search'>Search</button>
    </div>`;
  return element;
};
export const createSearchBoxSimple = (pickup, dropoff) => {
  const element = document.createElement("div");
  element.classList.add("container");
  element.innerHTML = `
  <div id='LiftSide' class='lift-side' >
  <div class='search-box-summery'>
    <input type='text' class='input-location input-summary' id='inputLocation' placeholder="Pickup Location" value="${pickup}">
    <datalist id='pickupSuggestions' class='suggestion '></datalist>
    <input type='text' class='input-destination input-summary' id='inputDestination' placeholder="Dropoff Location" value="${dropoff}">
    <datalist id='dropoffSuggestions' class='suggestion '></datalist>
    <button id='button-search' class='btn-summary'>Search</button></div>
    <div id='filter-list' class='list-filter'>
    <button id='filter-price' class='btn-filter'>Price↑</button>
    <button id='filter-rating' class='btn-filter'>Rating↓</button>
    <button id='filter-nearest' class='btn-filter'>Nearest↑</button>
    </div>
    <div id='errorMessage' class='error-box'></div>
    </div>`;
  return element;
};
