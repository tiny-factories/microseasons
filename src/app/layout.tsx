import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "#Microseasons API",
  description: "Japan Microseasons API  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-[#482231] dark:text-[#C7DEED] bg-[#C7DEED] text-[#482231]`}
      >
        {children}
      </body>
    </html>
  );
}
