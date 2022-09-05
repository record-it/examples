let lib = require('./ex5-module.js')

console.log(lib.hello())
console.log(lib.message)
let email = new lib.MyEmail("adam","ewa","alert","Go now")
console.log(email.format())
console.log(lib.add(2, 3))