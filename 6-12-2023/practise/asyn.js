// function fun(){
//     return 10
// }
// console.log(fun()) //normal function

// async function fun(){ //asyn function
//     return 10
// }
// console.log(fun()) //when we give async function it returns Promise

async function fun(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(10)
            console.log("start")
        },1000)
    })
}
async function myfun(){
    const result=await fun()
    console.log(result)
    console.log("completed")
}
myfun()