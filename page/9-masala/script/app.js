let num = prompt("Alfabit ACII code kiriting: ");

function getChar(num) {

    return String.fromCharCode(num);

}

let result = getChar(num);

document.write(result)