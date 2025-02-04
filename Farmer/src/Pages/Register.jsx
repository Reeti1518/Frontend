
import React, { useState } from "react";
import { MoonLoader } from "react-spinners";
import { POST, UPLOAD } from "../Helpers/Api";
import LoadingOverlay from "react-loading-overlay";
import { Link } from "react-router-dom";
import BackG1 from "../assets/BackG1.gif";

function Register() {
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState();
  const [form, setFormData] = useState({
    email: "",
    password: "",
    phone: "",
    confirmPassword: "",
    name: "",
    role: "buyer",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      if (form.password === form.confirmPassword) {
        setLoading(true);
        try {
          const image = await UPLOAD(file);
          POST("user/register", { ...form, image })
            .then((data) => {
              console.log(data);
              alert("Register Successful");
            })
            .catch((error) => {
              console.log(error);
              alert(error.message);
            })
            .finally(() => {
              setLoading(false);
            });
        } catch (error) {
          setLoading(false);
          alert(error);
        }
      } else {
        alert("Both passwords should be same");
      }
    } else {
      alert("File is not selected");
    }
  };

  return (
    <LoadingOverlay active={loading} spinner text="Connecting...">

      <div className="relative flex items-center justify-center h-screen">
        <img
          src={BackG1}
          alt="Background GIF"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-[55vw] h-[80vh] bg-white shadow-lg rounded-lg">
          <div className="flex w-full h-full p-4">
            <div className="flex-1 flex flex-col items-center justify-center p-8 bg-white border border-gray-200 rounded-lg shadow-sm">
              <form
                className="w-full max-w-sm flex flex-col items-center space-y-4"
                onSubmit={handleSubmit}
              >
                <h5 className="text-xl font-medium text-gray-900 text-center">
                  Sign in to{" "}
                  <span className="text-amber-500 font-extrabold">
                    FRESH ROOTS
                  </span>
                </h5>

                <div className="w-full">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>

                <div className="w-full">
                  <label
                    htmlFor="confirmPassword"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    required
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="role"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  ></label>
                  <div className="flex space-x-4">
                    <label className="flex items-center text-sm font-medium text-gray-900">
                      <input
                        type="radio"
                        name="role"
                        value="buyer"
                        checked={form.role === "buyer"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Buyer
                    </label>
                    <label className="flex items-center text-sm font-medium text-gray-900">
                      <input
                        type="radio"
                        name="role"
                        value="seller"
                        checked={form.role === "seller"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Seller
                    </label>
                  </div>
                </div>

                <div className="w-full">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Add photo
                  </label>
                  <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full text-black bg-amber-500 hover:bg-amber-400 focus:ring-2 focus:outline-none focus:ring-black font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  {loading ? (
                    <MoonLoader color="white" size={15} />
                  ) : (
                    "Register"
                  )}
                </button>
              </form>
            </div>

<div className="grid grid-rows-3 flex-1 bg-yellow-200 ml-2 rounded-lg shadow-md p-4">
            <div className="flex items-center justify-center flex-grow">
              <span className="font-serif italic text-center">
                <h1 className="text-5xl">Namastey!</h1>
                <p className="text-xl">Join our platform by registering today...</p>
              </span>
            </div>
            <div className="flex items-center justify-center flex-grow">
              <h2 className="text-center text-lg font-medium text-gray-700">
              Revitalizing the agricultural economy by cutting out the middlemen and bringing farmers and buyers closer.
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center flex-grow px-10 py-5 text-xl">
              <p className="mb-2 text-sm font-medium text-gray-700">Already have an account?</p>
              <Link to="/login" className="text-black bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 hover:bg-gradient-to-br focus:ring-1 focus:outline-none focus:ring-black shadow-lg font-medium rounded-lg text-lg px-7 py-3.5 text-center">
                Login
              </Link>
            </div>
          </div>
            










          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
}

export default Register;
