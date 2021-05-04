/* BUTTON */
document.querySelector('button').addEventListener('click', function () { 
var burger_price = 10;
var checks = document.querySelectorAll("input[type='checkbox']");
/* /BUTTON */

/* VALORE CHECKBOX */
var sum = null;
for(var i = 0; i < checks.length; i++) {
    var element = checks[i];
    if(element.checked) {
        sum += Number(element.getAttribute('date-price'))
    }
}
/* /VALORE CHECKBOX */

/* CALCOLO PREZZO */
var totalPrice = burger_price  + sum;
console.log(totalPrice);
document.getElementById('total_price').innerHTML = '$ ' + totalPrice;
/* /CALCOLO PREZZO */

/* COUPON */
var userCoupon = document.getElementById('coupon').value;
var couponsList = ['Burger', 'Promo10', 'Salty'];

for (i = 0; i < couponsList.length; i++){
    if(userCoupon === couponsList[i]) {
        var sconto = (totalPrice*20)/100;
        console.log('lo sconto è di ' + sconto);
        totalPrice -= sconto;
        console.log('Il prezzo finale è :' + totalPrice);
        document.getElementById('total_price').innerHTML = '$ ' + totalPrice;
        }
    }
});
/* /COUPON */