function toyStore(input) {
    let holidayPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollCount = Number(input[2]);
    let teddyBearCount = Number(input[3]);
    let minionCount = Number(input[4]);
    let truckCount = Number(input[5]);

    let priceToysCount = puzzleCount * 2.60 + dollCount * 3 + teddyBearCount * 4.10 + minionCount * 8.20 + truckCount * 2;

    let toysCount = puzzleCount + dollCount + teddyBearCount + minionCount + truckCount;
    if (toysCount >= 50) {
        priceToysCount -= (priceToysCount * 0.25);
    }

    let finalPrice = priceToysCount - 0.1 * priceToysCount;

    if (finalPrice >= holidayPrice){
        console.log(`Yes! ${(finalPrice - holidayPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(holidayPrice - finalPrice).toFixed(2)} lv needed.`);
    }
}
