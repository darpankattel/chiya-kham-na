import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Chiya Kham Na | A Patreon Clone",
  description: "A Patreon like website for  crowd funding for projects",
  authors: [
    {
      name: "Darpan Kattel",
      url: "https://github.com/darpankattel",
    }
  ],
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
