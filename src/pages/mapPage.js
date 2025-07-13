let map=null;
export const settingMap=(Lat=52.37,Lon=4.89)=>{
     if (map) {
        map.remove();
        map = null;
    }
     map = L.map('map').setView([Lat, Lon], 12);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
}
export const getMap=()=>{
    return map;
}
