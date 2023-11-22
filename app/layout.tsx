import Image from "next/image";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";
import { Metadata } from "next";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ansell Maximilian",
  description: "Ansell Maximilian's Portfolio Website",
  verification: {
    google: "dxQ-SCN2hJTZ2hBsFiLR7uToQOViN8CE0LKTCRu9gag",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${mont.className} overflow-x-hidden`}>
        {children}
        <footer className="bg-gradient-to-b to-primary-base from-primary-light text-gray-300 p-4">
          <div className="flex justify-center gap-8 container mx-auto items-center text-sm">
            <span>Ansell Maximilian &middot; {new Date().getFullYear()}</span>
            <Image src="/logo.svg" alt="Personal Logo" width={40} height={40} />
            <span>All rights reserved.</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
