import React, { useState } from 'react';
import axios from 'axios';

export default function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = async () => {
        try {
            // Send a POST request to the authentication endpoint
            const response = await axios.post('http://127.0.0.1:5000/api/authenticate', {
                username,
                password,
            });

            // Check the response data for authentication success
            if (response.data.success) {
                // Authentication successful
                // Call the onLogin callback function passed as a prop
                onLogin();
            } else {
                // Authentication failed, show an error message
                setLoginError('Invalid credentials. Please try again.');
            }
        } catch (error) {
            // Handle error during the API request
            console.error('Error during authentication:', error);
            setLoginError('An error occurred during authentication. Please try again later.');
        }
    };

    return (
        <div>
            <div id="SignInFormTable">
                <label htmlFor="username" id="input_creds">
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Username:
                    </div>
                    <input
                        type="text"
                        className="input_creds"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <label htmlFor="password" id="input_creds">
                    <div style={{ fontWeight: 'bold', fontSize: '20px' }}>
                        Password:
                    </div>
                    <input
                        type="password"
                        className="input_creds"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <div style={{ paddingRight: '100px' }}>
                    <button className="b2" onClick={handleLogin}>
                        Log In
                    </button>
                </div>

                {/* Display login error message, if any */}
                {loginError && <div style={{ color: 'red' }}>{loginError}</div>}

                {/* You can remove the static username and password info below */}
                <div style={{ fontSize: '15px' }}>
                    <strong>Username:</strong> admin
                </div>
                <div style={{ fontSize: '15px' }}>
                    <strong>Password:</strong> admin123
                </div>
                <div id="loginStatus"></div>
            </div>
            <br />
            <br />
            <hr />
            <footer>
                <p>ESPNCricInfo Reincarnated</p>
                <p>Copyright 2024. All Rights Reserved.</p>
                <a href="https://github.com/ahmedembeddedx">
                    <img src="https://cdn-icons-png.freepik.com/512/919/919847.png?ga=GA1.1.1925836337.1709750745&" alt="GitHub" height="40" />
                </a>
            </footer>
        </div>
    );
}
