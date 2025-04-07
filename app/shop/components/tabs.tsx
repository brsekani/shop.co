import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Product Details");
  const tabs = ["Product Details", "Rating & Reviews", "FAQs"];

  return (
    <div>
      {/* extras */}
      <div>
        <div className="flex items-center lg:justify-evenly justify-between border-b border-gray-300">
          {tabs.map((tab) => (
            <h4
              key={tab}
              className={`text-[16px] lg:text-[20px] leading-[22px] font-medium cursor-pointer transition-colors duration-300 ${
                activeTab === tab
                  ? "text-black font-semibold border-b-2 border-black"
                  : "text-[#00000099] font-normal"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
