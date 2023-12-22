import React from "react";
import { useState } from "react";
import {useNavigator} from "react-router-dom";
export const Register=()=>{
    const [input,SetInput]=useState({
        name:"",
        email:"",
        password:""
    })
    const handleSumbit=(e)=>{
        e.preventDefault();
        localStorage.setItem("user",JSON.stringify(input));
        navigator("/login");
    };
    return(
        <h2>Register</h2>
    )
}