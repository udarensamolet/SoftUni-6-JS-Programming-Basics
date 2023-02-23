function calculateDeposit(input){
    let depositedSum = Number(input[0]);
    let depositPeriodInMonths = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let finalSum = depositedSum + depositPeriodInMonths * ((depositedSum * (annualInterestRate / 100)) / 12);

    console.log(finalSum);
}

calculateDeposit(["200 ",
"3 ",
"5.7 "]
);
