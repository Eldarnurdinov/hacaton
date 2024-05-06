// DOM
const cart = document.querySelector(".cart");

cart.innerHTML = `
<div class="d-flex">
<div>
<h4 class="cart-text-h">Your Cart</h4>
<p class="cart-text">Monthly payment Family</p>
<p class="cart-text">Premium plan</p>
<p class="cart-text">Vod plan</p>
</div>
<div>
 <img src="./img/OnAir/24/shopping/icon.svg"   alt=""  class="cart-text-h" />
<p class="cart-sum">3,500   <img src="./img/vectorx.svg"   alt=""  /></p>
<p class="cart-sum" >6,500  <img src="./img/vectorx.svg"   alt=""  /></p>
<p class="cart-sum">10,500  <img src="./img/vectorx.svg"   alt=""  /></p>
</div>
</div>
<div class="total">
<h3>TOTAL</h3>
<h4>20,500</h4>
</div>
<h4 class="pay-with">Payment with</h4>
<div class="cart-btns">
<div><p>Pay via</p></div>
<div><img src="./img/paypai.png"  alt="" /></div>
</div>
<div class="cart-btns">
<div><p>Pay via</p></div>
<div><img src="./img/ecoPayz logo.png"  alt="" /></div>
</div>
<div class="btn"><button>Back to Tarifs</button></div>
`;
