import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast";

function UserDetails() {
  const [userdetails, setUserdetails] = useState([]);
  const [user, setUser] = useState({})

  const loadDetails = async () => {
    try {
      const response = await axios.get("/api/userdetails");
      console.log(response?.data?.data);
      setUserdetails(response?.data?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    loadDetails();
  }, []);

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");

    if (storageUser?.email) {
      setUser(storageUser);
    } else {
      showToast("You are not logged in!", "alert", 5000);
      window.location.href = "/login";
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-center">UserDetails</h1>
      <div className="container">
        {userdetails?.map((users, index) => {
          const { name, email, password, mobile, address, gender } = users;
          return (
            <div key={index} className="user-card shadow-lg p-5 mb-5 mt-5">
              <h3>
                Name:{name} <br />
                Email: {email} <br />
                Password: {password}
                <br />
                Mobile: {mobile} <br />
                Address: {address} <br />
                Gender: {gender}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default UserDetails;
