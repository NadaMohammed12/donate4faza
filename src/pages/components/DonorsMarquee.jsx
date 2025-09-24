import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";

const DonorsMarquee = () => {
  const [donors, setDonors] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    axios.get("http://localhost:8010/api/latest-donors")
      .then((res) => {
        if (Array.isArray(res.data)) {
          setDonors(res.data);
        } else {
          console.error("البيانات غير متوقعة:", res.data);
        }
      })
      .catch((err) => console.error("خطأ في جلب المتبرعين:", err));
  }, []);

  useEffect(() => {
    if (donors.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        (prevIndex + 1) % donors.length
      );
    }, 10000); // كل 10 ثواني

    return () => clearInterval(interval);
  }, [donors]);

  const currentDonor = donors[currentIndex];

  return (
    <div className="fixed top-[70px] justify-center items-center w-full z-10 bg-white py-2 mb-0">
      <div className="relative w-full max-w-2xl h-[80px] flex justify-center items-center">
        <AnimatePresence mode="wait">
          {currentDonor && (
            <motion.div
              key={currentDonor.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
              className="absolute justify-center text-l sm:text-2xl md:text-2xl font-bold text-center bg-white/90 p-4 rounded shadow-md w-full"
            >
              <span className="mx-4 text-green-600">
                {t("start")}{" "}
                <strong>{currentDonor.full_name}</strong> {t("from")}{" "}
                <strong>{currentDonor.country} {currentDonor.amount} $</strong>
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DonorsMarquee;
