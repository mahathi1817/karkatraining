import React from "react";
import { useState } from "react";
export const Form=()=>{
    const [formValues,SetformValues]=useState({
        name: "",
        pass: ""
});
    
    const handleSumbit=(e)=>{
        e.preventDefault();
        console.log(formValues);
        SetformValues({
            name: "",
            pass: ""
    });
    };
    
    return(
        <form onSubmit={handleSumbit}>
            <label>name</label>
            <input
                type="text"
                placeholder="name"
                value={formValues.name}
                onChange={(e) => SetformValues({ ...formValues, name: e.target.value })}    
            />
            <label>password</label>
            <input
                type="password"
                placeholder="password"
                value={formValues.pass}
                onChange={(e) => SetformValues({ ...formValues, pass: e.target.value })}
            />
            <button type="submit">submit</button>
        </form>
    )
}
