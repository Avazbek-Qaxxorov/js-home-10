const flickSwitch =arr => {
    let newArr = [];
    let defaultValue = true
    arr.forEach(word => {
        for (let i = 0; i < arr.length; i++) {
                  if(arr[i] === "flick"){
            defaultValue = false
    }
        newArr.push(defaultValue);
        }
  
});

    return newArr
}


let result = flickSwitch(['codewars','flick','code','wars']);

console.log(result)