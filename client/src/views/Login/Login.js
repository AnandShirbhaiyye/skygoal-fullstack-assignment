import React, { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import showToast from "crunchy-toast";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    const response = await axios.post("/api/login", {
      email: email,
      password: password,
    });
    showToast(response.data.message, "success", 3000);

    if (response?.data?.success) {
      localStorage.setItem("user", JSON.stringify(response?.data?.data));
      window.location.href = "/";
    }
  }

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    console.log(storageUser);

    if (storageUser?.email) {
      showToast("You are already logged in!", "danger", 5000);
      window.location.href = "/";
    }
  }, []);
  return (
    <>
      <Navbar />
      <div className="login-container shadow-lg p-4 mb-5  rounded">
        <h3 className="text-center mb-3">Login</h3>
        <div className="container">
          <input
            type="email"
            className="form-control mb-4"
            placeholder="enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            className="form-control mb-4"
            placeholder="enter your Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button
            type="button"
            className="btn btn-dark w-100 mb-3"
            onClick={loginUser}
          >
            Login
          </button>
          <p className="text-center">
            Not a member?
            <Link to="/signup" className="login-link">
              <b>Sign up now</b>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Login;
