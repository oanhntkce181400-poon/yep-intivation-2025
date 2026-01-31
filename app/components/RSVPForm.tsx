"use client";

import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function RSVPForm() {
  const { t, darkMode } = useApp();
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    attendance: "",
    guests: "",
    dietary: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const attendanceText = formData.attendance === "yes" ? "Có" : formData.attendance === "no" ? "Không" : "Chưa chắc";
    const guestsText = formData.guests === "alone" ? "1 người" : formData.guests === "plus1" ? "2 người" : formData.guests === "plus2" ? "3 người" : formData.guests === "plus3" ? "4+ người" : "";
    
    const submitData = {
      name: formData.name,
      attendance: attendanceText,
      guests: guestsText,
      unit: formData.dietary,
      message: formData.message,
      timestamp: new Date().toLocaleString('vi-VN'),
    };
    
    console.log('📝 Đang gửi dữ liệu:', submitData);
    
    try {
      // Gọi API route thay vì trực tiếp đến Google Script
      const response = await fetch('/api/submit-rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        console.log("✅ Đã gửi dữ liệu lên Google Sheets");
        setSubmitted(true);
        
        // Hiển thị thông báo 5 giây rồi reset form
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: "",
            message: "",
            attendance: "",
            guests: "",
            dietary: "",
          });
        }, 5000);
      } else {
        console.error('❌ Server trả về lỗi:', result.error);
        alert(t.errorMessage || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
      }
      
    } catch (error) {
      console.error('❌ Lỗi khi gửi:', error);
      alert(t.errorMessage || 'Có lỗi xảy ra. Vui lòng thử lại sau.');
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto px-4 relative">
      <h2 className="font-script text-4xl md:text-5xl text-center text-gray-700 dark:text-gray-200 mb-4 animate-fadeInDown">
        {t.rsvpTitle}
      </h2>
      <p className="text-center font-sans text-gray-600 dark:text-gray-400 mb-8 text-sm md:text-base animate-fadeIn">
        {t.rsvpSubtitle}
      </p>
      
      <p className="text-center font-sans text-gray-600 dark:text-gray-400 mb-8 leading-relaxed text-sm md:text-base px-4 animate-fadeInUp">
        {t.rsvpDescription}
      </p>

      {submitted ? (
        <div className="bg-green-50 dark:bg-green-900/30 border-2 border-green-500 dark:border-green-400 rounded-lg p-8 text-center animate-fadeIn backdrop-blur-sm">
          <h3 className="font-serif text-2xl text-green-800 dark:text-green-300 mb-2">
            {t.successTitle}
          </h3>
          <p className="text-green-700 dark:text-green-400 font-sans">
            {t.successMessage}
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="animate-fadeInUp animation-delay-200">
            <input
              type="text"
              placeholder={t.namePlaceholder}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 font-sans text-sm md:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:shadow-lg"
            />
          </div>

          <div className="animate-fadeInUp animation-delay-400">
            <textarea
              placeholder={t.messagePlaceholder}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-3xl focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 font-sans resize-none text-sm md:text-base bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:shadow-lg"
            />
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}>
            <select
              value={formData.attendance}
              onChange={(e) =>
                setFormData({ ...formData, attendance: e.target.value })
              }
              required
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 font-sans appearance-none bg-white dark:bg-gray-800 text-sm md:text-base text-gray-900 dark:text-gray-100 hover:shadow-lg"
              style={{
                backgroundImage:
                  darkMode
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ccc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")"
                    : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
            >
              <option value="">{t.attendanceLabel}</option>
              <option value="yes">{t.attendanceYes}</option>
              <option value="no">{t.attendanceNo}</option>
              <option value="maybe">{t.attendanceMaybe}</option>
            </select>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}>
            <select
              value={formData.guests}
              onChange={(e) =>
                setFormData({ ...formData, guests: e.target.value })
              }
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 font-sans appearance-none bg-white dark:bg-gray-800 text-sm md:text-base text-gray-900 dark:text-gray-100 hover:shadow-lg"
              style={{
                backgroundImage:
                  darkMode
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ccc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")"
                    : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
            >
              <option value="">{t.guestsLabel}</option>
              <option value="alone">{t.guestsAlone}</option>
              <option value="plus1">{t.guestsPlus1}</option>
              <option value="plus2">{t.guestsPlus2}</option>
              <option value="plus3">{t.guestsPlus3}</option>
            </select>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "1s", animationFillMode: "backwards" }}>
            <select
              value={formData.dietary}
              onChange={(e) =>
                setFormData({ ...formData, dietary: e.target.value })
              }
              required
              className="w-full px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 font-sans appearance-none bg-white dark:bg-gray-800 text-sm md:text-base text-gray-900 dark:text-gray-100 hover:shadow-lg"
              style={{
                backgroundImage:
                  darkMode
                    ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ccc' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")"
                    : "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23666' d='M6 9L1 4h10z'/%3E%3C/svg%3E\")",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 1rem center",
              }}
            >
              <option value="">{t.unitLabel}</option>
              <option value="FPT Software">{t.unitSoftware}</option>
              <option value="FPTU - Lớp Tiếng Nhật">{t.unitFPTU}</option>
              <option value="FPTU - Lớp BrSE">{t.unitFIC}</option>
              <option value="Khác">{t.unitOther}</option>
            </select>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "1.2s", animationFillMode: "backwards" }}>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white py-3 rounded-full font-sans font-medium transition-all duration-300 uppercase tracking-wider text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t.submitButton}
            </button>
          </div>

          <div className="animate-fadeInUp" style={{ animationDelay: "1.4s", animationFillMode: "backwards" }}>
            <button
              type="button"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-full font-sans font-medium transition-all duration-300 uppercase tracking-wider text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105"
              onClick={() => {
                const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                  window.location.href
                )}&quote=${encodeURIComponent(t.shareMessage)}`;
                window.open(url, "_blank");
              }}
            >
              {t.shareButton}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
