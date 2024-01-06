import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async () => {
        try {
          const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
          });
      
          if (response.ok) {
            alert('Login successful!');
          } else {
            throw new Error('Invalid credentials');
          }
        } catch (error) {
          setError('Sorry, your login details were incorrect.');
        }
      };
    return (
        <div className="login-page" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className="login-form" style={{ border: '1px solid #ccc', padding: '2rem', borderRadius: '8px', maxWidth: '400px', width: '100%' }}>
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
                {error && <p style={{ color: 'red', marginBottom: '1rem' }}>{error}</p>}
                <button onClick={handleLogin} style={{ width: '100%', padding: '0.8rem', background: '#0095f6', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                    Log In
                </button>
                <div style={{ marginTop: "1rem" }}>
                    Don't have account <Link to={"/signup"}>create one</Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
