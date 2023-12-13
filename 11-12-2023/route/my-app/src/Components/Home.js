import React from "react";
export const Home=()=>{
    const myfunction=()=>{
        console.log("hi")
    }
    return(
        <div className="Home">
            <div>Home</div>
            <button onClick={myfunction}>Button</button>
        </div>
    )
}
