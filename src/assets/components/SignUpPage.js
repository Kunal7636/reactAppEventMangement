import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axiosInstance';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('user'); // Default role or could be an option
  const [error, setError] = useState('');

  useEffect(()=>{
    console.log("Hello test")
  },[])

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    //event.preventDefault();
    try {
        await axios.post('/users', { username, password, email, role });
        navigate('/login'); // Redirect to login page after successful signup
      } catch (err) {
        console.error('Error details:', err.response ? err.response.data : err.message);
        setError('Signup failed. Please try again.');
      }
  };

  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role:</label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="user">User</option>
            <option value="organizer">Organizer</option>
            {/* Add more roles if needed */}
          </select>
        </div>
        <button type="submit">Signup</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};


export default SignUpPage;