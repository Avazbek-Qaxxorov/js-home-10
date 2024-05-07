function findVolumeDiffernnce(a,b){

    let find1 = 1;

    let find2 = 1;

    for(let i = 0; i < a.length; i++){

        find1 *= a[i];

    }

    for(let i = 0; i < b.length; i++){

        find2 *= b[i];

    }

    return Math.abs(find1 - find2);

}

let result = findVolumeDiffernnce([2,2,3], [5,4,1]);
console.log(result)