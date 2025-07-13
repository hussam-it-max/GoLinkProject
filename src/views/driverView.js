export const creatDriverElement=({name,distance,duration,price,rating,distanceToCustomer,durationToCustomer})=>{
    const div=document.createElement('div');
    div.classList.add('driver-card');
    div.innerHTML=String.raw`
    <img src='https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'  alt='car' class='car-image'>
    <div class='driver-info'>
    <h3 class="driver-name">${name}</h3>   
<div class="driver-details">
    <span class="distance"> your trip ${distance}km (~${duration} min) </span>
    <span class="price">€${price}</span>
    <span class="driver-ditance-customer">Driver's distance to you ${distanceToCustomer} Km</span>
    <span class="eta">Estimated arrival: ${durationToCustomer} min</span>
    <span class="rating">⭐ ${rating}</span>
     
<button id='submitButton' class='btn-submit'>submit</button> 
</div>
</div>`
;
return div;
};


/*color: #888888;*/