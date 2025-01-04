"use client";

import { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChartComponent = () => {
  // Default data for the chart
  const [chartData, setChartData] = useState({
    labels: [
      "1 hour",
      "2 hours",
      "3 hours",
      "4 hours",
      "5 hours",
      "6 hours",
      "7 hours",
      "8 hours",
    ],
    datasets: [
      {
        label: "Production Time",
        data: [50, 60, 70, 80, 90, 85, 75, 65],
        backgroundColor: "rgba(34, 197, 94, 0.7)", // Green
      },
      {
        label: "Loss Time",
        data: [10, 20, 30, 15, 25, 35, 20, 10],
        backgroundColor: "rgba(239, 68, 68, 0.7)", // Red
      },
      {
        label: "Maintenance Time",
        data: [5, 10, 15, 10, 5, 20, 25, 15],
        backgroundColor: "rgba(234, 179, 8, 0.7)", // Yellow
      },
    ],
  });

  // Automatically update the data every 5 seconds for demo purposes (can be set to 1 minute)
  useEffect(() => {
    const updateData = () => {
      setChartData((prevData) => ({
        ...prevData,
        datasets: prevData.datasets.map((dataset) => ({
          ...dataset,
          data: dataset.data.map((value) =>
            Math.max(
              0,
              Math.min(80, value + Math.floor(Math.random() * 10 - 5))
            )
          ),
        })),
      }));
    };

    const interval = setInterval(updateData, 5000); // Update every 5 seconds (adjust as needed)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  // Chart options with y-axis and x-axis customization
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Let the container control the aspect ratio
    scales: {
      x: {
        title: {
          display: true,
          text: "Hours",
        },
      },
      y: {
        beginAtZero: true,
        max: 80,
        ticks: {
          stepSize: 10,
        },
        title: {
          display: true,
          text: "Time (minutes)",
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Machine Efficiency (Production, Loss, Maintenance)",
      },
    },
  };

  return (
    <div className="w-full p-4 shadow-xl hover:shadow-2xl border-gray-50 border-[1px] rounded-md bg-white">
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px] xl:h-[400px]">
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
};

export default BarChartComponent;
