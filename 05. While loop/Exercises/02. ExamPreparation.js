function examPreparation(input) {
    let badGrades = Number(input[0]);

    let index = 1;
    let task = input[index];
    let countBadGrades = 0;
    let flagBadGrades = false;
    let avrgGrades = 0;
    let gradesCount = 0;
    let gradesSum = 0;
    let lastTask = null;


    while (task != "Enough"){
        let grade = Number(input[index + 1]);
        gradesSum += grade;
        gradesCount++;

        if (grade <= 4){
            countBadGrades++;
        }
        if (countBadGrades == badGrades){
            flagBadGrades = true;
            console.log(`You need a break, ${countBadGrades} poor grades.`);
            break;
        }
        index += 2;
        task = input[index];
        lastTask = input[index - 2];
       
    }
    if (!flagBadGrades){
        avrgGrades = (gradesSum / gradesCount).toFixed(2);
        console.log(`Average score: ${avrgGrades}`);
        console.log(`Number of problems: ${gradesCount}`);
        console.log(`Last problem: ${lastTask}`);
    }
}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
;
