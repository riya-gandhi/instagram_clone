import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async () => {
        debugger
        try {
          if (username && password) {
            const credentials = {
              username: username,
              password: password
            };
      
            const response = await axios.post('http://localhost:8000/auth/signup', credentials);
      
            if (response.status === 200) {
                <Navigate to="/login" />
            } else {
              throw new Error('Signup failed');
            }
          } else {
            throw new Error('Please fill in all fields');
          }
        } catch (error) {
          console.error('Signup error:', error);
        }
      };
    return (
        <div className="signup-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="signup-form" style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', fontFamily: 'Billabong, sans-serif' }}>Instagram</h1>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                />
                <button onClick={handleSignup} style={{ width: '100%', padding: '0.8rem', background: '#0095f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Sign Up
                </button>
                <div style={{ marginTop: "1rem" }}>
                    Already have an account <Link to={"/"}>Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
