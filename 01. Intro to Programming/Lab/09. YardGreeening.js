function yardGreening(squareMeters) {
    let pricePerSquareMeter = 7.61;
    let priceWithoutDiscount = pricePerSquareMeter * squareMeters;
    let discount = priceWithoutDiscount * 0.18;
    let priceWithDiscount = priceWithoutDiscount - discount;

    console.log(`The final price is: ${priceWithDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}