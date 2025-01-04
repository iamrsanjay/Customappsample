import React from "react";

const plans = [{ plan: "100", complete: "76" },
               { plan: "100", complete: "67" },
               { plan: "100", complete: "87" },
               { plan: "100", complete: "65" },
               { plan: "100", complete: "76" }];
const operator = [
  { plan: "Arivu", id: "1001" },
  { plan: "Ajiith", id: "1002" },
  { plan: "Harish", id: "1003" },
  { plan: "Sanjay", id: "1004" },
  { plan: "Vignesh", id: "1005" },
];
const target = [
  { complete: "76" },
  { complete: "67" },
  { complete: "87" },
  { complete: "65" },
  { complete: "76" },
];
const fabMeters = [{ complete: "45 Meters" }];
const machine = [{ complete: "CNC Machine" }];

const PlanComponent = () => {
  return (
    <div className="container mx-auto p-4 shadow-xl hover:shadow-2xl border-gray-50 border-[1px] rounded-md bg-[#ffffff]">
      {/* 1st half start */}
      <div className="flex flex-col md:flex-row justify-center">
        {/* Plan Table */}
        <div className="flex-1 p-1 w-full md:w-[30%]">
          {/* Table Headers */}
          <div className="flex justify-center bg-[#f5e4d7] gap-2 p-4">
            <div className="font-bold text-[10px] text-center w-full">Plan</div>
            <div className="font-bold text-[10px] text-center w-full">
              Complete
            </div>
          </div>

          {/* Table Rows */}
          {plans.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-2 mt-1 hover:bg-[#F9F1F0] rounded-md"
            >
              <div className="text-[10px] font-semibold text-center w-full sm:gap-6 sm:mr-3 2xl:gap-0 2xl:mr-0">
                {item.plan}
              </div>
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}
              </div>
            </div>
          ))}
        </div>

        {/* Operator Name */}
        <div className="flex-1 py-1 w-full md:w-[80%]">
          {/* Table Headers */}
          <div className="flex justify-center bg-[#f5e4d7] p-4">
            <div className="font-bold text-[10px] text-center w-full">ID</div>
            <div className="font-bold text-[10px] text-center w-full sm:ml-5 whitespace-nowrap">
              Operator Name
            </div>
          </div>

          {/* Table Rows */}
          {operator.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-2 mt-1 hover:bg-[#F9F1F0] rounded-md"
            >
              <div className="text-[10px] font-semibold text-center w-full sm:-ml-5 2xl:-ml-0">
                {item.id}
              </div>
              <div className="text-[10px] font-semibold text-center w-full truncate">
                {item.plan}
              </div>
            </div>
          ))}
        </div>

        {/* Target Achieved */}
        <div className="flex-1 p-1 w-full md:w-[30%]">
          <div className="flex justify-center bg-[#f5e4d7] sm:p-2 xl:p-4">
            <div className="font-bold text-[10px] text-center w-full sm:text-wrap xl:text-nowrap">
              Target Achieved
            </div>
          </div>

          {/* Table Rows */}
          {target.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-2 mt-1 hover:bg-[#F9F1F0] rounded-md"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}%
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 2nd half start */}
      <div className="flex flex-col md:flex-row justify-center">
        {/* Total Fab Meters */}
        <div className="flex-1 p-4">
          <div className="flex justify-center bg-[#f5e4d7] text-nowrap p-4">
            <div className="font-bold text-[10px] text-center w-full">
              Total Fab Meters
            </div>
          </div>

          {/* Table Rows */}
          {fabMeters.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-2 mt-1 hover:bg-[#F9F1F0] rounded-md"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}
              </div>
            </div>
          ))}
        </div>

        {/* Machine */}
        <div className="flex-1 p-4">
          <div className="flex justify-center bg-[#f5e4d7] p-4">
            <div className="font-bold text-[10px] text-center w-full">
              Machine
            </div>
          </div>

          {/* Table Rows */}
          {machine.map((item, index) => (
            <div
              key={index}
              className="flex justify-center p-2 mt-1 hover:bg-[#F9F1F0] rounded-md"
            >
              <div className="text-[10px] font-semibold text-center w-full">
                {item.complete}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComponent;
