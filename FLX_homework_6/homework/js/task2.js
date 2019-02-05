// Your code goes here
function inputMoney(){
    let money = prompt('Input money');
    let discount = prompt('Input discount');
    if( !isNaN(money) && !isNaN(discount) && (money >= 0 && money <= 9999999 && discount >= 0 && discount <= 99)){
        showPrice(money, discount);
    }else{
        alert('Invalid input data');
    }
}

function showPrice(money, discount){
    let priceDiscount = money - money * discount / 100;
    let saveMoney = money - priceDiscount;
    alert('Price without discount: ' + +money +
                '\nDiscount: ' + +discount + '%' +
                '\nPrice with discount: ' + +priceDiscount.toFixed(2) +
                '\nSaved: ' + +saveMoney.toFixed(2));
}
inputMoney();