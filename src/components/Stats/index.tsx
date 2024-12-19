import React from "react";
interface StatCard{
    title:string;
    value:string;
    change:string;
    isIncrease:boolean;
}
// Reusable Card Component
const StatCard:React.FC<StatCard> = ({ title, value, change, isIncrease }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-start">
      <div className="text-sm font-semibold text-gray-500">{title}</div>
      <div className="text-2xl font-bold text-gray-800 mt-2">{value}</div>
      <div
        className={`text-sm mt-1 gap-2 items-center  ${
          isIncrease ? "text-green-500" : "text-red-500"
        } flex items-center`}
      >
        {isIncrease ? (
            <img src="/increase.svg" className="h-6 w-6" alt="" />
        ) : (
            <img src="/decrease.svg" className="h-6 w-6" alt="" />
        )}
        {change} {isIncrease ? "increase" : "decrease"}
      </div>
    </div>
  );
};

// Main "At a Glance" Component
const AtAGlance = () => {
  const stats = [
    { title: "Consultations", value: "24", change: "15%", isIncrease: true },
    { title: "Orders Placed", value: "12", change: "15%", isIncrease: false },
    { title: "Conversion", value: "50%", change: "15%", isIncrease: false },
    { title: "Total Sales Value", value: "$2,400", change: "15%", isIncrease: true },
    { title: "Avg Order Value", value: "$240", change: "15%", isIncrease: true },
    { title: "Commission Paid", value: "$240", change: "15%", isIncrease: true },
  ];

  return (
    <div className="w-full bg-gray-50 ">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">At a Glance</h1>
        {/* <div className="bg-gray-200 text-gray-600 px-4 py-2 rounded-lg cursor-pointer">
          7 days ▼
        </div> */}
         <div className="bg-gray-200 text-gray-600 px-1 rounded-lg cursor-pointer">

           <select className="bg-transparent px-4 py-2 rounded-lg cursor-pointer">
          <option value="7">7 days</option>
          <option value="17">15 days</option>
          <option value="30">30 days</option>
          <option value="45">45 days</option>
        </select>
         </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            isIncrease={stat.isIncrease}
          />
        ))}
      </div>
    </div>
  );
};

export default AtAGlance;
