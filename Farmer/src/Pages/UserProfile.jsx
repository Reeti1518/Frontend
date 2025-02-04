import React, { useEffect, useState } from "react";
import { GET } from "../Helpers/Api";
// import LoadingOverlay from "react-loading-overlay";
import { useNavigate } from "react-router-dom";

function UserProfile() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const getUser = async () => {
    try {
      setLoading(true);
      const data = await GET("user/userProfile");
      setUser(data.user);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    // <LoadingOverlay active={loading} spinner text="Loading...">
      <div className=" h-screen flex justify-center items-center bg-gray-100">
        <div className="flex flex-col p-10 gap-5 rounded-lg bg-white border">
          <img
            src={user?.image}
            className="rounded-full  w-28 h-28 p-2 border border-black "
            alt="user-image"
          />
          <p>Name: {user?.name} </p>
          <p>Email: {user?.email}</p>
          <p>Phone: {user?.phone} </p>
          <button
            type="button"
            onClick={handleLogout}
            class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          >
            Logout
          </button>
        </div>
      </div>
    // </LoadingOverlay>
  );
}

export default UserProfile;
