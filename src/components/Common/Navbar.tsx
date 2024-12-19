"use client";
import { ChartPie,TicketPercent,MessageCircleDashed } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {

  const [activeTab, setActiveTab] = useState<string>("Summary");

  const tabs = [
    { name: "Summary", icon: <ChartPie/>},
    { name: "Sales", icon: <TicketPercent/> },
    { name: "Chats", icon: <MessageCircleDashed/> },
  ];

  return (
    <div className="flex space-x-4 p-4">
      {tabs.map((tab) => (
        <button
          key={tab.name}
          className={`px-4 py-2 rounded-lg flex items-center space-x-2 ${
            activeTab === tab.name
              ? "bg-green-100 text-green-600 border border-green-400"
              : "bg-gray-100 text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab(tab.name)}
        >
          <span>{tab.icon}</span>
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

export default Navbar
