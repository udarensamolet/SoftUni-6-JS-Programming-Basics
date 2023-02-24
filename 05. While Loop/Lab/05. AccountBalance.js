function accountBalance(input){
    let index = 0;
    let sum = 0;
    while (index < input.length){
        let command = input[index];
        if (command == "NoMoreMoney"){
            break;
        }
        let num = Number(command)
        if (num < 0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${num.toFixed(2)}`);
        sum += num;
        index++;
    }
    console.log(`Total: ${sum.toFixed(2)}`);
}

