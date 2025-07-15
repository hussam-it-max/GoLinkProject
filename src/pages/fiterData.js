import { creatDriverElement } from "../views/driverView.js";
import { attachSubmitListeners } from "./handelEvent.js";
export const filterDrivers = (drivers, sortBy) => {
  let sortedDrivers;
  const driversList = document.getElementById("drivers-list");
  driversList.innerHTML = "";
  if (sortBy === "rating") {
    sortedDrivers = drivers.sort((a, b) => b[sortBy] - a[sortBy]);
  } else {
    sortedDrivers = drivers.sort((a, b) => a[sortBy] - b[sortBy]);
  }
  sortedDrivers.forEach((driver) => {
    const driverElement = creatDriverElement(driver);
    driversList.appendChild(driverElement);
  });
  attachSubmitListeners();
};
