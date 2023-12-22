import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

function UserDetails() {
  const [userdetails, setUserdetails] = useState([]);

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
