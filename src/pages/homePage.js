import { creatMapElement } from "../views/mapView.js";
import { creatSearchBoxWithTitle } from "../views/searchBoxView.js";
import { settingMap } from "./mapPage.js";
import { getCoordinates } from "./handelRequest.js";
import { creatAboutusPage } from "../views/aboutusView.js";
import { getSuggestion } from "./handelRequest.js";
import { renderSuggestions } from "./handelRequest.js";
import { creatLodingElement } from "../views/loadingView.js";
import { fetchLocation } from "./handelLocation.js";

export const initHomePage = () => {
  const userInterface = document.getElementById("userInterface");
  userInterface.innerHTML = "";

  const searchBoxElementWithTitle = creatSearchBoxWithTitle();
  userInterface.appendChild(searchBoxElementWithTitle);
  const mapElement = creatMapElement();
  searchBoxElementWithTitle.appendChild(mapElement);
  settingMap();
  const aboutusPage = creatAboutusPage();
  userInterface.appendChild(aboutusPage);
  const pickupInput = document.getElementById("inputLocation");
  const pickupList = document.getElementById("pickupSuggestions");
  let timeId = 0;
  pickupInput.addEventListener("keyup", async (event) => {
    const query = pickupInput.value.trim();
    if (query.length === 0) return;
    clearTimeout(timeId);
    timeId = setTimeout(async () => {
      try {
        const results = await getSuggestion(query);
        renderSuggestions(results, pickupList);
      } catch (error) {
        console.error(error);
        if (error.message.includes("NOT_FOUND")) {
          showError(
            "Oops Could not find results. Please check your locations."
          );
        } else if (error.message.includes("SERVER_ERROR")) {
          showError("Server error. Please try again later");
        } else {
          showError("Network error. Please check your connection.");
        }
      }
    }, 250);
  });

  const dropoffList = document.getElementById("dropoffSuggestions");
  const dropOffInput = document.getElementById("inputDestination");
  dropOffInput.addEventListener("keyup", (event) => {
    const query = dropOffInput.value.trim();
    if (query.length === 0) return;
    clearTimeout(timeId);
    timeId = setTimeout(async () => {
      try {
        const results = await getSuggestion(query);
        renderSuggestions(results, dropoffList);
      } catch (error) {
        console.error(error);
        if (error.message.includes("NOT_FOUND")) {
          showError(
            "Oops Could not find results. Please check your locations."
          );
        } else if (error.message.includes("SERVER_ERROR")) {
          showError("Server error. Please try again later");
        } else {
          showError("Network error. Please check your connection.");
        }
      }
    }, 250);
  });
  const locationLink = document.querySelector(".location-link");
  locationLink.addEventListener("click", async () => {
    try {
      await fetchLocation();
    } catch (error) {
      if (error.message.includes("NOT_FOUND")) {
        showError(
          "Oops Could not find your location. Please check your locations."
        );
      } else if (error.message.includes("SERVER_ERROR")) {
        showError("Server error. Please try again later");
      } else {
        showError("Network error. Please check your connection.");
      }
    }
  });
  const buttonSearch = document.getElementById("button-search");
  buttonSearch.addEventListener("click", () => {
    const loadingElement = creatLodingElement();
    document.body.appendChild(loadingElement);

    getCoordinates();
  });
};
