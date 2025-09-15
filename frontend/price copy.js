let km = 19.5;
let totalPrice = 0;

for (let i = 1; i <= km; i++) {
  if (i <= 4) {
    totalPrice += 30 / 4; // ₹30 for first 4 km
  } else if (i <= 9) {
    totalPrice += 10 / 5; // ₹10 for next 5 km (5-9)
  } else if (i <= 19) {
    totalPrice += 15 / 10; // ₹15 for next 10 km (10-19)
  } else {
    totalPrice += 20; // ₹20 per km after 19 km
  }
}

console.log("Total price for", km, "km is ₹" + totalPrice.toFixed(2));