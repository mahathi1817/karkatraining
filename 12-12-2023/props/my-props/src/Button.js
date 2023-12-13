import React from "react";
export const Button=()=>{
    return(
        <>
        <button onClick={myfunction1}>+</button>
        <button onClick={myfunction2}>-</button>
        </>
    )
}
let n=0
    let myfunction1=()=>{
        n+=1
        console.log(n)
    }
let myfunction2=()=>{
        n-=1
        console.log(n)
    }