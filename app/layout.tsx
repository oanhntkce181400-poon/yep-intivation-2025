import type { Metadata } from "next";
import { Playfair_Display, Great_Vibes, Montserrat } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./context/AppContext";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Year End Party 2025 - Invitation",
  description: "Join us for an unforgettable celebration!",
  icons: {
    icon: "/FPTU.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${greatVibes.variable} ${montserrat.variable} antialiased transition-colors duration-300`}
      >
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
