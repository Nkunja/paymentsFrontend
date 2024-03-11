import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LoginPage() {
  const [email, setEmail] = useState(''); // Change setEmail to setUsername
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch CSRF token from the script tag in the HTML
    setCsrfToken(document.querySelector('[name=csrfmiddlewaretoken]').value);
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        email,
        password
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true // Include this option
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
        {/* Add the CSRF token to the form */}
        <input type="hidden" name="csrfmiddlewaretoken" value={csrfToken} />
        
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label> {/* Change email to username */}
          <input type="text" id="username" value={email} onChange={(e) => setEmail(e.target.value)} className="border border-gray-300 rounded-md py-2 px-3 w-full" /> {/* Change type to text and email to username */}
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

