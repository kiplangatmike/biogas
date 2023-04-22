// "use client";
import { useState, useEffect } from "react";

import LineChart from "./Admin/LineChart";

const LChart = () => {
  const [currentValue, setCurrentValue] = useState(50);
  const [optimumValue, setOptimumValue] = useState(65);
  const [history, setHistory] = useState([]);


  useEffect(() => {
    const intervalId = setInterval(() => {
      const newCurrentValue = Math.round(
        Math.random() * (optimumValue * 2 - 10) + 10
      );
      setCurrentValue(newCurrentValue);
      setHistory((prev) => [...prev, newCurrentValue]);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [optimumValue]);

  return (
    <div className="w-[48vw] rounded-lg">
       <h1 className="w-full bg-black mx-auto p-3 my-10 text-xl font-semibold capitalize ">
        Line Chart
      </h1>
      <div className="flex flex-col w-full">
        {/* <div className="bg-white shadow-md p-4 flex items-center justify-between">
          <div className="flex-1">
            <div className="text-gray-400 font-medium">Current Value</div>
            <div className="text-3xl font-bold text-black">{currentValue}</div>
          </div>
          <div className="flex-1">
            <div className="text-gray-400 font-medium">Optimum Value</div>
            <div className="text-3xl font-bold text-black">{optimumValue}</div>
          </div>
        </div> */}
        <div className="bg-white shadow-md p-4">
          <LineChart data={history} optimum={optimumValue} />
        </div>
      </div>
    </div>
  );
};

export default LChart;