import React from 'react'
import { useState } from 'react';
const Login = () => {
    const [username, setUsername] = useState("");
   
    const [password, setPassword] = useState("");
    
    const [error, setError] = useState("");
  
    // Validation criteria
    const validateUsername = (username) => {
      const usernamePattern = /[A-Z]/;
      return usernamePattern.test(username);
    };
    
  
    const validatePassword = (password) => {
      const passwordPattern = /(?=.*[A-Z])(?=.*\d)/;
      return passwordPattern.test(password);
    };
  
    const changeUsername = (e) => {
      setUsername(e.target.value);
    };
   
    const changePassword = (e) => {
      setPassword(e.target.value);
    };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (
        validateUsername(username) &&
        validatePassword(password)
      ) {
        console.log(username, password);
      } else {
        setError("Password or username doesnt match");
      }
    };
  
    return (
      <div className="flex justify-center items-center bg-[#1E201E] h-screen text-black  ">

        <div className="bg-white shadow-2xl w-[90%] md:w-[70%] lg:w-[40%] xl:w-[30%] p-8 rounded-lg">
          <h2 className="text-center text-3xl font-bold mb-6">Log In</h2>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Username"
              className="border-2 border-gray-300 p-3 rounded-lg"
              onChange={changeUsername}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              className="border-2 border-gray-300 p-3 rounded-lg"
              onChange={changePassword}
              value={password}
            />
            
            <div className="flex items-center gap-2">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button
              type="submit"
              className="rounded-full p-3 bg-[#FF7F3E] text-white hover:bg-white hover:text-[#FF7F3E] border-2 border-[#FF7F3E] transition-all duration-500"
            >
              Log In
            </button>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </form>
          <a href="/" className="block text-center mt-4 text-gray-600">
            ← Back to Home
          </a>
        </div>
      </div>
  )
}

export default Login
