let url = 'http://w3cschool.com'

let a = encodeURIComponent(url)
console.log(a); // http%3A%2F%2Fw3cschool.com

let b = decodeURIComponent(a)
console.log(b);  // http://w3cschool.com