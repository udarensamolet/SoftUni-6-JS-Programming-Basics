function traveling(input){
    let sum = 0;
    let budget = 0;
    let destination = null;
    
    for (let i = 0; i < input.length; i++){
        let token = input[i];
        if (token == "End"){
            break;
        }

        if (isNaN(token)){
            destination = token;
            budget = input[i + 1];
        } else if (!isNaN(token) && isNaN(input[i - 1])){
            sum += Number(token);
            if (sum >= budget){
                console.log(`Going to ${destination}!`);
                sum = 0;
            }
        }
    }
}

