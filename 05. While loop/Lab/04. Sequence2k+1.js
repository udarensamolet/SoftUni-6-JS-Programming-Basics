function sequence(input){
     let num2 = Number(input[0]);
     let num1 = 1;
     while (num1 <= num2){
         console.log(num1);
         num1 = num1 * 2 + 1;
     }
}

sequence(["31"]);