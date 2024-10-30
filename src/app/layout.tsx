import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#252B42] md:px-20 px-3 text-[#FFFFFF] font-Montserrat"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
