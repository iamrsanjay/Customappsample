"use client"; // This tells Next.js that this is a Client Component

import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Registering necessary components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

const ChartContainer = ({ chartData, target, color }) => {
    const [tooltipContent, setTooltipContent] = useState(""); // State to hold the tooltip content

    const generateData = (actual, target, color) => {
        const actualPercent = (actual / target) * 100;
        return {
            labels: ["Actual", "Target"],
            datasets: [
                {
                    label: "Data",
                    data: [actualPercent, 100 - actualPercent],
                    backgroundColor: [color, "#E5E7EB"], // Color for actual and target
                    borderWidth: 1,
                    cutout: "70%", // This creates the donut effect
                },
            ],
        };
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true,
                callbacks: {
                    label: function () {
                        return tooltipContent || `Actual: ${chartData.actual}`;
                    },
                },
            },
            legend: { display: false },
        },
        interaction: {
            mode: "nearest",
            intersect: false,
            enabled: true,
        },
        onClick: (event, chartElement) => {
            if (chartElement.length > 0) {
                const index = chartElement[0].index;

                if (index === 0) {
                    setTooltipContent(`Actual: ${chartData.actual}`);
                } else if (index === 1) {
                    setTooltipContent(`Target: ${target}`);
                }
            } else {
                setTooltipContent(`Target: ${target}`);
            }
        },
    };

    return (
        <div className="flex flex-col items-center justify-center mx-1 relative" style={{ width: "105px", height: "105px" }}>
            {/* Chart container with width and height set to 105px */}
            <Doughnut data={generateData(chartData.actual, target, color)} options={options} height={105} width={105} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-xs font-semibold">
                <p className="text-gray-500">Actual: {chartData.actual}</p>
                <p className="text-gray-500 text-xs">Target: {target}</p>
            </div>
        </div>
    );
};

const BodyContent = () => {
    const initialChartData1 = [
        { actual: 6, target: 8, columnIndex: 1 },
        { actual: 7, target: 8, columnIndex: 2 },
        { actual: 5, target: 8, columnIndex: 3 },
        { actual: 4, target: 8, columnIndex: 4 },
        { actual: 8, target: 8, columnIndex: 5 },
    ];
    const initialChartData2 = [
        { actual: 1000, target: 1200, columnIndex: 1 },
        { actual: 1100, target: 1200, columnIndex: 2 },
        { actual: 900, target: 1200, columnIndex: 3 },
        { actual: 800, target: 1200, columnIndex: 4 },
        { actual: 1195, target: 1200, columnIndex: 5 },
    ];
    const initialChartData3 = [
        { actual: 90, target: 100, columnIndex: 1 },
        { actual: 85, target: 100, columnIndex: 2 },
        { actual: 95, target: 100, columnIndex: 3 },
        { actual: 80, target: 100, columnIndex: 4 },
        { actual: 99, target: 100, columnIndex: 5 },
    ];
    const initialChartData4 = [
        { actual: 3500, target: 5000, columnIndex: 1 },
        { actual: 4000, target: 5000, columnIndex: 2 },
        { actual: 4500, target: 5000, columnIndex: 3 },
        { actual: 3000, target: 5000, columnIndex: 4 },
        { actual: 4785, target: 5000, columnIndex: 5 },
    ];
    const initialChartData5 = [
        { actual: 900, target: 1000, columnIndex: 1 },
        { actual: 850, target: 1000, columnIndex: 2 },
        { actual: 950, target: 1000, columnIndex: 3 },
        { actual: 800, target: 1000, columnIndex: 4 },
        { actual: 995, target: 1000, columnIndex: 5 },
    ];

    const getRandomValue = (target) => {
        const min = 0.4; // 40% minimum
        const max = 0.97; // 97% maximum
        const randomPercent = min + Math.random() * (max - min);
        return Math.round(target * randomPercent);
    };

    const [chartData1, setChartData1] = useState(initialChartData1);
    const [chartData2, setChartData2] = useState(initialChartData2);
    const [chartData3, setChartData3] = useState(initialChartData3);
    const [chartData4, setChartData4] = useState(initialChartData4);
    const [chartData5, setChartData5] = useState(initialChartData5);

    useEffect(() => {
        const updateActualValues = () => {
            setChartData1(chartData1.map((data) => ({
                ...data,
                actual: getRandomValue(data.target),
            })));
            setChartData2(chartData2.map((data) => ({
                ...data,
                actual: getRandomValue(data.target),
            })));
            setChartData3(chartData3.map((data) => ({
                ...data,
                actual: getRandomValue(data.target),
            })));
            setChartData4(chartData4.map((data) => ({
                ...data,
                actual: getRandomValue(data.target),
            })));
            setChartData5(chartData5.map((data) => ({
                ...data,
                actual: getRandomValue(data.target),
            })));
        };

        const interval = setInterval(updateActualValues, 10000);

        return () => clearInterval(interval);
    }, [chartData1, chartData2, chartData3, chartData4, chartData5]);

    return (
        <div className="flex flex-col items-center w-full h-full px-4 overflow-hidden">
            <div className="w-full max-w-full flex-grow overflow-hidden">
                {/* Row for Working Hours */}
                <div className="flex items-center mb-2">
                    <div className="w-[18%] text-left font-semibold text-lg pl-8 pr-4">Working Hours</div>
                    <div className="w-[80%] grid grid-cols-5 gap-1 mt-2">
                        {chartData1.map((data, index) => (
                            <div key={data.columnIndex} className="relative flex flex-col items-center">
                                <div className="text-center mb-1 font-semibold text-sm">C{index + 1}</div> {/* Column Labels */}
                                <ChartContainer
                                    chartData={data}
                                    target={8} // Target value fixed for this row
                                    color="#34D399" // Green for Working Hours row
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row for Units Consumed */}
                <div className="flex items-center mb-2">
                    <div className="w-[18%] text-left font-semibold text-lg pl-8 pr-4">Units Consumed</div>
                    <div className="w-[80%] grid grid-cols-5 gap-1 mt-2">
                        {chartData2.map((data, index) => (
                            <div key={data.columnIndex} className="relative flex flex-col items-center">
                                <ChartContainer
                                    chartData={data}
                                    target={1200} // Target value fixed for this row
                                    color="#FBBF24" // Yellow for Units Consumed row
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row for CFM Generated */}
                <div className="flex items-center mb-2">
                    <div className="w-[18%] text-left font-semibold text-lg pl-8 pr-4">CFM Generated</div>
                    <div className="w-[80%] grid grid-cols-5 gap-1 mt-2">
                        {chartData3.map((data) => (
                            <div key={data.columnIndex} className="relative flex flex-col items-center">
                                <ChartContainer
                                    chartData={data}
                                    target={100} // Target value fixed for this row
                                    color="#EF4444" // Red for CFM Generated row
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row for Tyre Production */}
                <div className="flex items-center mb-2">
                    <div className="w-[18%] text-left font-semibold text-lg pl-8 pr-4">Tyre Production</div>
                    <div className="w-[80%] grid grid-cols-5 gap-1 mt-2">
                        {chartData4.map((data) => (
                            <div key={data.columnIndex} className="relative flex flex-col items-center">
                                <ChartContainer
                                    chartData={data}
                                    target={5000} // Target value fixed for this row
                                    color="#3B82F6" // Blue for Tyre Production row
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Row for Specific Air Consumption */}
                <div className="flex items-center mb-0">
                    <div className="w-[18%] text-left font-semibold text-lg pl-8 pr-4">Specific Air Consumption</div>
                    <div className="w-[80%] grid grid-cols-5 gap-1 mt-2">
                        {chartData5.map((data) => (
                            <div key={data.columnIndex} className="relative flex flex-col items-center">
                                <ChartContainer
                                    chartData={data}
                                    target={1000} // Target value fixed for this row
                                    color="#EC4899" // Pink for Specific Air Consumption row
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <div>
            <BodyContent />
        </div>
    );
};

export default App;
