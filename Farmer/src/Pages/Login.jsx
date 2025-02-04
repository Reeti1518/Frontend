import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Tractor } from "lucide-react";
import { MoonLoader } from "react-spinners";
import { POST } from "../Helpers/Api";
import { AppContext } from "../Helpers/MyContext";
import BackG from "../assets/BackG.gif";

function Login() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const [form, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    POST("user/login", form)
      .then((data) => {
        localStorage.setItem("token", data.token);
        setUser(data.token);
        navigate("/profile");
        alert("Login Successful");
      })
      .catch((error) => {
        alert(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="relative flex items-center justify-center h-screen">
      <img src={BackG} alt="Background GIF" className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="relative z-10 flex flex-col items-center justify-center w-[55vw] h-[80vh] bg-white shadow-lg rounded-lg">
        
         <div className="flex w-full h-full p-3">
          <div className="grid grid-rows-3 flex-1 bg-lime-200 mr-2 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-center flex-grow">
              <span className="font-serif italic text-center">
                <h1 className="text-5xl">Welcome back!</h1>
                <p className="text-xl">We are glad to see you again...</p>
              </span>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <h2 className="text-center text-lg font-medium text-gray-700">
                A revolutionary network of farmers and buyers working together for a better marketplace.
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow px-10 py-5 text-xl">
              <p className="mb-2 text-sm font-medium text-gray-700">Don't have an account? Let's get you started!</p>
              <Link to="/register" className="text-black bg-gradient-to-r from-lime-400 via-lime-300 to-lime-400 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-black shadow-lg font-medium rounded-lg text-lg px-7 py-3.5 text-center">
                Register
              </Link>
            </div>
          </div>


          <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white border border-gray-300 rounded-lg shadow-sm">
            <form className="w-full max-w-sm flex flex-col items-center space-y-4" onSubmit={handleSubmit}>
              <h4 className="text-xl font-medium text-gray-900 text-center">
                Login to <span className="text-green-700 font-extrabold">FRESH ROOTS</span>
              </h4>
              <div className="w-full">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                <input type="email" name="email" id="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@company.com" required />
              </div>
              <div className="w-full">
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Your password</label>
                <input type="password" name="password" id="password" onChange={handleChange} placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
              </div>
              <div className="flex items-center justify-between w-full">
                <label className="flex items-center text-sm font-medium text-gray-900">
                  <input id="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300" />
                  <span className="ml-2">Remember me</span>
                </label>
                <a href="#" className="text-sm text-green-700 hover:underline">Forgot Password?</a>
              </div>
              <button type="submit" className="w-full text-white bg-green-800 hover:bg-green-700 focus:ring-4 focus:outline-none font-medium   focus:ring-black rounded-lg text-sm px-5 py-2.5 text-center flex justify-center items-center gap-2">
                {loading ? <MoonLoader color="white" size={15} /> : (
                  <div className="flex flex-row justify-center items-center gap-2">
                    Login to your account
                  </div>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
