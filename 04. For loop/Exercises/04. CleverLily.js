function cleverLily(input) {
  let lilyAge = Number(input[0]);
  let washingMachinePrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let counterToy = 0;
  let sumReceived = 0;
  for (let i = 1; i <= lilyAge; i++) {
    if (i % 2 != 0) {
      counterToy++;
    } else {
      sumReceived = sumReceived + (i * 5) - 1;
    }
  }
  sumReceived = sumReceived + (counterToy * toyPrice);

  if (sumReceived >= washingMachinePrice) {
    console.log(`Yes! ${(sumReceived - washingMachinePrice).toFixed(2)}`);
  } else {
    console.log(`No! ${(washingMachinePrice - sumReceived).toFixed(2)}`);
  }
}
