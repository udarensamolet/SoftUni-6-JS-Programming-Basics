function fishingBoat(input) {
  let budget = Number(input[0]);
  let season = input[1];
  let fishermen = Number(input[2]);

  let boatPrice = 0;
  if (season == "Spring") {
    boatPrice = 3000;
  } else if (season == "Summer") {
    boatPrice = 4200;
  } else if (season == "Autumn") {
    boatPrice = 4200;
  } else if (season == "Winter") {
    boatPrice = 2600;
  }

  if (fishermen <= 6) {
    boatPrice -= boatPrice * 0.1;
  } else if (fishermen > 6 && fishermen <= 11) {
    boatPrice -= boatPrice * 0.15;
  } else if (fishermen > 11) {
    boatPrice -= boatPrice * 0.25;
  }

  if (fishermen % 2 == 0 && season != "Autumn") {
    boatPrice -= boatPrice * 0.05;
  }

  if (boatPrice - budget > 0) {
    console.log(
      `Not enough money! You need ${(boatPrice - budget).toFixed(2)} leva.`
    );
  } else {
    console.log(`Yes! You have ${(budget - boatPrice).toFixed(2)} leva left.`);
  }
}


