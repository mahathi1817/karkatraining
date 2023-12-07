const apiURL='https://jsonplaceholder.typicode.com/todos'
const fetchData=fetch(apiURL)
fetchData.then(response=>{
    if(!response.ok){
        throw new Error('HTTP Error!Status:${respons.status}');
    }
    return response.json()
})
.then(data=>{
    console.log('Data:',data);
})
.catch(err=>{
    console.error("Error,err.message");
})