const a={
    brand:"ford",
    model:"mastag",
    color:"red",
}
const b={
    type:"qar",
    year:2021,
    color:"yellow"
}
const myvechical={...a,...b}
console.log(myvechical) //merging two objects using {...a,...b}