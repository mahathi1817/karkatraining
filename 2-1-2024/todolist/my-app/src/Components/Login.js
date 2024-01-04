import React from "react";
import { useState } from "react";

export const Login = () => {
  const [input, setInput] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const local = JSON.parse(localStorage.getItem("user")) || [];
    let loggedUser = null;

    if (local.length > 0) {
      loggedUser = local.find(
        (user) => user.name === input.name && user.password === input.password
      );
    }

    if (loggedUser) {
      alert("Login success");
      window.location.href = "/todo";
      localStorage.setItem("loggedin", true);
    } else {
      alert("Wrong Email or Password");
    }

    const username=JSON.stringify(input.name)
    console.log(username)
    localStorage.setItem("name",username)
  
  };

  return (
    <div className="loginpage">
      <form onSubmit={handleSubmit}><b>Login page</b>
        <div className="email1">
        {/* <label>Email</label> */}
        <input
          type="text"
          placeholder="User name"
          value={input.email}
          onChange={(e) => setInput({ ...input, name: e.target.value })}/>
        </div>
        <div className="pw1">
        {/* <label>Password</label> */}
        <input
          type="password" 
          placeholder="Password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })} />
        </div>
        <button type="submit" className="button1">LOGIN</button>
        <a href="/register" className="ca">Create account</a>
      </form>
        </div>
  );
};
