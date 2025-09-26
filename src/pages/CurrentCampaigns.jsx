import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import imgcom1 from "../assets/p.png";
import imgcom2 from "../assets/1.jpeg";
import imgcom3 from "../assets/0.jpeg";
import imgcom4 from "../assets/4.jpeg";
import imgcom5 from "../assets/2.jpeg";

const CurrentCampaigns= () => {
  const { i18n, t } = useTranslation();

  return (
    <div className="pt-20"> 
    <div className="max-w-6xl mx-auto p-4 space-y-16 pt-16">
   
          <div
            key={camp.id}
            className={`flex flex-col md:flex-row items-center gap-6 ${
              isEven ? '' : 'md:flex-row-reverse'
            }`}
          >
            <img
              src={imgcom1}
              alt={title1}
              className="w-40 h-40 object-cover rounded-full shadow-lg"
            />
            <div className="flex flex-col max-w-xl text-center md:text-left">
             <h3 className="text-2xl font-bold mb-3 text-center">
                {i18n.language === 'ar' ? camp.title_ar : camp.title_en}
              </h3>
              <p className="text-gray-700 whitespace-pre-line">
                {i18n.language === 'ar' ? camp.description_ar : camp.description_en}
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link  to="/donate"
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-6 rounded-full transition text-center">
                {t("donate")} </Link>

              </div>
            </div>
          </div>
 
    </div>
    </div>
  );
};

export default CurrentCampaigns;


   
