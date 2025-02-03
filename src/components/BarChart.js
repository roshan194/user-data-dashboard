import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const BarChartComponent = ({ count }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData((prevData) => [...prevData, { name: `Count ${prevData.length + 1}`, value: count }]);
  }, [count]);

  return (
    <div>
      <h2>Bar Chart</h2>
      <BarChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default BarChartComponent;