let word = prompt("Istalgan so'z kiriting: ");

// let word = "salom"
function toCutWord(word) {

    return word.slice(1, -1);
}

let result = toCutWord(word);
document.write(result)