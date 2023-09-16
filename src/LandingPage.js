import React, { useState } from "react";
// import Dashboard from "./Dashboard";
import {  useNavigate } from 'react-router-dom';

function LandingPage() {
  const [formData, setFormData] = useState({
    username: "",
  });

const navigate = useNavigate() 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", formData.username);
   navigate("/Dashboard", { state: { username: formData.username } })
  };

  return (
    
    <div className="landing-page">
      <div className="centered-box">
        <h3>Let's Begin</h3>
        <form onSubmit={handleSubmit}>
          <div className="row g-3 align-items-center">
            <div >
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your Full name"
                className="form-control"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <br></br>
            <div className="d-grid gap-2 ">
              {" "}
              <button className="btn btn-primary " type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandingPage;

