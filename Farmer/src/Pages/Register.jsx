import React, { useState } from "react";
import BGRegister from "../assets/bg_registerimg.gif";
import { Link } from "react-router-dom";
import { POST, UPLOAD } from "../Helpers/Api";
import LoadingOverlay from "react-loading-overlay";

function Register() {
  const [file, setFile] = useState();
  const [form, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    name: "",
    confirmPassword: "",
  });
  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };
  const [loading, setloading] = useState(false);

  const handleSubmite = async(e) => {
    e.preventDefault();

    if (file) {
      if (form.password === form.confirmPassword) {
        setloading(true);
        try {
         const image = await UPLOAD(file)
          POST("user/register",{...form,image})
          .then((data) => {
            console.log(data);
            alert("Register Success");
          })

          .catch((error) => {
            console.log(error);
            alert(error.message);
          })
          .finally(() => {
            setloading(false);
          });
          
        } catch (error) {
          setloading(false)
          alert(error)
          
        }
        
       
      } else {
        alert("Both password should be same");
      }
    }else{
      alert("File is not selected")
    }
  };

  return (
    <LoadingOverlay active={loading} spinner text="Please wait...">
      <div className="w-screen h-screen flex ">
        {/* Left Section with Image */}
        <div className="w-1/2 flex justify-center items-center bg-teal-950">
          <img src={BGRegister} alt="register" />
        </div>

        {/* Right Section with Form */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-full max-w-sm max-h-[400px] overflow-scroll p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form className="space-y-6" onSubmit={handleSubmite}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">
                Register to Farmer Marketplace
              </h5>

              {/* Name Field */}
              <div> 
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Username
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirm-password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="+1 234 567 8900"
                  pattern="^\+?[0-9]{1,4}?[0-9]{7,}$"
                  required
                />
              </div>

              {/* Submit Button */}

              <div class="flex items-center justify-center w-full">
                <label
                  for="dropzone-file"
                  class="flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-600 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500"
                >
                  <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg
                      class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">
                      SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                  </div>
                  <input
                    id="dropzone-file"
                    onChange={(e) => setFile(e.target.files[0])}
                    type="file"
                    class="hidden"
                  />
                </label>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Register
              </button>

              {/* Link to Login */}
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                Already registered?{" "}
                <Link
                  to="/login"
                  className="text-blue-700 hover:underline dark:text-blue-500"
                >
                  Login here
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Register;
