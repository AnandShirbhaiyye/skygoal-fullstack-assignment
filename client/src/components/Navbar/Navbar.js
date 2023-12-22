import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState({});

  useEffect(()=>{
    const storageUser = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(storageUser);
  },[]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link
            className="navbar-brand  fs-4 color-title bg-body-create"
            to=""
          >
            Full Stack Assignment
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse fs-5 "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link active me-5"
                  aria-current="page"
                  to="/"
                >
                  UserDetails
                </Link>
              </li>
             
             
             
              <li className="nav-item">
                <Link
                  className="nav-link active  me-5"
                  aria-current="page"
                  to="/login"
                >
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active  me-5"
                  aria-current="page"
                  to="/signup"
                >
                  SignUp
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-user-container">
           <span className="text-primary">Hello,{user.name || "user"}</span>
          {user?.name ? (
            <span
              className="navbar-logout btn btn-outline-light btn-sm"
              onClick={() => {
                localStorage.removeItem("user");
                window.location.href = "/login";
              }}
            >
              Logout
            </span>
          ) : null}
        </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
