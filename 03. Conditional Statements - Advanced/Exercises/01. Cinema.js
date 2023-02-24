function cinema(input) {
    let type = input[0];
    let rows = Number(input[1]);
    let cols = Number(input[2]);
    
    let places = rows * cols;
    let price = 0;

    if (type == "Premiere") {
        price = 12.00;
    } else if (type == "Normal") {
        price = 7.50;
    } else if (type == "Discount") {
        price = 5;
    }

    let totalAmount = places * price;

    console.log(`${totalAmount.toFixed(2)} leva`);
}
