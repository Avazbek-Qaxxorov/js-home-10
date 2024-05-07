let word = prompt("Istalgan so'z kiriting faqat oxirida undov bo'sin: ");

function exludeUndov() {
    return word.slice(0, -1);
}

document.write(exludeUndov())