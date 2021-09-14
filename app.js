// Memory Price Start 
function memory(price){
    const memoryIdCall = document.getElementById('memoryCost');
    memoryIdCall.innerText = price;
}
document.getElementById('M8GB').addEventListener('click',function(){
    memory(0);
    total();
});
document.getElementById('M16GB').addEventListener('click',function(){
    memory(180);
    total();
});
// Memory Price End 
// Storage Price Start 
function storage(price){
    const storageIdCall = document.getElementById('storageCost');
    storageIdCall.innerText = price;
}
document.getElementById('SSD256GB').addEventListener('click',function(){
    storage(0);
    total();
});
document.getElementById('SSD512GB').addEventListener('click',function(){
    storage(100);
    total();
});
document.getElementById('SSD1TB').addEventListener('click',function(){
    storage(180);
    total();
});
// Storage Price End 
// Delivery Price Start 
function delivery(price){
    const deliveryIdCall = document.getElementById('deliveryCost');
    deliveryIdCall.innerText = price;
}
document.getElementById('Aug25').addEventListener('click',function(){
    delivery(0);
    total();
});
document.getElementById('Aug21').addEventListener('click',function(){
    delivery(20);
    total();
});
// delivery Price End 
// Function for Total start
function total(){
    const bestPriceAmount = document.getElementById('bestPrice').innerText;
    const bestPriceValue = parseInt(bestPriceAmount);
    const memoryCost = document.getElementById('memoryCost').innerText;
    const memoryCostValue = parseInt(memoryCost);
    const storageCost = document.getElementById('storageCost').innerText;
    const storageCostValue = parseInt(storageCost);
    const deliveryCost = document.getElementById('deliveryCost').innerText;
    const deliveryCostValue = parseInt(deliveryCost);
    const totalAmount = bestPriceValue + memoryCostValue + storageCostValue + deliveryCostValue;
    document.getElementById('totalCost').innerText = totalAmount;
    fullTotalUpdate();
}
// Function for Total End 
// Promo Code Start 
function totalWithPromo(){
    const promo = document.getElementById('promoCode').value;
    if(promo == "stevekaku")
    {
        const total = document.getElementById('totalCost').innerText;
        const totalAmount = parseInt(total);
        const discount = totalAmount * 0.2;
        const totalValue = totalAmount - discount;
        document.getElementById('totalUpdate').innerText = totalValue;
    }
    else 
    {
        wrongPromo();
    }

    document.getElementById('promoCode').value = "";
}
document.getElementById('apply').addEventListener('click',function(){
    totalWithPromo();
})
// Promo Code End
// Full Total Update Start
function fullTotalUpdate(){
    const total = document.getElementById('totalCost').innerText;
    document.getElementById('totalUpdate').innerText = total;
}
// Full Total Update End 
// For Wrong Promo Code
function wrongPromo() {
    alert("Please Enter Right Promo Code!");
  }