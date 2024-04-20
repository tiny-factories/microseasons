import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tiny Seasons",
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
        className={`${inter.className} dark:bg-[#482231] dark:text-[#C7DEED] text-[#482231]`}
      >
        {/* <nav className="flex justify-between items-center p-4">
          <div className="logo">
            <Link href="/">
              <div>tiny seasons</div>
            </Link>
          </div>
          <div className="links flex gap-4">
            <Link href="/api">
              <div>api</div>
            </Link>
          </div>
        </nav> */}
        {children}
        {/* <footer className="text-center p-4">
          Made by the{" "}
          <Link href="https://planetary.software">
            {" "}
            planetary software group
          </Link>{" "}
          at <Link href="https://tinyfactories.space">Tiny Factories</Link>
        </footer> */}
      </body>
    </html>
  );
}
