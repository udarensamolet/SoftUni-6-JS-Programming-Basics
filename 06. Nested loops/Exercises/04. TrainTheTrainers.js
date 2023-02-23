function trainTheTrainers(input){
    let judgesCount = Number(input[0]);
    let sumAllGrades = 0;
    let countAllGrades = 0;
    for (let i = 1; i < input.length; i += judgesCount + 1){
        let token = input[i];
        if(token == "Finish") {
            break;
        }
        let name = token;
        let avrgGrade = 0;
        let sumGradesTopic = 0;
        let countGradesTopic = 0;
        for (let j = i + 1; j < i + 1 + judgesCount; j++){
            sumGradesTopic += Number(input[j]);
            countGradesTopic++;
            sumAllGrades += Number(input[j]);
            countAllGrades++;
        }
        avrgGrade = (sumGradesTopic / countGradesTopic).toFixed(2);
        console.log(`${name} - ${avrgGrade}.`);
    }
    let finalGrade = (sumAllGrades / countAllGrades).toFixed(2);
    console.log(`Student's final assessment is ${finalGrade}.`)

}

