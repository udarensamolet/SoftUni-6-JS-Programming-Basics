function specialNumbers(input) {
  let n = Number(input[0]);

  let ones = 0;
  let tens = 0;
  let hundreds = 0;
  let thousands = 0;
  
  let line = "";

  for (let i = 1111; i <= 9999; i++) {
    let num = Number(i);
    ones = num % 10;
    tens = Math.floor(num / 10) % 10;
    hundreds = Math.floor(num / 100) % 10;
    thousands = Math.floor(num / 1000) % 10;
    if (ones != 0 && tens != 0 && hundreds != 0 && thousands != 0) {
        if (n % ones == 0 && n % tens == 0 && n % hundreds == 0 && n % thousands == 0){
            line += `${i} `;
        }
    }
  }
  console.log(line);
}
