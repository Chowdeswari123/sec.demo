function calculatePrice(distance) {
    let price = 0;
    if (distance <= 4) {
        price = 30;
    } else {
        price = 30;

        if (distance <= 9) {
    
            price += (distance - 4) * 10;
        } else {
            price += 5 * 10;

            if (distance <= 19) {
                price += (distance - 9) * 15;
            } else {
                      price += 10 * 15;
                price += (distance - 19) * 20;
            }
        }
    }
    return price;
}
const distanceTravelled = 19.5;
const totalPrice = calculatePrice(distanceTravelled);
console.log(`$Price for ${distanceTravelled} km is ₹${totalPrice}`);



//while loop
let i = 0;
while (i<5) {
    console.log(i);
    i++;
}
let num=1;
while(num<=100){
    console.log("5 x "+num+" = "+(5*num));
    num++;
}


