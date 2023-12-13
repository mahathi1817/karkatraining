import React,{useState}from "react";
// export const Button=()=>{
    // return(
//         <>
//         <button onClick={myfunction1}>+</button>
//         <button onClick={myfunction2}>-</button>
//         </>
//     )
// }
// let n=0
//     let myfunction1=()=>{
//         n+=1
//         console.log(n)
//     }
// let myfunction2=()=>{
//         n-=1
//         console.log(n)
//     }
// }
function Home(){
    const [Count,SetCount]=useState("hi")
    function increment(){
        SetCount("hello")
    }
    function decrement(){
        SetCount(Count-1)
    }
    return(
        <>
        <div>{Count}</div>
        <button onClick={increment}>increase</button>
        <button onClick={decrement}>decrease</button>
        </>
    )
}
 