let tableauCouleur = [
    {nom:"bleu", code:"#2816E6"},
    {nom:"blanc", code:"#FFFFFF"},
    {nom:"rouge", code:"#F10808 "},
    {nom:"vert", code:"#08F11B "},
    {nom:"jaune", code:"#ECF108 "},
    {nom:"violet", code:"#B622AC "},
    {nom:"noir", code:"#000000"},
    {nom:"orange", code:"#FFAF00"},
    {nom:"gris", code:"#818181 "},
];

document.querySelector('#btnColors').addEventListener('click', getRandomColorFromSelection);

function getRandomNumber(){
    return Math.floor(Math.random()*tableauCouleur.length);
};

function getRandomColorFromSelection(){
    let selectedColor = tableauCouleur[`${getRandomNumber()}`];
    document.body.style.backgroundColor = `${selectedColor.code}`;
    document.querySelector('.color').textContent = `${selectedColor.nom}`;
};

let tableauCodeCouleur = [0, "A", 1, "B", 2, "C", 3, "D", 4, "E", 5, "F", 6, 7, 8, 9];

document.querySelector('#btnHex').addEventListener('click', getRandomHexColor);

function getRandomNumber2(){
    return Math.floor(Math.random()*tableauCodeCouleur.length);
};

function getRandomHexColor(){
    let hexColor = `#`;
    for (let i=0; i<6; i++){
        hexColor += tableauCodeCouleur[getRandomNumber2()];
    }
    document.body.style.backgroundColor = `${hexColor}`;
    document.querySelector('.color').textContent = `${hexColor}`;
};