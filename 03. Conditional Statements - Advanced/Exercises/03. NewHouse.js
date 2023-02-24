function newHouse(input) {
  let flowers = input[0];
  let flowersCount = Number(input[1]);
  let budget = Number(input[2]);

  let flowersPrice = 0;

  switch (flowers) {
    case "Roses":
      flowersPrice = 5 * flowersCount;
      if (flowersCount > 80) {
        flowersPrice -= flowersPrice * 0.1;
      }
      break;
    case "Dahlias":
      flowersPrice = 3.8 * flowersCount;
      if (flowersCount > 90) {
        flowersPrice -= flowersPrice * 0.15;
      }
      break;
    case "Tulips":
      flowersPrice = 2.8 * flowersCount;
      if (flowersCount > 80) {
        flowersPrice -= flowersPrice * 0.15;
      }
      break;
    case "Narcissus":
      flowersPrice = 3 * flowersCount;
      if (flowersCount < 120) {
        flowersPrice += (flowersPrice * 0.15);
      }
      break;
    case "Gladiolus":
      flowersPrice = 2.5 * flowersCount
      if (flowersCount < 80) {
        flowersPrice += (flowersPrice * 0.2);
      }
      break;
  }

  if (flowersPrice > budget) {
      console.log(`Not enough money, you need ${(flowersPrice - budget).toFixed(2)} leva more.`);
  } else {
      console.log(`Hey, you have a great garden with ${flowersCount} ${flowers} and ${(budget - flowersPrice).toFixed(2)} leva left.`);
  }
}

newHouse(["Gladiolus",
    "64",
    "160"]);