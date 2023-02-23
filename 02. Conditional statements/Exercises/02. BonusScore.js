function bonusPoints(number) {
  let bonusPoints = 0;
  if (number > 1000) {
    bonusPoints += (number * 0.1);
  } else if (number > 100) {
    bonusPoints += (number * 0.2);
  } else if (number <= 100) {
    bonusPoints += 5;
  }

  if (Number(number) % 2 == 0) {
    bonusPoints += 1;
  }

  if (Number(number) % 10 == 5) {
    bonusPoints += 2;
  }

  console.log(bonusPoints);
  console.log(bonusPoints + Number(number));
}

bonusPoints(["20"]);

