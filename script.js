function fruits() {
    createDigitLine("tendigitval", "#bc8f8f");;
    const categoriesFruit = new Array(
        "watermelon", "grapefruit", "pineapple", "avocado", "coconut", "apricot", "blueberry", "blackberry", "raspberry", "mandarin", "pomegranate"
    );
    const randomNumber1 = parseInt(Math.floor(Math.random() * (10 + 1)));
    document.getElementById("category1").style.backgroundColor = "white";
    document.getElementById("category2").style.backgroundColor = "gray";
    console.log(categoriesFruit[randomNumber1], categoriesFruit[randomNumber1].length);
    createDigitLine(categoriesFruit[randomNumber1], '#000000');
}

function cities() {
    createDigitLine("tendigitval", "#bc8f8f");

    const categoriesCity = new Array(
        "everton", "liverpool", "swansea", "chelsea", "hull", "manchester", "newcastle", "manchester", "madrid", "amsterdam", "prague"
    );
    const randomNumber1 = parseInt(Math.floor(Math.random() * (10 + 1)));
    document.getElementById("category2").style.backgroundColor = "white";
    document.getElementById("category1").style.backgroundColor = "gray";
    console.log(categoriesCity[randomNumber1], categoriesCity[randomNumber1].length);
    createDigitLine(categoriesCity[randomNumber1], "#000000");
}

function createDigitLine(str, val) {
    const c = document.getElementById("myCanvas");
    const ctx = c.getContext("2d");
    let ystart = 0;
    let yend = 22;
    for (var i = 0; i < str.length; i++) {
        ctx.beginPath();
        ctx.moveTo(ystart, 50);
        ctx.lineTo(yend, 50);
        ctx.stroke();
        ctx.strokeStyle = val;
        ystart = yend + 5;
        yend = ystart + 22;
    }
}

function fadeLetter(){
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    document.getElementsByClassName("")
    document.getElementsByClassName("letters")[index];
}

