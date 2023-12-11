const url="https://reqres.in/api/users?page=2";
fetch(url)
.then((response)=>{
    // console.log(response);
    return response.json();
})
.then(data=>{
    console.log(data)
    let table=`
    <table>
    <tr>
    <td>s.no</td/>
    <td>id</td/>
    <td>email</td/>
    <td>first_name</td/>
    <td>last_name</td/>
    <td>avatar</td/>
    <td>button<td>
    </tr>
    ${data.data.map((person,index)=>`        
        <tr>
            <td>${index+1}</td>
            <td>${person.id}</td>
            <td>${person.email}</td>
            <td>${person.first_name}</td>
            <td>${person.last_name}</td>
            <td><img src="${person.avatar}"/></td>
            <td><button onclick="${person.button}">delete</button><td>
        </tr>
        `
    ).join('')}
    </table>`
    document.getElementById("demo").innerHTML=table
    document.getElementById("demo").deleteRow(0);
})
.catch((error)=>{
    console.log(error);
})
