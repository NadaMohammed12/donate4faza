import { useTranslation } from "react-i18next";
import React from "react";
import CampaignCard from "./components/CampaignCard";
import aboutimg from "../assets/about.jpeg";



const AboutPage = () => {
  const { t } = useTranslation(); 
  return (
    <>
    <div className="pt-15">
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
         <h2 className="text-4xl font-extrabold text-green-700 mb-6">
          {t("title")}
        </h2>

        {/* صورة علوية */}
        <div className="mb-10">
          <img
            src= {aboutimg}
            alt={t("imageAlt")}
            className="w-full h-64 object-cover rounded-xl shadow-md"
          />
        </div>

       

        <p className="text-lg text-gray-700 leading-relaxed">
          {t("paragraph1")}
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          {t("paragraph2")}
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mt-6">
          {t("paragraph3")}
        </p>

        <div className="mt-10">
          <a
            href="/donate"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </div>
   
  

    </div>
    </>
  );
};

export default AboutPage;
