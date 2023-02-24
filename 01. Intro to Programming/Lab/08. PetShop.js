function petShop(input){
    let dogFood = input[0];
    let catFood = input[1];

    let dogFoodPrice = 2.50;
    let catFoodPrice = 4;

    let allFoodPrice = dogFood * dogFoodPrice + catFood * catFoodPrice;

    console.log(`${allFoodPrice} lv.`);
}