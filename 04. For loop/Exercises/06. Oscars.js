function oscars(input){
    let actor = input[0];
    let pointsAcademy = Number(input[1]);
    let evaluatorsCount = Number(input[2]);

    let pointsTotal = pointsAcademy;
    let nominated = false;

    for (let i = 3; i < Number(input.length); i += 2){
        let evaluatorName = input[i];
        let pointsEvaluator = Number(input[i + 1]);

        pointsTotal = pointsTotal + (Number(evaluatorName.length) * pointsEvaluator / 2);

        if (pointsTotal > 1250.50) {
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${pointsTotal.toFixed(1)}!`);
            nominated = true;
            break;
        }
    }

    if (!nominated){
        console.log(`Sorry, ${actor} you need ${(1250.50 - pointsTotal).toFixed(1)} more!`)
    }
}