import React from "react";
import { About } from "./About";
import "./Home.css"
import{Button} from "./Button"
export const Home=()=>{
    let arr=[
     {
        name:"Mahathi",
        age:17,
        degree:"12th",
        place:"Thengapattanam",
    },
    {
        name:"Ajay",
        age:22,
        degree:"EEE",
        place:"ngl",
    },
    {
        name:"James",
        age:25,
        degree:"B.Tech",
        place:"ngl",
    },
    {
        name:"Arun",
        age:22,
        degree:"B.com",
        place:"ngl",
    }
]
    return(
        <>
        <div>Home</div>
        <div className="color">
        <About myarr={arr}/>
        <Button/>
        </div>
        </>
    )
    
}