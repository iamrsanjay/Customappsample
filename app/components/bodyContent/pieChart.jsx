"use client";

import { useState, useEffect } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  // Predefined values for each time category
  const runTimeValues = [50, 40, 60, 70, 80]; // Example values
  const lossTimeValues = [30, 25, 35, 20, 40]; // Example values
  const maintenanceTimeValues = [20, 35, 15, 10, 30]; // Example values

  // State to manage the current values
  const [runTime, setRunTime] = useState(runTimeValues[0]);
  const [lossTime, setLossTime] = useState(lossTimeValues[0]);
  const [maintenanceTime, setMaintenanceTime] = useState(
    maintenanceTimeValues[0]
  );

  // Index to cycle through the arrays
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically update values every 5 seconds (5000 milliseconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % runTimeValues.length);
    }, 5000); // 5 seconds interval

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  // Update the state whenever the index changes
  useEffect(() => {
    setRunTime(runTimeValues[currentIndex]);
    setLossTime(lossTimeValues[currentIndex]);
    setMaintenanceTime(maintenanceTimeValues[currentIndex]);
  }, [currentIndex]);

  // Chart data configuration
  const data = {
    labels: ["Run Time", "Loss Time", "Maintenance Time"],
    datasets: [
      {
        label: "Time Distribution",
        data: [runTime, lossTime, maintenanceTime],
        backgroundColor: ["#34D399", "#EF4444", "#FBBF24"], // Tailwind green, red, yellow
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 shadow-xl hover:shadow-2xl border-gray-50 border-[1px] rounded-md bg-[#ffffff]">
      <h1 className="text-2xl font-bold mb-4">Time Distribution Chart</h1>

      {/* Render the Pie chart */}
      <div className="w-full max-w-xs mx-auto">
        <Pie data={data} />
      </div>
    </div>
  );
};

export default PieChart;
