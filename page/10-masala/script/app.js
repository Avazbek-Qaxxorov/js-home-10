// let word = prompt("Istalgan so'z kiriting: ");
let str = "ali vali"

function letterInTheWord(word) {
    let arr = word.split(" ")
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + " " + arr[i].length)
    }
    return newArr
}

let result = letterInTheWord(str);
document.write(result)