import React from "react";
import { useState } from "react";

export const Use=()=>{
    const [one,SetCount]=useState("hi")
    const fun=()=>{
        return(
            SetCount("hello")
        )
    }
    return(
        <>
         <p>{one}</p>
         <button onClick={fun}></button>
        </>
    )
}