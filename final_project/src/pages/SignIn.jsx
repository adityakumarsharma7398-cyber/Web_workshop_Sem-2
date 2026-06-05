import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Signed in as: ${email}`);
        navigate('/');
    };

    return (
        <div className="signin-container">
            <div className="logo" style={{ margin: '0 auto 20px auto' }}></div>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email or mobile phone number</label>
                <input
                    id="email"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    required
                />
                <button type="submit">Sign In</button>
            </form>
            <p style={{ marginTop: '15px', fontSize: '13px', color: '#555' }}>
                New to Amazon?{' '}
                <a href="#" style={{ color: '#0f5891' }}>Create your Amazon account</a>
            </p>
        </div>
    );
};

export default SignIn;
