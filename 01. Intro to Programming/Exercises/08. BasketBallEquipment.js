function basketBallEquipment(annualFee){
    let trainers = annualFee - (annualFee * 0.40);
    let clothes = trainers - (trainers * 0.20);
    let ball = clothes * 0.25;
    let accessories = ball * 0.20;

    let total = trainers + clothes + ball + accessories + Number(annualFee);
    console.log(total);
}

