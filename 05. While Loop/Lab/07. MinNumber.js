function minNumber(input) {
  let index = 0;
  let minNumber = Number.MAX_SAFE_INTEGER;
  while (index < input.length) {
    let token = input[index];
    if (token == "Stop") {
      break;
    }
    let currNumber = Number(token);
    if (currNumber < minNumber) {
      minNumber = currNumber;
    }
    index++;
  }
  console.log(minNumber);
}
