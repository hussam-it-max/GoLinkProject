import { creatMapElement } from "../views/mapView.js";
import { createSearchBoxSimple } from "../views/searchBoxView.js";
import { addMark } from "./creatMarkers.js";
import { settingMap } from "./mapPage.js";
import { creatDeiverList } from "../views/DrirversView.js";
import { getDrivers } from "./handelRequest.js";
import { creatDriverElement } from "../views/driverView.js";
import { showError } from "./errorPage.js";
import { filterDrivers } from "./fiterData.js";
import { creatPymentModal } from "../views/pymentView.js";


export const InitResultsPage=async(originLat,originLon,desLat,desLon,destances,duration,coordinates,location,destination)=>{
    const userInterface=document.getElementById('userInterface');
    userInterface.innerHTML='';
    const searchBoxElementSimple=createSearchBoxSimple(location,destination);
    userInterface.appendChild(searchBoxElementSimple);
    const mapElement=creatMapElement();
    searchBoxElementSimple.appendChild(mapElement);
    settingMap();
    addMark(originLat,originLon,desLat,desLon,coordinates);
    const driverListElement=creatDeiverList();
    const liftSideElement=document.getElementById('LiftSide');
    liftSideElement.appendChild(driverListElement);
    let drivers;
    try{
     drivers=await getDrivers(destances,duration,originLon,originLat);
    drivers.forEach(driver=>{
    const driverElement=creatDriverElement(driver);
    driverListElement.appendChild(driverElement);
    })
 }
    catch(error){
        console.error(error);
        showError('Could not load drivers. Please try again.');
    }
       const sortByPriceEL=document.getElementById('filter-price');
    const sortByRatingEl=document.getElementById('filter-rating');
    sortByPriceEL.addEventListener('click',()=>{
        filterDrivers(drivers,'price'); 
    });
sortByRatingEl.addEventListener('click',()=>{
    filterDrivers(drivers,'rating');
})
const sortByNearestEl=document.getElementById('filter-nearest');
sortByNearestEl.addEventListener('click',()=>{
    filterDrivers(drivers,'distanceToCustomer');

})
const submitBtn=document.getElementById('submitButton');
const modal=creatPymentModal();
const close=document.querySelector('close');
submitBtn.addEventListener('click',()=>{
    modal.style.display='block';
    document.body.appendChild(modal);
})
close.addEventListener('click',()=>{
    const model=document.getElementById('modal');
    model.style.display='none';
})

    const buttonSearch=document.getElementById('button-search');
    buttonSearch.addEventListener('click',()=>{
        getCoordinates();
        
        
    });
}