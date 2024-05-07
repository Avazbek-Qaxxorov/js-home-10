let str = "Assalomu aleykum domla endi qoldan kelgancha"
function arr(str) {

    let text = str.split(" ")

    let array = []

    for (let i = 0; i < text.length; i++) {

        let first = text[i].substring(0, 1)

        let body = text[i].substring(1, text[i].length)

        array.push(body + first + 'ay')

    }

    return array.join(" ").toString()

}

let count = arr(str)

document.write(count);