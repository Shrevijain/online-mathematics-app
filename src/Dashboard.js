import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import DataFetching from "./UseFetch";
import Timer from "./Timer";
//import Button from "./Button";

function Dashboard() {
  const location = useLocation();

  const { username } = location.state || {};

  return (
    <>
      <div className="navbar">
        <h3>Welcome {username}</h3>
        <h3>
          Time
          <Timer />
        </h3>
      </div>
      <DataFetching/>
      {/* <div className="dashboard">
        <div className="dashboard-page-left">
          <div>
            <b>
              <DataFetching />
            </b>
          </div>
          <div className="container-button">
            <button type='button' className="btn btn-primary ">Previous</button>
            <button type='button' className="btn btn-primary ">Next</button>
          </div>
        </div>
        <div className="dashboard-page-right">
          <div>
            <h3>Questions</h3>
            <DataFetching/>
          </div>
        </div>
      </div> */}
    </>
  );
}

export default Dashboard;
