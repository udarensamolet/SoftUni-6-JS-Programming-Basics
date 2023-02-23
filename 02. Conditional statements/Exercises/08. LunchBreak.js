function lunchBreak(input){
    let tvShowName = input[0];
    let episodeTime = Number(input[1]);
    let breakTime = Number(input[2]);

    let lunchTime = breakTime * 1 / 8;
    let restTime = breakTime * 1 / 4;
    let remainingTime = breakTime - lunchTime - restTime;

    if (remainingTime >= episodeTime) {
        console.log(`You have enough time to watch ${tvShowName} and left with ${Math.ceil(remainingTime - episodeTime)} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShowName}, you need ${Math.ceil(episodeTime - remainingTime)} more minutes.`);
    }
}

lunchBreak((["Game of Thrones",
"60",
"96"])
);