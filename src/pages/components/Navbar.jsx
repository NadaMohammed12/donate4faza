import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleLang = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr"; // تغيير اتجاه الصفحة
  };

  const navItems = [
    { to: "/", label: t("home") },
    { to: "/about", label: t("about") },
    { to: "/CurrentCampaigns", label: t("CurrentCampaigns") },
    { to: "/donate", label: t("donate") },
    { to: "/contact", label: t("contact") },
 

  ];

  return (
    <nav className="bg-white shadow-md px-4 sm:px-6 py-4 fixed top-0 left-0 w-full z-50 bg-white shadow">
      <div className="flex items-center justify-between">
        {/* شعار الموقع */}
        <h1 className="text-2xl font-bold text-green-600">4Gaza</h1>

       

        {/* زر الهامبرغر للموبايل */}
        <button
          className="sm:hidden text-gray-600 text-2xl  "
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* روابط للشاشات الكبيرة */}
        <ul className="hidden sm:flex space-x-6 rtl:space-x-reverse">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="text-gray-700 hover:text-green-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
           {/* زر اللغة */}
        <button onClick={toggleLang}
          className="text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded mx-2">
          {i18n.language === "ar" ? "En" : "Ar"}
        </button>
        </ul>
        
      </div>
      {/* قائمة منسدلة في الجوال */}
      {isOpen && (
        <ul className="sm:hidden mt-4 space-y-2">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block text-gray-700 hover:text-green-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
     
        </ul>
   
      )}
      {/* زر اللغة */}
        <button onClick={toggleLang}
          className="sm:hidden text-sm bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded mx-2">
          {i18n.language === "ar" ? "En" : "Ar"}
        </button>
        {/* زر تبرع الآن الثابت في أسفل الشاشة للموبايل فقط */}
       
<div className="sm:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[90%]">
  <Link
    to="/donate"
    className="block bg-green-600 text-white text-center py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-green-700 transition"
  >
    {t("donate")}
  </Link>
</div>

      
    </nav>
  );
}

export default Navbar;

