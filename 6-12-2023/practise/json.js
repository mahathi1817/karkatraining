// let a=`{"name":"john","age":30,"city":"ngl"}`
// let b=JSON.parse(a)
// console.log(b) //for string
//JSON converts string to objects when its in string
//only double quotes ("") are accepted by JSON

// let a=`["ford","audi","bmw"]`
// let b=JSON.parse(a)
// console.log(b[1]) //for array
//when its an array it will return array only 

let a={name:"john",age:30,city:"ngl"}
let b=JSON.stringify(a)
console.log(b)