function foodDelivery(input) {
  let chickenMenuPrice = 10.35;
  let fishMenuPrice = 12.4;
  let veganMenuPrice = 8.15;

  let deliveryPrice = 2.5;

  let chickenMenuCount = Number(input[0]);
  let fishMenuCount = Number(input[1]);
  let veganMenuCount = Number(input[2]);

  let menusPrice =
    chickenMenuCount * chickenMenuPrice +
    fishMenuCount * fishMenuPrice +
    veganMenuCount * veganMenuPrice;

  let dessertPrice = menusPrice * 0.2;

  let finalPrice = menusPrice + dessertPrice + deliveryPrice;
  console.log(finalPrice);
}

foodDelivery(["2 ",
"4 ",
"3 "]
);
