import React from "react";
import InsuranceCard from "./InsuranceCard";
import InsuranceData from "../../data/InsuranceData"

const Insurance: React.FC = () => {

 
  return (
    <div className="container mx-auto px-4 py-10 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">
        Explore Our Insurance Options
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {InsuranceData.map((card) => (
          <InsuranceCard
            key={card.id}
            title={card.title}
            description={card.description}
            imgSrc={card.imgSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Insurance;
