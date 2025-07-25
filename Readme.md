# Uber-like Ride Booking  (Demo)

This is a simple demo project implementing core features of an Uber-like ride booking app using JavaScript and Leaflet.js.  
The app allows users to enter pickup and destination locations, displays routes a on a map, and drivers provides filtering options, and simulates a payment process.

---

## Features

- **Location Search with Autocomplete:**  
  Uses OpenStreetMap Nominatim API for location suggestions as you type.

- **Interactive Map:**  
  Displays origin and destination markers, route polylines with Leaflet.js.

- **Driver List & Filtering:**  
  Shows available drivers with details such as distance, price, rating, and duration.  
  Sort drivers by price or rating or nearest,

- **Route Calculation:**  
  Uses OpenRouteService API for driving duration and distances and coordinates.

- **Payment Simulation:**  
  Shows a payment modal and simulates payment processing with a delay.

- **Error Handling:**  
  Displays user-friendly error messages for invalid input or API failures.

---

## Technologies & APIs

- **Frontend:** Vanilla JavaScript, ES6 modules  
- **Mapping:** Leaflet.js  
- **Geocoding & Search:** OpenStreetMap Nominatim API  
- **Routing & Distance:** OpenRouteService API (requires API key)  

---

## File Structure Overview

```bash
/pages
├── homepage.js # Main page script initializing map and UI
├── mapPage.js # Map initialization and interaction
├── handelRequest.js # Handles API requests (search, route, drivers)
├── handelEvent.js # Handles user events and interactions
├── filterDrivers.js # Logic for filtering and sorting drivers
├── errorPage.js # Displays error messages
├── paymentProcess.js # Simulates payment modal and process
├── handelLocation # to fetch users'location
├── cratMarkers.js # add markers for location and destinations

/views
├── driverView.js # Renders driver list items
├── mapView.js # Renders map markers and routes
├── paymentView.js # Creates payment modal HTML
├── searchBox.js # Creates search input boxes
├── loadingView.js # add spinner during reload data


/modules
└── Drivers.json # Static driver data
```

---

## Setup & Usage
 
1. Open the main HTML file that loads `homepage.js` and the necessary modules.  
2. Enter pickup and destination locations using the search boxes.  
3. Click **Search** to display the route and available drivers on the map.  
4. Use the **Sort by Price** or **Sort by Rating** buttons to reorder the driver list.  
5. Click **Submit** next to a driver to open the payment modal and simulate payment.  
6. Payment success or failure messages will be shown accordingly.

---

## Important Notes

- You need to provide your own OpenRouteService API key in `handelRequest.js` at `API_KEY` constant to enable route and distance fetching.

- The payment process is only simulated with a delay and does not perform any real transactions.

- Driver data is currently static from `Drivers.json` and randomly assigned distances and prices for demo purposes.

---


