// src/components/Dashboard.js
import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import RichTextEditor from "./RichTextEditor";
import UserForm from "./UserForm";
import BarChart from "./BarChart";
import "./Dashboard.css"; // Add a CSS file for styling

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [count, setCount] = useState(0);

  // Load user data from localStorage on mount
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  // Save user data to localStorage on update
  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div className="dashboard-container">
      <h1>User Data Dashboard</h1>
      <div className="sections-container">
        <div className="section">
          <h2>Counter</h2>
          <Counter count={count} setCount={setCount} />
        </div>
        <div className="section">
          <h2></h2>
          <RichTextEditor userData={userData} setUserData={setUserData} />
        </div>
        <div className="section">
          <h2>User Form</h2>
          <UserForm userData={userData} setUserData={setUserData} />
        </div>
        <div className="section">
          <h2>Bar Chart</h2>
          <BarChart count={count} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;