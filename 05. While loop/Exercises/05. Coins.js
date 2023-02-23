function coins(input) {
  let amount = Number(input[0]);

  let count2lv = 0;
  let count1lv = 0;
  let count50st = 0;
  let count20st = 0;
  let count10st = 0;
  let count5st = 0;
  let count2st = 0;
  let count1st = 0;

  let countAllCoins = 0;

  while (amount - 2 >= 0) {
    if (amount - 2 >= 0) {
      amount = (amount - 2).toFixed(2);
      count2lv++;
    }
  }
  while (amount - 1 >= 0) {
    if (amount - 1 >= 0) {
        amount = (amount - 1).toFixed(2);
      count1lv++;
    }
  }
  while (amount - 0.5 >= 0) {
    if (amount - 0.5 >= 0) {
        amount = (amount - 0.5).toFixed(2);
      count50st++;
    }
  }
  while (amount - 0.2 >= 0) {
    if (amount - 0.2 >= 0) {
        amount = (amount - 0.2).toFixed(2);
      count20st++;
    }
  }
  while (amount - 0.1 >= 0) {
    if (amount - 0.1 >= 0) {
        amount = (amount - 0.1).toFixed(2);
      count10st++;
    }
  }
  while (amount - 0.05 >= 0) {
    if (amount - 0.05 >= 0) {
        amount = (amount - 0.05).toFixed(2);
      count5st++;
    }
  }
  while (amount - 0.02 >= 0) {
    if (amount - 0.02 >= 0) {
        amount = (amount - 0.02).toFixed(2);
      count2st++;
    }
  }
  while (amount - 0.01 >= 0) {
    if (amount - 0.01 >= 0) {
        amount = (amount - 0.01).toFixed(2);
      count1st++;
    }
  }
  countAllCoins =
    count2lv +
    count1lv +
    count50st +
    count20st +
    count10st +
    count5st +
    count2st +
    count1st;
  console.log(countAllCoins);
}

coins(["0.56"]);
