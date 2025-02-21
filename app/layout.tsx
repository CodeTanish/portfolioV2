import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";


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
        {children}
      </body>
    </html>
  );
}
