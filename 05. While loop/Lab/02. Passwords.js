function passwords(input){
    let username = input[0];
    let pass = input[1];
    let index = 2;
    while (input[index] != pass){
       index++;
    }
    console.log(`Welcome ${username}!`);
}

passwords
(["Gosho",
"secret",
"secret"])
;