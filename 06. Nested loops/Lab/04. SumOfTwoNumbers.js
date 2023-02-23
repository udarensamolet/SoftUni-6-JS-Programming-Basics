function sumOfTwoNumber(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNum = Number(input[2]);
    let foundCombo = false;
    let counter = 0;

    for (let i = num1; i <= num2; i++){
        for (let j = num1; j <= num2; j++){
            counter++;
            if (i + j == magicNum){
                foundCombo = true;
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNum})`);
                break;
            }
        }
        if(foundCombo){
            break;
        }
    }
    if (!foundCombo){
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    }
}


