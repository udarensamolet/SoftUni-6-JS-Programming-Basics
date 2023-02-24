function walking(input) {
  let index = 0;
  let goal = 10000;
  let stepsSum = 0;

  while (true) {
    let token = input[index];
    if (token == "Going home") {
      let steps = Number(input[index + 1]);
      stepsSum += steps;
      break;
    }
    let steps = Number(token);
    stepsSum += steps;

    if (stepsSum >= goal) {
      break;
    }
    index++;
  }

  if (goal - stepsSum > 0){
      console.log(`${goal - stepsSum} more steps to reach goal.`);
  }
  else{
    console.log(`Goal reached! Good job!`);
    console.log(`${stepsSum - goal} steps over the goal!`);
  }
}

walking(["1000",
"1500",
"2000",
"6500"])
;
