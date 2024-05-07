let num = +prompt("Istalgan son kiriting: ");

function numberMinus(num) {
    if (num > 0) {
        return num * -1
    }
    else {
        return num
    }
}
let result = numberMinus(num);
document.write(result)