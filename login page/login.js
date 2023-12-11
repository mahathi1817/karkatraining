let name=document.getElementById("name")
let pw=document.getElementById("pw")

function store(){
    localStorage.setItem("name",name.value);
    localStorage.setItem("pw",pw.value);
}
function check(){
    let storedname=localStorage.getItem("username")
    let storedpw=localStorage.getItem("userpw")
}
if(username.value !== storedname || userpw.value !== storedpw){
    alert("Error")
}else{
    alert("You are logged in.")
}