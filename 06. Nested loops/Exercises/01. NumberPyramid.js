function numberPyramid(input){
    let n = Number(input[0]);
    let currNum = 1;
    let line = "";

    for (let row = 1; row <= n; row++){
        line = "";
        for (let col = 1; col <= row; col++){
            if (currNum <= n){
                line += `${currNum} `
                currNum++;
            } else {
                break;
            }
        }
        console.log(line);
    }
}
