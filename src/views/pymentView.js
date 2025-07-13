export const creatPymentModal=()=>{
const element=document.createElement('div');
element.classList.add('modal');
element.id='paymentModal';
element.innerHTML=String.raw`
<div class='modal-content'>
<span class='close'>&times;</span>
<h2>Payment Information</h2>
<div class='first-Param'>
<label for='cardnumber'>Card Number</label>
<input id='cardnumber' type='text' placeholder='Card Number'>
</div>
<div class='second-param'>
<div class='expire-date'>
<label for='cardexpire'>Card Number</label>
<input id='cardexpire' type='text' placeholder='Card Number'>
</div>
<div class='cvv'>
<label for='cvvcard'>Card Number</label>
<input id='cvcard' type='text' placeholder='Card Number'>
</div>
</div>
<div class='card-name'>
    <label for='cardname'>Card Number</label>
<input id='cardname' type='text' placeholder='Card Number'></div>

<input type='text' placeholder='Card Holder'>
<button id='payNowBtn'>Pay now</button>
</div>`;
return element;
}
