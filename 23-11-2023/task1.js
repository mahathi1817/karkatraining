$(document).ready(function even() {
    $("#button").click(function () {
        let p=JSON.parse($("p").text());
        console.log(p);
let a=[]
        for(let i=0;i<p.length;i++){
            if(p[i] % 2==0){
                a.push(p[i])
            }
            console.log(a)
            $('h1').text(a)
        }
    })
})