import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const footer=()=>{
     const { t } = useTranslation();
    return(
        <div>
         {/* footer */}
   <footer className="bg-gray-100 mt-10 border-t border-gray-300 py-6 text-center text-sm text-gray-600 ">
  <p className="mb-2">
    © {new Date().getFullYear()} {t("rights")}.<br/> {t("madeBy")}
  </p>
  
  <div className="flex justify-center gap-4 mt-2 text-gray-700 text-lg">
    <p className="text-lg font-semibold text-gray-800 mb-3">
  {t("ContactBy")}</p>
     {/* Gmail */}
    <a
      href="mailto:youremail@gmail.com" // غيّر البريد حسب حاجتك
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Email"
      className="hover:text-red-600 transition"
    >
      <i className="fas fa-envelope"></i>
    </a>
    <a
      href="https://wa.me/972599000000" // عدّل الرقم حسب الحاجة
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="hover:text-green-600 transition"
    >
      <i className="fab fa-whatsapp"></i>
    </a>

    <a
      href="https://facebook.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="hover:text-blue-600 transition"
    >
      <i className="fab fa-facebook"></i>
    </a>

    <a
      href="https://instagram.com/yourpage"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="hover:text-pink-500 transition"
    >
      <i className="fab fa-instagram"></i>
    </a>
  </div>
</footer>

</div>
        
        
    )}

export default footer;