function moving(input){
    let width = Number(input[0]);
    let length = Number(input[1]);
    let heigth = Number(input[2]);

    let space = width * length * heigth;
    let isAllSpaceTaken = false;

    let index = 3;
    while(index < input.length){
        let token = input[index];
        if (token == "Done"){
            break;
        }
        let box = Number(token);
        space -= box;
        if (space <= 0){
            isAllSpaceTaken = true;
            break;
        }
        index++;
    }

    if (!isAllSpaceTaken){
        console.log(`${space} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(space)} Cubic meters more.`);
    }
}