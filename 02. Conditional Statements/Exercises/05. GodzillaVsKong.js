function godzilaVsKong(input) {
    let movieBudget = Number(input[0]);
    let extraCount = Number(input[1]);
    let extraClothesPrice = Number(input[2]);

    let decorPrice = movieBudget * 0.10;
    let extraClothesPriceFinal = extraCount * extraClothesPrice;
    if (extraCount > 150) {
        extraClothesPriceFinal -= (extraClothesPriceFinal * 0.10);
    }

    let priceFinal = decorPrice + extraClothesPriceFinal;

    if (priceFinal <= movieBudget){
        console.log(`Action!`);
        console.log(`Wingard starts filming with ${(movieBudget - priceFinal).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money!`);
        console.log(`Wingard needs ${(priceFinal - movieBudget).toFixed(2)} leva more.`)
    }
}

