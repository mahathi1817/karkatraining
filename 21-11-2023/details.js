let students=[
    {
        Name:"Ronnie",
        Age:22,
        Place:"ngl",
        skills:["Gaming","After effects editor","VFX editor"],
        professional:"Full Stack developer",

    marks:{
        Tamil:90,
        English:60,
        Maths:79,
        Science:100,
        Computer:90,
    },
    education:[
        {
            Scl_name:"SCTRCS CBSE school",
            percentage:87,
            year:2014
        },
        {
            Clg_name:"Karnataka Group of collages",
            degree:"BE",
            year:2017
        },
        {
            Software_Company:"Karka academy",
            course:"Full Stack Developmnent",
            year:2023
        }
    ],
},
    {
        Name:"Manish",
        Age:20,
        Place:"ngl",
        skills:["Gaming","HTML","CSS"],
        professional:"Website developmnent",

    marks:{
        Tamil:90,
        English:60,
        Maths:89,
        Science:80,
        Computer:90,
    },
    education:[
        {
            Scl_name:"SCT CBSE school",
            percentage:87,
            year:2014
        },
        {
            Clg_name:"KRc Group of collages",
            degree:"BA",
            year:2017
        },
        {
            Software_Company:"Karka academy",
            course:"Full Stack Developmnent",
            year:2023
        }
    ]
 },
    {
        Name:"Akshaya",
        Age:25,
        Place:"ngl",
        skills:["Gaming","JAVA","HTLM"],
        professional:"Full Stack developer",
    marks:{
        Tamil:90,
        English:60,
        Maths:79,
        Science:100,
        Computer:90,
    },
    education:[
        {
            Scl_name:"SCTRCS CBSE school",
            percentage:87,
            year:2014
        },
        {
            Clg_name:"Karnataka Group of collages",
            degree:"BE",
            year:2017
        },
        {
            Software_Company:"Karka academy",
            course:"Full Stack Developmnent",
            year:2023
        }
    ]
},
    {
        Name:"Sachin",
        Age:23,
        Place:"Vadasery",
        skills:["Python","HTML","CSS"],
        professional:"Website developmnent",
    marks:{
        Tamil:90,
        English:60,
        Maths:89,
        Science:80,
        Computer:70,
    },
    education:[
        {
            Scl_name:"Excel ICSE school",
            percentage:87,
            year:2015
        },
        {
            Clg_name:"KRc Group of collages",
            degree:"BA",
            year:2018
        },
        {
            Software_Company:"Karka academy",
            course:"Full Stack Developmnent",
            year:2023
        }
    ]
},
]
// for(let i=0;i<students.length;i++){
// console.log(students[i].name)
// }
// for(let i=0;i<students.length;i++){
// console.log(students[i].Name)
// for(let j=0;j<students[i].skills.length;j++){
// console.log(students[i].skills[j])
// }
// }
// for(i=0;i<students.length;i++){
//     for(let a in students[i].marks){
//         let value=students[1].marks[a]
//         console.log(value)
//     }
// }
for(let i=0;i<students.length;i++){
    if(students[i].education=="BE")
    console.log(students[i].Name)
    for(let j=0;j<students[i].skills.length;j++){
    console.log(students[i].skills[j])
    }
    for(let j=0;j<students[i].education.length;j++){
        console.log(students[i].education[j])
        }
    }

