function suppliesForSchool(input){
    let pensCount = input[0];
    let markersCount = input[1];
    let cleaningSolutionLitres = input[2];
    let percentDiscount = input[3] / 100;

    let pensPrice = 5.80;
    let markersPrice = 7.20;
    let cleaningSolutionPrice = 1.20;

    let priceWithoutDiscount = pensCount * pensPrice + markersCount * markersPrice + cleaningSolutionLitres * cleaningSolutionPrice;
    let discount = priceWithoutDiscount * percentDiscount;
    let priceWithDiscount = priceWithoutDiscount - discount;

    console.log(priceWithDiscount);
}