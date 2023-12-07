let a={
    a:1,
    b:2
}
let b={
    c:3,
    d:4
}
let c={...a,...b}
console.log(c) 
// let a={
//     a:1,
//     b:2
// }
// let b={
//     b:3,
//     d:4
// }
// let c={...a,...b}
// console.log(c) //in case if the variables are same it will return {a:1,b:3,d:4}
