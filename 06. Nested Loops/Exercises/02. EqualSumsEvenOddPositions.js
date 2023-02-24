function equalSumsEvenOddPositions(input){
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);

    let line = "";
    for (let i = num1; i <= num2; i++){
        let sumOddPositions = 0;
        let sumEvenPositions = 0;

        let number = i.toString();
        for (let j = 0; j < number.length; j++){
            if (j % 2 == 0) {
                sumEvenPositions += Number(number[j]);
            } else {
                sumOddPositions += Number(number[j]);
            }
        }
        if (sumEvenPositions == sumOddPositions){
            line += `${number} `
        }
    }
    console.log(line);
}

