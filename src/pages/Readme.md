### /pages

> **These are the main logic files of the app.**
#### homepage.js
- Entry point for the app.
- Initializes map view, search boxes, and event listeners.
- Coordinates calls to other modules for searching, routing, displaying drivers, and payment.

---

#### mapPage.js
- Initializes the Leaflet map.
- Exports the map instance.
- Sets up tile layers and initial view settings.

---
#### handelRequest.js
- Contains all **API request logic**.
- Functions for:
  - Location search (Nominatim)
  - Fetching route directions and distances (OpenRouteService)
  - Loading static driver data
- Centralizes network calls so other files can use them easily.

---

## 📂 /pages

### handelEvent.js
Handles **all user events**:

- Search button clicks
- Driver selection
- Filter button clicks
- Payment modal events

Acts as a **controller** that wires up UI events to the business logic layer.  
Coordinates between user interactions and calls to functions in `handelRequest.js`, `filterDrivers.js`, `paymentProcess.js`, and the views.

---

### filterDrivers.js
Provides **functions to sort and filter** the driver list:

- Supports sorting by price or rating
- Returns new sorted arrays for rendering in the UI




### errorPage.js
Handles **displaying error messages** across the app in a consistent way.

- Centralized error UI logic in one module.
- Makes it easy for other modules to show standardized error boxes.
- Ensures users see clear, uniform messages when something goes wrong.

## ⚙️ How It Works (Flow)

A high-level overview of how the app works step by step:

1️⃣ User enters **pickup** and **destination** addresses in the search boxes.  
2️⃣ Autocomplete suggestions appear (powered by **Nominatim**).  
3️⃣ User clicks the **Search** button.  
4️⃣ App fetches the route using **OpenRouteService** and displays it on the **Leaflet** map.  
5️⃣ App loads drivers from **Drivers.json**, assigning simulated distances and prices.  
6️⃣ The **driver list** is displayed in the UI.  
7️⃣ User can **filter** drivers by **price** or **rating**.  
8️⃣ User selects a driver → **payment modal** opens.  
9️⃣ Payment process simulates delay → shows **success message**.

---

## 🚀 Setup & Usage

To run the app locally:

1️⃣ **Serve** the app with a local development server:

- Recommended tools:
  - [`live-server`](https://www.npmjs.com/package/live-server)


2️⃣ In `handelRequest.js`, replace:

```js
const API_KEY = "YOUR_API_KEY";


