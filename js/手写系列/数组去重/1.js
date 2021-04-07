// ES5
function unique(arr) {
  let res = arr.filter(function(item, index, array) {
    return array.indexOf(item) === index;
  })
  return res;
}

// ES6
var unique2 = (arr) => [...new Set(arr)]