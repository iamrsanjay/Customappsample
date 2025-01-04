"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chartjs.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const HourBasedProduction = () => {
  const [shiftNo, setShiftNo] = useState(1);

  // Sample data for different shifts
  const hourBasedProductionData = {
    1: [2, 4, 6, 8, 6, 4, 2, 0],
    2: [3, 5, 7, 6, 5, 4, 3, 2],
    3: [1, 3, 5, 7, 8, 7, 5, 3],
    4: [4, 5, 3, 5, 6, 8, 1, 3],
    5: [3, 6, 8, 1, 5, 3, 2, 4],
    6: [1, 5, 8, 2, 6, 4, 8, 1],
  };

  const [array, setArray] = useState(hourBasedProductionData[1]); // Set default data for shift 1

  // Function to update data randomly within a specific range
  const updateRandomData = () => {
    setArray((prevArray) =>
      prevArray.map((value) => {
        // Update each value randomly, keeping it within a range (e.g., 0 to 8)
        const newValue = value + Math.floor(Math.random() * 3 - 1); // Randomly add or subtract 1
        return Math.max(0, Math.min(8, newValue)); // Ensure the value is between 0 and 8
      })
    );
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      // Update random data every 5 seconds
      updateRandomData();

      setShiftNo((prevShiftNo) => {
        const newShiftNo = prevShiftNo + 1;
        if (newShiftNo <= 3) {
          // Cycle through 3 shifts
          return newShiftNo;
        }
        return 1; // Reset to shift 1
      });
    }, 5000);

    return () => clearInterval(myInterval); // Cleanup interval on component unmount
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
    scales: {
      x: {
        min: 0,
        max: 8,
        ticks: {
          stepSize: 1,
        },
      },
      y: {
        min: 0,
        max: 8,
        ticks: {
          stepSize: 1,
          callback: (value) => value.toString(), // Display all values from 0 to 8
        },
      },
    },
  };

  const data = {
    labels: [
      "1st Hour",
      "2nd Hour",
      "3rd Hour",
      "4th Hour",
      "5th Hour",
      "6th Hour",
      "7th Hour",
      "8th Hour",
    ],
    datasets: [
      {
        label: "Work Completed",
        data: array,
        borderColor: "red",
      },
    ],
  };

  return (
    <div className="w-full flex flex-col items-center p-4 shadow-xl hover:shadow-2xl border-gray-50 border-[1px] rounded-md bg-[#ffffff]">
      <div className="w-full h-full">
        <header className="mb-4 text-center">
          <h3 className="text-lg font-semibold">Hour Based Production</h3>
        </header>

        <div className="relative w-full h-96 bg-white shadow-md p-4 rounded-lg">
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  );
};

export default HourBasedProduction;
