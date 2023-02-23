function journey(input) {
  let budget = Number(input[0]);
  let season = input[1];

  let destination = null;
  let type = null;
  let price = 0;

  if (budget <= 100) {
    destination = "Bulgaria";
    if (season == "summer") {
      price = 0.3 * budget;
      type = "Camp";
    } else if (season == "winter") {
      price = 0.7 * budget;
      type = "Hotel";
    }
  } else if (budget > 100 && budget <= 1000) {
    destination = "Balkans";
    if (season == "summer") {
      price = 0.4 * budget;
      type = "Camp";
    } else if (season == "winter") {
      price = 0.8 * budget;
      type = "Hotel";
    }
  } else if (budget > 1000) {
    destination = "Europe";
    price = budget * 0.9;
    type = "Hotel";
  }

  console.log(`Somewhere in ${destination}`);
  console.log(`${type} - ${price.toFixed(2)}`);
}

