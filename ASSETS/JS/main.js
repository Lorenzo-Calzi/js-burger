var x = document.getElementById('cheese').getAttribute('date-price')
console.log(x);

document.querySelector('button').addEventListener('click', function () { 
    var burger_price = 10;
    var checks = document.querySelectorAll("input[type='checkbox']");

    var sumIngredients = null;
    for(var i = 0; i < checks.length; i++) {
        var element = checks[i];
        if(element.checked) {
            sumIngredients += Number(element.getAttribute('date-price'))
        }
    }

    console.log(sumIngredients);
    var totalPrice = burger_price  + sumIngredients;
    console.log(totalPrice);

    document.getElementById('total_price').innerHTML = totalPrice;


    // Definire codici scnto e calcolo prezzo finale scontatato
    var couponsList = [

    ];

});