import React, { useState, useEffect } from "react";
import Counter from "./Counter";
import RichTextEditor from "./RichTextEditor";
import UserForm from "./UserForm";
import BarChart from "./BarChart";

const Dashboard = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [count, setCount] = useState(0);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("userData"));
    if (savedData) {
      setUserData(savedData);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("userData", JSON.stringify(userData));
  }, [userData]);

  return (
    <div>
      <h1>User Data Dashboard</h1>
      <Counter count={count} setCount={setCount} />
      <RichTextEditor userData={userData} setUserData={setUserData} />
      <UserForm userData={userData} setUserData={setUserData} />
      <BarChart count={count} />
    </div>
  );
};

export default Dashboard;