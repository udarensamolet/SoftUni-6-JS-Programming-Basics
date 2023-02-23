function maxNumber(input) {
  let index = 0;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  while (index < input.length) {
    let token = input[index];
    if (token == "Stop") {
      break;
    }
    let currNumber = Number(token);
    if (currNumber > maxNumber) {
      maxNumber = currNumber;
    }
    index++;
  }
  console.log(maxNumber);
}
