export const creatPymentModal = () => {
  const element = document.createElement("div");
  element.classList.add("modal");
  element.id = "paymentModal";
  element.innerHTML = String.raw`
<div class='modal-content'>
<span class='close'>&times;</span>
<h2>Payment Information</h2>
<div class='first-Param'>
<label for='cardnumber'>Card Number</label>
<input id='cardnumber' type='text' placeholder='Card Number'>
</div>
<div class='second-param'>
<div class='expire-date'>
<label for='cardexpire'>Expire Date</label>
<input id='cardexpire' type='text' placeholder='Card Number'>
</div>
<div class='cvv'>
<label for='cvvcard'>CVV</label>
<input id='cvcard' type='text' placeholder='Card Number'>
</div>
</div>
<div class='cardholder'>
    <label for='carholder'>Card Holder</label>
<input id='cardHolder' type='text' placeholder='Card Holder'>
</div>
<button id='payNowBtn'>Pay now</button>
<div id='payment-loading' class='payment-loading hidden'>
<div class='loader'></div>
<p>Processing payment...</p>
</div>
<div id='messageResult' class='message-result hidden'>
  <div class='result-icon'></div>
  <p class='result-text'></p>
</div>
</div>`;
  return element;
};
