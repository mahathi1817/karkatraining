let students=[
    {
        name:"Mahathi",
        place:"ngl",
        education:["AI","BE","MA"],
        skills:["HTML","CSS","JS"]
    },
    {
        name:"James",
        place:"nagarcoil",
        education:["BE","MA"],
        skills:["HTML","CSS","Python"]  
    },
    {
        name:"Mathan",
        place:"ngl",
        education:["BA","BE","MA"],
        skills:["Python","Node"]
    },
    {
        name:"Arun",
        place:"ngl",
        education:["AI","BE","MA"],
        skills:["HTML","CSS","JS"]
    }
]
// for(i=0;i<students.length;i++){
//     console.log(students[i].name)
// for(j=0;j<students[i].education.length;j++){
//     console.log(students[i].education[j])
//     }
// }
// for(i=0;i<students.length;i++){
//     if(students[i].place=="ngl"){
//         console.log(students[i].name)
//     }
//     for(j=0;j<students[i].education.length;j++){
//        console.log(students[i].education[j])
//     }
//     for(j=0;j<students[i].skills.length;j++){
//        console.log(students[i].skills[j])
//  }}
for(i=0;i<students.length;i++){
    if(students[i].place=="ngl"){
        console.log(students[i].name)
    }
for(j=0;j<students[i].skills.length;j++){
    if(students[i].skills[j]=="Python"){
        console.log(students[i])
    }
}
}