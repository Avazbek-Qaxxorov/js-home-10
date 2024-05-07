let word = prompt("Istalgan harf kiriting: ");

function alphabets(letter) {

    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    return alphabet.indexOf(letter) + 1

}

let result = alphabets(word);

document.write(result)