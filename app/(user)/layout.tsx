"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="max-w-7xl mx-auto bg-[#F8F8F8] dark:bg-dark">
      <Header />
      {children}
      <Footer />
    </html>
  );
}
