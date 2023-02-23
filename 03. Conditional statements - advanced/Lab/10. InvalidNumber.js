function invalidNumber(input) {
  let n = Number(input[0]);
  if (n < 0 || n > 0 && n < 100 || n > 200) {
    console.log("invalid");
  }
}

invalidNumber(["150"]);