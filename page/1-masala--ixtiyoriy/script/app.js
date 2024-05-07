function generator(input) {
     
    let word = input.split(" ");

    let result = "#";
    
    for (let i = 0; i < word.length; i++) {
        
        let capitalized = word[i].charAt(0).toUpperCase() + word[i].slice(1);

        result += capitalized;

    }

  if (input === "" || input.length === 0 ||result.length > 140) {

        return false;

    }

    return result;

}

let string = prompt("Istalgan so'z kiriting");

document.write(generator(string));