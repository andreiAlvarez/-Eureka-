//solution 1
function sumDigPow(a, b) {
  let array = [...Array(b + 1).keys()];
  let result = [];
  array.splice(0, a);
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].toString().split('').map(Number);
    if (array[i].map((x, index) => Math.pow(x, index + 1)).reduce((a, b) => a + b) == parseInt(array[i].join(''))) {
      result.push(parseInt(array[i].join('')))
    }
  }
  return result
  }
  

  
