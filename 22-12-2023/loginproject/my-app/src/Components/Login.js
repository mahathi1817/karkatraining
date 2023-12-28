import React from "react";
import { useState } from "react";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    const local = JSON.parse(localStorage.getItem("user")) || [];
    let loggedUser = null;

    if (local.length > 0) {
      loggedUser = local.find(
        (user) => user.email === input.email && user.password === input.password
      );
    }

    if (loggedUser) {
      alert("Login success");
      window.location.href = "/hi";
      localStorage.setItem("loggedin", true);
    } else {
      alert("Wrong Email or Password");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          type="text"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <br />
        <label>Password</label>
        <input
          type="password"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <a href="/register">Create account</a>
    </div>
  );
};
