const people=[
    {name:"Ajay",age:22},
    {name:"Mahathi",age:17},
    {name:"Jemil",age:23}
]
const peopleMapping=people.map((person,index)=>({...person,
    isAdult:person.age>=18,
    inx:index
}))
console.log(peopleMapping)