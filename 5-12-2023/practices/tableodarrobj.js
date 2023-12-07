const students=[
    {name:"Manish",age:22,place:"ngl"},
    {name:"Ajay",age:22, place:"ngl"},
    {name:"Jemil",age:23, place:"ngl"},
    {name:"James",age:25,place:"ngl"},
    {name:"Mahathi",age:17, place:"ngl"},
    {name:"Arun",age:25,place:"ngl"},
    {name:"Mathan",age:24,place:"ngl"},
]
let table=
`<table>
    <tr>
    <th>S.no<th>
    <th>Name<th>
    <th>Age<th>
    <th>Place<th>
    </tr>
    ${students.map((person,a)=>`
    <tr>
        <td>${a+1}<td>
        <td>${person.name}<td>
        <td>${person.age}<td>
        <td>${person.place}<td>
    </tr>
    `).join('')}
</table>`
document.getElementById("demo").innerHTML=table

    