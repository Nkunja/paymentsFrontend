import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://9062-41-209-57-167.ngrok-free.app/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      if (response.status === 200) {
        console.log('Login successful:', response.data);
        // Redirect user or perform other actions upon successful login
      } else {
        console.log('Login failed:', response);
        setError('Login Failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('Failed to log in');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Login</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md py-2 px-3 w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border border-gray-300 rounded-md py-2 px-3 w-full" />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
