function areaOfFigures(input){
    let typeFigure = input[0];
    let area = 0;
    if (typeFigure == "square") {
        let a = Number(input[1]);
        area = Math.pow(a, 2);
    } else if (typeFigure == "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        area = a * b;
    } else if (typeFigure == "circle") {
        let r = Number(input[1]);
        area = Math.PI * Math.pow(r, 2);
    } else if (typeFigure == "triangle") {
        let a = Number(input[1]);
        let h = Number(input[2]);
        area = (a * h) / 2;
    }
    console.log(area);
}