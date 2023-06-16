import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate()

    const storeTokenInLocalStorage = (token) => {
      localStorage.setItem('jwt_token', token);
    };

    const handleSubmit = async () => {
        try {
          const response = await axios.post("http://localhost:8000/auth/login", {email: email, password: password})
          const token = response.data.access_token;
          storeTokenInLocalStorage(token);
          console.log(response)
          navigate("/profile")
        } catch (error) {
          console.log(error)
        }

    };

    const getTokenFromLocalStorage = () => {
      return localStorage.getItem('jwt_token');
    };

    axios.defaults.headers.common['Authorization'] = `Bearer ${getTokenFromLocalStorage()}`;
     

  return (
    <div className="bg-white shadow-md rounded px-8 pt-10 pb-8 mb-4 flex flex-col w-1/2 mx-auto my-48">
      <div className="mb-4">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
          id="username"
          type="text"
          placeholder="youremail@domain.com"
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-grey-darker text-sm font-bold mb-2"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
          id="password"
          type="password"
          placeholder="******************"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="text-red text-xs italic">Please choose a password.</p>
      </div>
      <div className="flex items-center justify-between">
        <button
          onClick={handleSubmit}
          className="bg-blue hover:bg-blue-dark text-black font-bold py-2 px-4 rounded"
          type="button"
        >
          Sign In
        </button>
        <a
          className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          href="#"
        >
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Login;
