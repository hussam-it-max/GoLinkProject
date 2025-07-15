# 📁 views

This folder contains all the *view components* for the app. Each function here creates and returns a DOM element used in the single-page interface of the Uber-like ride-booking app.

All functions are **pure JS UI components** that can be imported and inserted into the main page as needed.

---

## ✅ Purpose

The `views` folder is for **modular, reusable UI components**. These help keep presentation logic separate from business logic and state management.

---

##  Files 

###  `creatAboutusPage`
Creates the "About Us" page with:
- Title
- Descriptive text
- CTA button
- Image

Used to introduce the service to users.

---

###  `creatDeiverList`
Creates an empty container `<div>` with id `drivers-list` to hold driver cards.

---

###  `creatDriverElement`
Generates a single driver card:
- Driver name
- Trip distance and duration
- Price
- Driver distance from customer
- ETA
- Rating
- Submit button

---

###  `creatLodingElement`
Loading UI:
- Spinner
- "Searching Results..." message

Includes **`removeLoadingElement()`** to remove it from DOM.

---

###  `creatMapElement`
Returns an empty `<div>` with id `map` to hold the Leaflet/Google/Mapbox map.

---

###  `creatPymentModal`
Simulated payment modal with:
- Card fields (number, expiry, CVV, holder)
- "Pay now" button
- Loading state
- Result message area

---

###  `creatSearchBoxWithTitle`
Main search form:
- Title & description
- Pickup and Dropoff inputs
- Datalists for autocomplete
- Error message box
- Search button

---

###  `createSearchBoxSimple`
Summary search box variant (used on results page):
- Pre-filled pickup/dropoff
- Filters (Price, Rating, Nearest)
- Error box
- Search button

---


