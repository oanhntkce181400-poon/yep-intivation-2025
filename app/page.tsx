"use client";

import Countdown from "./components/Countdown";
import RSVPForm from "./components/RSVPForm";
import Header from "./components/Header";
import Fireworks from "./components/Fireworks";
import { useEffect, useState } from "react";
import { useApp } from "./context/AppContext";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useApp();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Fireworks />
      <Header />
      
      {/* Video Banner */}
      <div className="relative w-full overflow-hidden mt-16">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[350px] md:h-[450px] lg:h-[550px] object-cover"
        >
          <source src="/navbar.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        {/* Hero Section */}
        <section
          className={`min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-20 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-center max-w-4xl">
            {/* Main Title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-gray-800 dark:text-gray-100 mb-6 md:mb-8 tracking-wider animate-fadeInUp">
              {t.heroTitle}
            </h1>

            {/* Year */}
            <div className="mb-8 md:mb-12 animate-fadeInUp animation-delay-200">
              <p className="font-sans text-2xl md:text-3xl text-gray-600 dark:text-gray-300 tracking-[0.3em]">
                {t.heroYear}
              </p>
            </div>

            {/* Decorative Line */}
            <div className="w-32 md:w-48 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto mb-8 md:mb-12 animate-expandWidth"></div>

            {/* Event Details */}
            <div className="space-y-4 md:space-y-6 animate-fadeInUp animation-delay-400">
              <p className="font-sans text-xl md:text-2xl text-gray-800 dark:text-gray-100 font-semibold">
                {t.heroOrganization}
              </p>
              <p className="font-sans text-lg md:text-xl text-gray-700 dark:text-gray-300">
                {t.heroSubtitle}
              </p>
              <p className="font-script text-4xl md:text-6xl text-gray-700 dark:text-gray-200 my-6 md:my-8">
                {t.heroCelebrate}
              </p>
              <p className="font-sans text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-4">
                {t.heroDescription}
              </p>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 md:mt-20 animate-bounce">
              <svg
                className="w-6 h-6 md:w-8 md:h-8 mx-auto text-gray-400 dark:text-gray-500"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </div>
        </section>

        {/* Date Section */}
        <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-serif text-3xl md:text-4xl text-gray-800 dark:text-gray-100 mb-6 md:mb-8">
                {t.dateLocationTitle}
              </h2>
              <div className="w-24 md:w-32 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
              {/* Date Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-serif text-gray-800 dark:text-gray-100 mb-4">
                    06
                  </div>
                  <div className="text-xl md:text-2xl font-sans text-gray-600 dark:text-gray-300 mb-2 uppercase tracking-wider">
                    {t.dateMonth}
                  </div>
                  <div className="text-3xl md:text-4xl font-serif text-gray-700 dark:text-gray-200 mb-4">
                    2026
                  </div>
                  <div className="text-sm md:text-base font-sans text-gray-500 dark:text-gray-400 italic">
                    {t.dateDay}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-300 dark:border-gray-700">
                    <p className="text-lg md:text-xl font-sans text-gray-700 dark:text-gray-200">
                      {t.dateTime}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      {t.dateCheckin}
                    </p>
                  </div>
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-lg border-2 border-gray-200 dark:border-gray-700 hover:border-orange-500 dark:hover:border-orange-400 transition-all duration-300 hover:shadow-lg">
                <div className="text-center">
                  <h3 className="font-serif text-2xl md:text-3xl text-gray-800 dark:text-gray-100 mb-4">
                    {t.locationTitle}
                  </h3>
                  <p className="font-sans text-base md:text-lg text-gray-700 dark:text-gray-200 mb-3 font-semibold">
                    {t.locationName}
                  </p>
                  <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                    {t.locationAddress1}
                    <br />
                    {t.locationAddress2}
                    <br />
                    {t.locationAddress3}
                  </p>
                  <a
                    href="https://maps.app.goo.gl/sLMXLp6SsU31p1f36"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 px-6 py-2 border-2 border-gray-700 dark:border-gray-300 text-gray-700 dark:text-gray-300 rounded-full hover:bg-orange-600 hover:border-orange-600 hover:text-white transition-all duration-300 font-sans text-sm md:text-base"
                  >
                    {t.viewMap}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

      {/* Countdown Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <Countdown targetDate="2026-02-06T19:00:00" />
        </div>
      </section>

        {/* Dress Code Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-gray-800 dark:text-gray-100 mb-6 md:mb-8">
              {t.dressCodeTitle}
            </h2>
            <div className="w-24 md:w-32 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto mb-8 md:mb-12"></div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
              <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-3">
                  {t.dressCode1Title}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {t.dressCode1Desc}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-3">
                  {t.dressCode2Title}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {t.dressCode2Desc}
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-700 p-6 md:p-8 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <h3 className="font-serif text-xl md:text-2xl text-gray-800 dark:text-gray-100 mb-3">
                  {t.dressCode3Title}
                </h3>
                <p className="font-sans text-sm md:text-base text-gray-600 dark:text-gray-300">
                  {t.dressCode3Desc}
                </p>
              </div>
            </div>

            <p className="font-script text-3xl md:text-4xl text-gray-700 dark:text-gray-200 italic">
              {t.dressCodeMessage}
            </p>
          </div>
        </section>

        {/* RSVP Section */}
        <section className="py-16 md:py-24 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-4xl mx-auto">
            <RSVPForm />
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-center text-gray-800 dark:text-gray-100 mb-6 md:mb-8">
              {t.mapTitle}
            </h2>
            <div className="w-24 md:w-32 h-0.5 bg-gray-400 dark:bg-gray-600 mx-auto mb-8 md:mb-12"></div>
            
            <div className="rounded-lg overflow-hidden shadow-xl border-4 border-white dark:border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.0550744593835!2d105.76875737583454!3d10.034350490059622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a0880f08006b39%3A0x9a745510330faf4!2zUXXDoW4gWsO0IEThu6N0IEPhuqFu!5e0!3m2!1svi!2s!4v1738310000000!5m2!1svi!2s&markers=color:red%7Clabel:🍻%7C10.034350,105.770757"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-[300px] md:h-[450px]"
              ></iframe>
            </div>

            <div className="text-center mt-8">
              <a
                href="https://maps.app.goo.gl/sLMXLp6SsU31p1f36"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white rounded-full transition-all duration-300 font-sans text-sm md:text-base shadow-lg hover:shadow-xl hover:scale-105"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t.openGoogleMaps}
              </a>
            </div>
          </div>
        </section>

        {/* Thank You Section */}
        <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-800 to-gray-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-script text-5xl md:text-7xl mb-8 md:mb-12">
              {t.thankYouTitle}
            </h2>
            
            <p className="font-sans text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto px-4">
              {t.thankYouMessage}
            </p>
            
            <div className="pt-8 border-t border-gray-700">
              <p className="font-sans text-sm md:text-base text-gray-400">
                {t.thankYouFooter}
              </p>
              <p className="font-script text-2xl md:text-3xl text-gray-300 mt-4">
                {t.seeYouSoon}
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 bg-gray-900 text-gray-400 text-center">
          <p className="font-sans text-xs md:text-sm">
            {t.footerCopyright}
          </p>
        </footer>
      </div>
    </>
  );
}
