import React from "react";

const ProgressCard = ({ label = "Overall Progress", progress = 78 }) => {
  return (
    <div className="bg-[rgb(38,38,38)] text-white p-6 mt-7 rounded-3xl w-full">
      <h2 className="text-base text-neutral-400">{label}</h2>
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-4xl font-bold">{progress}%</h1>
        <p className="text-green-400 text-sm">+18% ↑</p>
      </div>

      <div className="w-full h-3 bg-neutral-700 rounded-full mt-4 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressCard;
