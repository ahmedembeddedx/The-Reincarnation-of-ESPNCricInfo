import React from 'react'
import { useState } from 'react';
export default function Login({onLogin}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
    // Perform your authentication logic here
    // For simplicity, let's assume a hardcoded username and password
    if (username === 'admin' && password === 'admin123') {
        onLogin(); // Call the onLogin function provided by the parent component
    } else {
        alert('Invalid credentials. Please try again.');
    }
  };
  return (
    <div>
        <div id="SignInFormTable">
            <label htmlFor="username" id="input_creds">
                Username: <input type="text" className='input_creds' placeholder="@ahmedembeddedx" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label htmlFor="password" id="input_creds">
                Password: <input type="password" className='input_creds' placeholder="**********" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <div style={{ paddingRight: '100px' }}>
                <button className="b2" onClick={handleLogin}>
                    Log In
                </button>
            </div>
            <div id="loginStatus"></div>
        </div>
        <br/>
        <br/>
        <hr/>
        <footer>
            <p>ESPNCricInfo Reincarnated</p>
            <p>Copyright 2024. All Rights Reserved.</p>
            <a href="https://github.com/ahmedembeddedx"><img src="https://cdn-icons-png.freepik.com/512/919/919847.png?ga=GA1.1.1925836337.1709750745&" alt="" height="40"/></a>
        </footer>
    </div>
  )
}
