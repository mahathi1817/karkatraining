const apiURL = 'https://jsonplaceholder.typicode.com/todos'
const fetchData = fetch(apiURL)
fetchData.then(response => {
    if (!response.ok) {
        throw new Error('HTTP Error!Status:${respons.status}');
    }
    return response.json()
})
    .then(data => {
        console.log('Data:', data);
        let table =
            `<table>
        <tr>
        <th>S.no<th>
        <th>Name<th>
        <th>Age<th>
        <th>Place<th>
        </tr>
        ${data.map((person) => {
                // console.log(person.id)
                if ((person.completed == true) && (person.id >= 10) && (person.id <= 70)) {
                    // console.log(person.completed)
                    return `
                <tr>
            <td>${person.id}<td>
            <td>${person.userId}<td>
            <td>${person.title}<td>
            <td>${person.completed}<td>
        </tr>
        `
                }
            }).join('')}
    </table>`
        document.getElementById("demo").innerHTML = table


    })
    .catch(err => {
        // console.error("Error,err.message");
    })

