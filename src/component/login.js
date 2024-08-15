import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./login.css";

const Credential = [
  { username: 'admin', password: '12345' },
  { username: 'user', password: 'password' }
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isauth, setauth] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    onLogin();

    for (let i = 0; i < Credential.length; i++) {
      if (Credential[i].username === username && Credential[i].password === password) {
        setauth(true);
        break;
      }
    }
    if (isauth) {
      navigate("/Home");
    } else {
      alert("Invalid username and password");
    }
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
