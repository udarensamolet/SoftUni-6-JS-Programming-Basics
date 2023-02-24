function repainting(input) {
  let nylonNeeded = Number(input[0]) + 2;
  let paintNeeded = Number(input[1]) + (0.1 * Number(input[1]));
  let thinnerNeeded = Number(input[2]);
  let hoursNeeded = Number(input[3]);

  let nylonPrice = 1.5;
  let paintPrice = 14.5;
  let thinnerPrice = 5;

  let priceForMaterials =
    nylonNeeded * nylonPrice +
    paintNeeded * paintPrice +
    thinnerNeeded * thinnerPrice +
    0.4;
  let pricePerHour = priceForMaterials * 0.3;
  let finalPrice = pricePerHour * hoursNeeded + priceForMaterials;

  console.log(finalPrice);
}

