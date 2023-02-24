function graduation(input) {
  let name = input[0];
  let index = 1;

  let gradesSum = 0;
  let gradesCount = 0;
  let graduated = true;

  while (index < input.length) {
    let grade = Number(input[index]);
    if (grade < 4) {
      console.log(`${name} has been excluded at ${index} grade`);
      graduated = false;
      break;
    }
    gradesSum += grade;
    gradesCount++;

    index++;
  }

  if (graduated) {
    let gradeAvrg = gradesSum / gradesCount;
    console.log(`${name} graduated. Average grade: ${gradeAvrg.toFixed(2)}`);
  }
}

graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])
;
