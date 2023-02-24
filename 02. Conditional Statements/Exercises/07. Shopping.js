function shopping(input){
    let budget = Number(input[0]);
    let videoCardCount = Number(input[1]);
    let processorCount = Number(input[2]);
    let ramCount = Number(input[3]);

    let videoCardPrice = videoCardCount * 250;
    let processorPrice = videoCardPrice * 0.350 * processorCount;
    let ramPrice = videoCardPrice * 0.10 * ramCount;

    let finalPrice = videoCardPrice + processorPrice + ramPrice;

    if (videoCardCount > processorCount){
        finalPrice -= finalPrice * 0.15;
    }

    if (finalPrice <= budget) {
        console.log(`You have ${(budget - finalPrice).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(finalPrice - budget).toFixed(2)} leva more!`);
    }
}

shopping(["900",
"2",
"1",
"3"])
;
