import React from "react"
import { useContext } from "react"
import { User } from "./App"

export const Home=()=>{
    const one=useContext(User)
    return(
        <p>{one}</p>
    )
}