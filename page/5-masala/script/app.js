// function excludingVatPrice(price){
  
//     return price / 1.15
//   }

//   let result = parseInt(excludingVatPrice(230));
//   document.write(result)

  function excludingVatPrice(price){
    if (price === null) return -1
    return +(price / 1.15).toFixed(2)
  }

  let result = parseInt(excludingVatPrice(230));
  document.write(result)