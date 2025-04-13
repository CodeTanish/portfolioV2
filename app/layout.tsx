import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer"
import ToasterProvider from "@/components/ui/ToasterProvider"

export const metadata: Metadata = {
  title: "CodeTanish",
  description: "Web Profile"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Navbar/>
        <ToasterProvider />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
