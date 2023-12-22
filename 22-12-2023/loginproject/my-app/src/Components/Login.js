import React from "react";
import { useState } from "react";
import {useNavigator} from "react-router-dom"
export const Login=()=>{
    const [input,SetInput]=useState({
        email:"",
        password:""
    })
    const handleSumbit=(e)=>{
        e.preventDefault();
        const loggeduser=JSON.parse(localStorage.getItem("user"));
        if(input.email === loggeduser.email && input.password === loggeduser.password)
        {
            localStorage.setItem("loggedin",true);
            navigator("/")
        }else{
            alert("Wrong Email or Password")
        }
    };
    return(
        <div>Login</div>
    )
}