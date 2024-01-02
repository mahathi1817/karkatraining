import React from "react";
import { useState } from "react";
// import {useNavigator} from "react-router-dom";
export const Register=()=>{
    const [input,SetInput]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleClick = () => {
        console.log(input)
        if(input.name && input.email && input.password){
                const local=JSON.parse(localStorage.getItem("user"))||[];
                local.push(input);
                localStorage.setItem("user",JSON.stringify(local))
                SetInput({
                    name: "",
                    email:"",
                    password: "",
                })
        }else{
            alert("Enter your name and password")
        }
    }
    return(
        <div>
        <div className="name">
        <label>Name</label>
        <input type="text" value={input.name} onChange={(e) => SetInput({...input, name: e.target.value})}/><br></br>
        </div>
        <div className="email">
        <label>Email</label>
        <input type="email" value={input.email} onChange={(e)=> SetInput({...input, email: e.target.value})}/><br></br>
        </div>
        <div className="pw">
        <label>Password</label>
        <input type="password" value={input.password} onChange={(e) => SetInput({...input, password: e.target.value})}/><br></br>
        </div>
        <div className="button">
        <button onClick={handleClick}>Register</button>
        </div>
    </div>
    )
}