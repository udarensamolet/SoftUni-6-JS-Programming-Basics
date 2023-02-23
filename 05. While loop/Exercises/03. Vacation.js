function vacation(input){
    let neededMoney = Number(input[0]);
    let availableMoney = Number(input[1]);

    let index = 2;
    let action = input[index];
    let daysSpending = 0;
    let flagCantSave = false;
    let allDaysCount = 0;

    while (true){
        let amount = Number(input[index + 1]);
        allDaysCount++;

        if (action == "save"){
            availableMoney += amount;
            daysSpending = 0;

            if (availableMoney >= neededMoney){
                break;
            }
        } else if (action == "spend"){
            daysSpending++;
            availableMoney -= amount;

            if (availableMoney < 0){
                availableMoney = 0;
            }
        }

        if (daysSpending == 5){
            console.log(`You can't save the money.`);
            console.log(allDaysCount);
            flagCantSave = true;
            break;
        } 
        index += 2;
        action = input[index];
    }

    if (!flagCantSave){
        console.log(`You saved the money for ${allDaysCount} days.`);
    }
}