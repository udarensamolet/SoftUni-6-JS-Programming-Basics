function aquarium(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);

    let percentage = Number(input[3]) / 100;

    let aquariumVolume = length * width * height;
    let aquariumVolumeInLiters = aquariumVolume * 0.001;
    let neededLitres = aquariumVolumeInLiters * (1 - percentage);
    console.log(neededLitres);
}