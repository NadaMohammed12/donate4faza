import React from "react";


const CampaignCard = ({ title, description, image, donateUrl }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 flex-1">{description}</p>
        <a
          href={donateUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
        >
          تبرّع الآن
        </a>
      </div>
    </div>
  );
};

export default CampaignCard;
