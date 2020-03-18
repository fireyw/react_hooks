import React from "react";
import { Link } from "react-router-dom";

const basic = {
  margin: "10px"
};

function Navigation() {
  return (
    <>
      <div>
        <Link to="/" style={basic}>
          Home
        </Link>
        <Link to="/Login" style={basic}>
          Login
        </Link>
        <Link to="/Write" style={basic}>
          Write
        </Link>
        <Link to="/List" style={basic}>
          List
        </Link>
      </div>
    </>
  );
}

export default Navigation;
