import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [token, setToken] = useState('');

    const handleLogin = () => {
        if (email && password) {
            axios.post('https://reqres.in/api/login', { email, password })
                .then(response => {
                    const authToken = response.data.token;
                    localStorage.setItem('token', authToken);
                    setToken(authToken);
                    alert('Login successful');
                })
                .catch(error => {
                    alert('Login failed');
                });
        } else {
            alert('Enter both email and password');
        }
    };

    return (
        <div>
            <h4>Login Page</h4>
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

            <button onClick={handleLogin}>Login</button>

            {token && (
                <div>
                    <h4>Token:</h4>
                    <p>{token}</p>
                </div>
            )}
        </div>
    );
};

export default Login;



// import React, { useState } from 'react';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         if (email && password) {
//             localStorage.setItem('email', email);
//             localStorage.setItem('password', password);

//             alert('Login successfull');
//         } else {
//             alert('Enter both email and password');
//         }
//     };

//     return (
//         <div>
//             <h4>Login Page</h4>
//             <label>Email:</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

//             <label>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

//             <button onClick={handleLogin}>Login</button>
//         </div>
//     );
// };

// export default Login;

