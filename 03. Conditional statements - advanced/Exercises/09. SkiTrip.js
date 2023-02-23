function skiTrip(input) {
  let days = Number(input[0]) - 1;
  let typeRoom = input[1];
  let review = input[2];

  let priceRoom = 0;
  switch (typeRoom) {
    case "room for one person":
      priceRoom = 18;
      break;
    case "apartment":
      priceRoom = 25;
      break;
    case "president apartment":
      priceRoom = 35;
      break;
  }

  let price = days * priceRoom;

  if (typeRoom == "apartment") {
    if (days < 10) {
      price -= price * 0.3;
    } else if (days >= 10 && days <= 15) {
      price -= price * 0.35;
    } else if (days > 15) {
      price -= price * 0.5;
    }
  } else if (typeRoom == "president apartment") {
    if (days < 10) {
      price -= price * 0.1;
    } else if (days >= 10 && days <= 15) {
      price -= price * 0.15;
    } else if (days > 15) {
      price -= price * 0.2;
    }
  }

  if (review == "positive") {
    price += price * 0.25;
  } else if (review == "negative") {
    price -= price * 0.10;
  }

  console.log(price.toFixed(2));
}
