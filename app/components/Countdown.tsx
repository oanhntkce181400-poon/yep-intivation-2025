"use client";

import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown({ targetDate }: { targetDate: string }) {
  const { t } = useApp();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!mounted) {
    return (
      <div className="text-center py-8">
        <h2 className="font-script text-5xl md:text-6xl text-gray-700 dark:text-gray-200 mb-8">
          {t.countdownTitle}
        </h2>
        <div className="flex justify-center gap-4 md:gap-8">
          {[0, 0, 0, 0].map((_, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 mb-2">
                00
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="text-center py-8 animate-fadeIn">
      <h2 className="font-script text-5xl md:text-6xl text-gray-700 dark:text-gray-200 mb-8">
        {t.countdownTitle}
      </h2>
      <div className="flex justify-center gap-4 md:gap-8">
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 mb-2 font-bold">
            {String(timeLeft.days).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-sans text-gray-600 dark:text-gray-300 uppercase tracking-wider">
            {t.countdownDays}
          </div>
        </div>
        <div className="text-4xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 self-start animate-pulse">
          :
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 mb-2 font-bold">
            {String(timeLeft.hours).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-sans text-gray-600 dark:text-gray-300 uppercase tracking-wider">
            {t.countdownHours}
          </div>
        </div>
        <div className="text-4xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 self-start animate-pulse">
          :
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 mb-2 font-bold">
            {String(timeLeft.minutes).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-sans text-gray-600 dark:text-gray-300 uppercase tracking-wider">
            {t.countdownMinutes}
          </div>
        </div>
        <div className="text-4xl md:text-6xl font-serif text-gray-800 dark:text-gray-100 self-start animate-pulse">
          :
        </div>
        <div className="text-center transform hover:scale-110 transition-transform duration-300">
          <div className="text-4xl md:text-6xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 dark:from-orange-400 dark:to-red-500 mb-2 font-bold">
            {String(timeLeft.seconds).padStart(2, "0")}
          </div>
          <div className="text-sm md:text-base font-sans text-gray-600 dark:text-gray-300 uppercase tracking-wider">
            {t.countdownSeconds}
          </div>
        </div>
      </div>
    </div>
  );
}
