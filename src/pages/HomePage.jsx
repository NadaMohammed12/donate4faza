import React from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import axios from "axios";
import pimage from "../assets/p.png";
import { Link } from "react-router-dom";
// استيراد الصور المحلية
import banner1 from "../assets/slide1.png";
import banner2 from "../assets/slide2.png";
import banner3 from "../assets/slide3.png";
import banner4 from "../assets/slide4.png";
import imgcom1 from "../assets/p.png";
import imgcom2 from "../assets/1.jpeg";
import imgcom3 from "../assets/0.jpeg";
import imgcom4 from "../assets/4.jpeg";
import imgcom5 from "../assets/2.jpeg";





const Home = () => {
  const { t } = useTranslation(); // الترجمة
  const { i18n } = useTranslation(); 
  const [campaigns, setCampaigns] = useState([]);
  const [totalDonations, setTotalDonations] = useState(0);



  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
     pauseOnHover: false,
  };

  // بيانات السلايدر
  const images = [
    {
      image: banner1,
      title: t("slide3"),
      description: t("slide3Description")
    },
    {
      image: banner2,
     title: t("slide2"),
     description: t("slide2Description")
    },
    {
      image: banner3,
      title: t("slide1"),
      description: t("slide1Description")
    },
    {
      image: banner4,
      title: t("slide4"),
      description: t("slide4Description")
    },

  ];

  

  useEffect(() => {
    const fetchTotalDonations = async () => {
      try {
        const response = await axios.get("http://localhost:8010/api/total-donations");
        const total = parseFloat(response.data.total) || 0;
        setTotalDonations(total);
      } catch (error) {
        console.error("خطأ في جلب المجموع:", error);
        setTotalDonations(0); // fallback
      }
    };

    fetchTotalDonations();
  }, []);



  return (
    <>
    <div className="pt-30">  
      <div className="w-full">
        {/* سلايدر الصور */}
        <div className="relative">
          <Slider {...sliderSettings}>
            {images.map((slide, index) => (
              <div key={index} className="relative h-[70vh]">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
                  <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-white text-lg mb-4">{slide.description}</p>
                  <a
                    href="/donate"
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-full text-lg shadow-md transition"
                  >
                    {t("donate")}
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* عدّاد التبرعات */}
       
<div className="bg-white py-10 text-center">
        <h3 className="text-xl text-gray-700 mb-2">{t("amountRaised")}</h3>
        <div className="text-5xl font-bold text-green-600">
          <CountUp
            end={totalDonations}
            duration={4}
            separator=","
            suffix=" $"
          />
        </div>
      </div>
        {/* قسم لماذا تتبرع */}
        <section className="py-12 px-4 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">{t("whyDonate")}</h2>
          <p className="text-gray-700 leading-relaxed">{t("whyText")}</p>
        </section>

        {/* بطاقات الحملات */}
          <h2 className="text-2xl font-semibold mb-4">{t("CurrentCampaigns")}</h2>
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
 
    <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom}
        alt={t("title1")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title1")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
         <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom1}
        alt={t("title1")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title1")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
    </div>   <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom2}
        alt={t("title2")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title2")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
    </div>   <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom3}
        alt={t("title3")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title3")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
         <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom4}
        alt={t("title4")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title4")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
    </div>   <div className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
      <img
        src={imgcom5}
        alt={t("title5")}
        className="w-full aspect-square object-cover rounded-md"
      />
      <h3 className="mt-4 text-lg font-bold text-center">
        {t("title5")}
      </h3>
      <p className="mt-2 text-gray-600 text-sm text-center">
      </p>
      <div className="mt-4 flex gap-4">
       <Link
  to="/donate"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("donate")}
</Link>

<Link
  to="/CurrentCampaigns"
  className="text-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-full transition"
>
  {t("aboutC")}
</Link>
      </div>
    </div>
    </div>
    </div>
  )
</div>
  
   <div><hr /><br /><br /><br /><br /></div>   
    
      </div>
    </div>
    </>
  );
};

export default Home;



























