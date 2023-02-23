function sumPrimeNonPrimeNumbers(input) {
  let sumPrimeNumbers = 0;
  let sumNonPrimeNumbers = 0;

  for (let i = 0; i < input.length; i++) {
    let token = input[i];
    if (token === "stop") {
      break;
    }
    let number = Number(token);
    let isPrime = true;
    if (number < 0) {
      console.log(`Number is negative.`);
      continue;
    } else if (number == 1) {
      isPrime = false;
    } else if (number > 1) {
      for (let j = 2; j <= (Math.sqrt(number)).toFixed(0); j++) {
        if (number % j == 0) {
          isPrime = false;
          break;
        } else {
          isPrime = true;
        }
      }
    }
    if (isPrime) {
      sumPrimeNumbers += number;
    } else {
      sumNonPrimeNumbers += number;
    }
  }
  console.log(`Sum of all prime numbers is: ${sumPrimeNumbers}`);
  console.log(`Sum of all non prime numbers is: ${sumNonPrimeNumbers}`);
}
