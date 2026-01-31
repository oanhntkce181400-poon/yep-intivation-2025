"use client";

import { useEffect, useState } from "react";

export default function RegistrationStats() {
  const [stats, setStats] = useState({
    total: 0,
    confirmed: 0,
    pending: 0,
  });

  useEffect(() => {
    // Đọc dữ liệu từ localStorage
    const loadStats = () => {
      try {
        const savedData = localStorage.getItem('yep_registrations');
        if (savedData) {
          const registrations = JSON.parse(savedData);
          const total = registrations.length;
          const confirmed = registrations.filter((r: any) => r['Tham dự'] === 'Có').length;
          const pending = registrations.filter((r: any) => r['Tham dự'] === 'Chưa chắc').length;
          
          setStats({ total, confirmed, pending });
        }
      } catch (error) {
        console.log('Error loading stats:', error);
      }
    };

    loadStats();
    
    // Cập nhật mỗi 5 giây để đồng bộ
    const interval = setInterval(loadStats, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
      <h3 className="font-serif text-2xl md:text-3xl text-center text-gray-800 mb-6">
        📊 Thống Kê Đăng Ký
      </h3>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
            {stats.total}
          </div>
          <div className="text-xs md:text-sm text-gray-600">
            Tổng số
          </div>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
            {stats.confirmed}
          </div>
          <div className="text-xs md:text-sm text-gray-600">
            Xác nhận
          </div>
        </div>
        
        <div className="text-center p-4 bg-yellow-50 rounded-lg">
          <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">
            {stats.pending}
          </div>
          <div className="text-xs md:text-sm text-gray-600">
            Chưa chắc
          </div>
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500 italic">
          Dữ liệu được cập nhật tự động
        </p>
      </div>
    </div>
  );
}
