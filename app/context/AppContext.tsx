"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "vi" | "en" | "ja";

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
  t: typeof translations.vi;
}

export const translations = {
  vi: {
    // Hero Section
    heroTitle: "YEAR END PARTY",
    heroYear: "2025",
    heroOrganization: "FPT SOFTWARE & FPTU & FIC",
    heroSubtitle: "IT & BrSE & Japanese Classes",
    heroCelebrate: "Let's Celebrate Together!",
    heroDescription: "Một năm đầy nỗ lực và thành công của chúng ta sắp khép lại. Hãy cùng nhau sum họp, chia sẻ niềm vui và đón chào những cơ hội mới trong năm 2026. Cùng những người bạn FCT, FPTU, FIC thân yêu!",
    
    // Date & Location Section
    dateLocationTitle: "THỜI GIAN & ĐỊA ĐIỂM",
    dateMonth: "Tháng 2",
    dateDay: "Thứ Sáu",
    dateTime: "19:00",
    dateCheckin: "(Check-in từ 18:30)",
    locationTitle: "ĐỊA ĐIỂM",
    locationName: "Quán Zô Dứt Cạn",
    locationAddress1: "Đ. Trần Hoàng Na",
    locationAddress2: "Hưng Lợi, Ninh Kiều",
    locationAddress3: "Cần Thơ, Việt Nam",
    viewMap: "Xem bản đồ",
    
    // Countdown Section
    countdownTitle: "Countdown",
    countdownDays: "Ngày",
    countdownHours: "Giờ",
    countdownMinutes: "Phút",
    countdownSeconds: "Giây",
    
    // Dress Code Section
    dressCodeTitle: "DRESS CODE",
    dressCode1Title: "Smart Casual",
    dressCode1Desc: "Trang phục lịch sự, gọn gàng",
    dressCode2Title: "Comfortable & Stylish",
    dressCode2Desc: "Thoải mái nhưng vẫn phong cách",
    dressCode3Title: "Party Vibes",
    dressCode3Desc: "Sẵn sàng cho bữa tiệc cuối năm!",
    dressCodeMessage: "Hãy đến và tỏa sáng theo phong cách của bạn!",
    
    // RSVP Form
    rsvpTitle: "Xác nhận",
    rsvpSubtitle: "THAM DỰ",
    rsvpDescription: "Vui lòng xác nhận sự có mặt của bạn để chúng mình chuẩn bị đón tiếp một cách chu đáo nhất. Trân trọng!",
    namePlaceholder: "Bạn là...",
    messagePlaceholder: "Gửi lời nhắn đến Ban Tổ Chức",
    attendanceLabel: "Bạn sẽ đến chứ?",
    attendanceYes: "Tôi sẽ đến",
    attendanceNo: "Rất tiếc, tôi không thể đến",
    attendanceMaybe: "Chưa chắc chắn",
    guestsLabel: "Bạn tham dự cùng ai?",
    guestsAlone: "Chỉ mình tôi",
    guestsPlus1: "Tôi và 1 người",
    guestsPlus2: "Tôi và 2 người",
    guestsPlus3: "Tôi và 3+ người",
    unitLabel: "Bạn đến từ đơn vị nào?",
    unitSoftware: "FPT Software Can Tho",
    unitFPTU: "FPTU Can Tho",
    unitFIC: "FIC Can Tho",
    unitOther: "Khác",
    submitButton: "Gửi lời nhắn",
    shareButton: "Chia sẻ lên Facebook",
    successTitle: "Cảm ơn bạn!",
    successMessage: "Chúng tôi đã nhận được phản hồi của bạn.",
    shareMessage: "Tôi sẽ tham dự Year End Party 2025 - FPT Software & FPTU! Cùng nhau đón chào năm mới thật vui vẻ nhé!",
    
    // Map Section
    mapTitle: "BẢN ĐỒ ĐỊA ĐIỂM",
    openGoogleMaps: "Mở trong Google Maps",
    
    // Thank You Section
    thankYouTitle: "Thank You!",
    thankYouMessage: "Cảm ơn tất cả các bạn FPT Software Can Tho, FPTU Can Tho, FIC Can Tho đã đồng hành và góp phần vào những thành công trong năm qua. Hãy cùng nhau tạo nên một buổi tiệc cuối năm đáng nhớ và đón chào một năm mới thật tuyệt vời!",
    thankYouFooter: "Hy vọng được gặp bạn trong ngày thật đẹp",
    seeYouSoon: "See you soon!",
    
    // Footer
    footerCopyright: "© 2025 Year End Party Invitation. Made with love",
  },
  en: {
    // Hero Section
    heroTitle: "YEAR END PARTY",
    heroYear: "2025",
    heroOrganization: "FPT SOFTWARE & FPTU & FIC",
    heroSubtitle: "IT & BrSE & Japanese Classes",
    heroCelebrate: "Let's Celebrate Together!",
    heroDescription: "A year full of efforts and success is coming to an end. Let's gather together, share joy, and welcome new opportunities in 2026. With our dear friends from FCT, FPTU, and FIC!",
    
    // Date & Location Section
    dateLocationTitle: "DATE & LOCATION",
    dateMonth: "February",
    dateDay: "Friday",
    dateTime: "19:00",
    dateCheckin: "(Check-in from 18:30)",
    locationTitle: "LOCATION",
    locationName: "Zô Dứt Cạn Restaurant",
    locationAddress1: "Tran Hoang Na Street",
    locationAddress2: "Hung Loi, Ninh Kieu",
    locationAddress3: "Can Tho, Vietnam",
    viewMap: "View Map",
    
    // Countdown Section
    countdownTitle: "Countdown",
    countdownDays: "Days",
    countdownHours: "Hours",
    countdownMinutes: "Minutes",
    countdownSeconds: "Seconds",
    
    // Dress Code Section
    dressCodeTitle: "DRESS CODE",
    dressCode1Title: "Smart Casual",
    dressCode1Desc: "Elegant and neat attire",
    dressCode2Title: "Comfortable & Stylish",
    dressCode2Desc: "Comfortable yet stylish",
    dressCode3Title: "Party Vibes",
    dressCode3Desc: "Ready for the year-end party!",
    dressCodeMessage: "Come and shine in your own style!",
    
    // RSVP Form
    rsvpTitle: "CONFIRMATION",
    rsvpSubtitle: "PARTICIPATION",
    rsvpDescription: "Please confirm your attendance so we can prepare the best welcome for you. Thank you!",
    namePlaceholder: "Your Name",
    messagePlaceholder: "Send a message to the Organizers",
    attendanceLabel: "Will you attend?",
    attendanceYes: "Yes, I'll be there",
    attendanceNo: "Sorry, I can't make it",
    attendanceMaybe: "Not sure yet",
    guestsLabel: "Who will attend with you?",
    guestsAlone: "Just me",
    guestsPlus1: "Me and 1 guest",
    guestsPlus2: "Me and 2 guests",
    guestsPlus3: "Me and 3+ guests",
    unitLabel: "Which unit are you from?",
    unitSoftware: "FPT Software Can Tho",
    unitFPTU: "FPTU Can Tho",
    unitFIC: "FIC Can Tho",
    unitOther: "Other",
    submitButton: "Send Message",
    shareButton: "Share on Facebook",
    successTitle: "Thank You!",
    successMessage: "We have received your response.",
    shareMessage: "I will attend Year End Party 2025 - FPT Software & FPTU! Let's welcome the new year together!",
    
    // Map Section
    mapTitle: "LOCATION MAP",
    openGoogleMaps: "Open in Google Maps",
    
    // Thank You Section
    thankYouTitle: "Thank You!",
    thankYouMessage: "Thank you to all friends from FPT Software Can Tho, FPTU Can Tho, and FIC Can Tho for your companionship and contributions to our success this past year. Let's create an unforgettable year-end party and welcome a wonderful new year together!",
    thankYouFooter: "Hope to see you on this beautiful day",
    seeYouSoon: "See you soon!",
    
    // Footer
    footerCopyright: "© 2025 Year End Party Invitation. Made with love",
  },
  ja: {
    // Hero Section
    heroTitle: "YEAR END PARTY",
    heroYear: "2025",
    heroOrganization: "FPT SOFTWARE & FPTU & FIC",
    heroSubtitle: "IT & BrSE & 日本語 クラス",
    heroCelebrate: "Let's Celebrate Together!",
    heroDescription: "努力と成功に満ちた一年が終わろうとしています。2026年の新しいチャンスを迎えるために、FCT、FPTU、FICの親愛なる仲間たちと共に集まり、喜びを分かち合いましょう！",
    
    // Date & Location Section
    dateLocationTitle: "日時・場所",
    dateMonth: "2月",
    dateDay: "金曜日",
    dateTime: "19:00",
    dateCheckin: "(チェックイン 18:30から)",
    locationTitle: "場所",
    locationName: "Zô Dứt Cạn レストラン",
    locationAddress1: "Tran Hoang Na 通り",
    locationAddress2: "Hung Loi, Ninh Kieu",
    locationAddress3: "カントー、ベトナム",
    viewMap: "地図を見る",
    
    // Countdown Section
    countdownTitle: "カウントダウン",
    countdownDays: "日",
    countdownHours: "時間",
    countdownMinutes: "分",
    countdownSeconds: "秒",
    
    // Dress Code Section
    dressCodeTitle: "ドレスコード",
    dressCode1Title: "スマートカジュアル",
    dressCode1Desc: "上品で整った服装",
    dressCode2Title: "快適でスタイリッシュ",
    dressCode2Desc: "快適さとスタイルの両立",
    dressCode3Title: "パーティー気分",
    dressCode3Desc: "年末パーティーの準備万端！",
    dressCodeMessage: "あなたのスタイルで輝いてください！",
    
    // RSVP Form
    rsvpTitle: "出欠確認",
    rsvpSubtitle: "参加確認",
    rsvpDescription: "ご出席の確認をお願いいたします。皆様を最高のおもてなしでお迎えするために準備させていただきます。",
    namePlaceholder: "お名前",
    messagePlaceholder: "主催者へメッセージを送る",
    attendanceLabel: "ご出席されますか？",
    attendanceYes: "出席します",
    attendanceNo: "申し訳ございません、欠席します",
    attendanceMaybe: "まだ未定です",
    guestsLabel: "どなたと参加されますか？",
    guestsAlone: "一人で参加",
    guestsPlus1: "もう1名と参加",
    guestsPlus2: "もう2名と参加",
    guestsPlus3: "3名以上と参加",
    unitLabel: "所属部署は？",
    unitSoftware: "FPT Software Can Tho",
    unitFPTU: "FPTU Can Tho",
    unitFIC: "FIC Can Tho",
    unitOther: "その他",
    submitButton: "メッセージを送信",
    shareButton: "Facebookでシェア",
    successTitle: "ありがとうございます！",
    successMessage: "ご回答を受け取りました。",
    shareMessage: "Year End Party 2025 - FPT Software & FPTUに参加します！一緒に新年を迎えましょう！",
    
    // Map Section
    mapTitle: "会場地図",
    openGoogleMaps: "Googleマップで開く",
    
    // Thank You Section
    thankYouTitle: "ありがとうございます！",
    thankYouMessage: "FPT Software Can Tho、FPTU Can Tho、FIC Can Thoの皆様、この一年間のご協力と成功への貢献に感謝いたします。思い出に残る年末パーティーを作り、素晴らしい新年を一緒に迎えましょう！",
    thankYouFooter: "この美しい日にお会いできることを楽しみにしています",
    seeYouSoon: "またお会いしましょう！",
    
    // Footer
    footerCopyright: "© 2025 Year End Party Invitation. Made with love",
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("vi");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load theme from localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Load language from localStorage
    const savedLang = localStorage.getItem("language") as Language;
    if (savedLang && ["vi", "en", "ja"].includes(savedLang)) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, setLanguage, darkMode, toggleDarkMode, t }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
