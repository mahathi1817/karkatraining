import React from "react";
import { useState } from "react";

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
        <div className="registerpage">
            <form1><b>Register Page</b>
        <div className="name">
            {/* <label><b>Name</b></label> */}
        <input type="text" placeholder="Enter your name" value={input.name} onChange={(e) => SetInput({...input, name: e.target.value})}/><br></br>
        </div>
        <div className="email">
            {/* <label><b>E-mail</b></label> */}
        <input type="email" placeholder="Enter your e-mail" value={input.email} onChange={(e)=> SetInput({...input, email: e.target.value})}/><br></br>
        </div>
        <div className="pw">
            {/* <label><b>Password</b></label> */}
        <input type="password"  placeholder="Enter your password" value={input.password} onChange={(e) => SetInput({...input, password: e.target.value})}/><br></br>
        </div>
        <div>
        <button onClick={handleClick} className="button">Register</button>
        </div>
        <div className="signup"> 
            <h>Already have an account?<a href="/login" className="su">Sign Up</a></h>
        </div>
        </form1>
    </div>
    )
}