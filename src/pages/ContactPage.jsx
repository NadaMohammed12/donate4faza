import axios from "axios";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const ContactPage = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) newErrors.full_name = t("nameRequired");
    if (!formData.email.trim()) {
      newErrors.email = t("emailRequired");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = t("emailInvalid");
    }
    if (!formData.subject.trim()) newErrors.subject = t("subjectRequired");
    if (!formData.message.trim()) newErrors.message = t("messageRequired");
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      axios
        .post("http://localhost:8010/api/contact", formData) // ✅ لاحظ /api/contact
        .then((res) => {
          setShowSuccess(true);
          setFormData({
            full_name: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.error("فشل الإرسال:", err);
          alert("فشل الإرسال، حاول مرة أخرى.");
        });
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-50 relative">
      <div className="max-w-2xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-6">
          {t("titleC")}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded shadow"
        >
          <div>
            <label className="block mb-1 font-medium">{t("name")}</label>
            <input
              type="text"
              name="full_name"
              placeholder={t("namePlaceholder")}
              value={formData.full_name}
              onChange={handleChange}
              className={`w-full p-3 border rounded ${
                errors.full_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.full_name && (
              <p className="text-red-500 text-sm mt-1">{errors.full_name}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">{t("email")}</label>
            <input
              type="email"
              name="email"
              placeholder={t("emailPlaceholder")}
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border rounded ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">{t("subject")}</label>
            <input
              type="text"
              name="subject"
              placeholder={t("subjectPlaceholder")}
              value={formData.subject}
              onChange={handleChange}
              className={`w-full p-3 border rounded ${
                errors.subject ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.subject && (
              <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
            )}
          </div>

          <div>
            <label className="block mb-1 font-medium">{t("message")}</label>
            <textarea
              name="message"
              rows="5"
              placeholder={t("messagePlaceholder")}
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 border rounded ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded shadow w-full"
          >
            {t("send")}
          </button>
        </form>
      </div>

      {showSuccess && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md text-center">
            <div className="text-green-600 text-5xl mb-4">✔️</div>
            <h2 className="text-xl font-bold mb-2">{t("messageSentTitle")}</h2>
            <p className="text-gray-700 mb-4">{t("messageSentText")}</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
            >
              {t("ok")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;
