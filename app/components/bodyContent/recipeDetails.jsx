import React from "react";

const RecipeDetails = () => {
  return (
    <div className="shadow-xl items-center justify-center hover:shadow-2xl border-gray-50 border-[1px] rounded-md bg-[#ffffff] p-6">
      <div className="flex flex-col items-center">
        <p className="font-bold text-xl mb-4">Recipe Details</p>
        <div className="grid grid-cols-3 gap-3 w-full max-w-md p-4 rounded-md">
          <p className="font-semibold text-left text-[12px]">RECIPE NAME</p>
          <p className="text-center">:</p>
          <p className="text-left text-[12px]">CT16372421 ASC</p>

          <p className="font-semibold text-left text-[12px]">SAP NAME</p>
          <p className="text-center">:</p>
          <p className="text-left text-[12px]">L&T</p>

          <p className="font-semibold text-left text-[12px]">FABRIC CODE</p>
          <p className="text-center">:</p>
          <p className="text-left text-[12px]">DE00134</p>

          <p className="font-semibold text-left text-[12px]">CUTTING WIDTH</p>
          <p className="text-center">:</p>
          <p className="text-left text-[12px]">
            10
            <span className="text-gray-500 text-[10px] text-center items-center px-1">
              X
            </span>
            15
          </p>

          <p className="font-semibold text-left text-[12px]">CUTTING ANGLE</p>
          <p className="text-center">:</p>
          <p className="text-left text-[12px]">145°</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
