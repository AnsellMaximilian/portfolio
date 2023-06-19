import Image from "next/image";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";
import Header from "@/components/Header";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Ansell Maximilian",
  description: "Ansell Maximilian's Portfolio Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={mont.className}>
        <Header />
        <main> {children}</main>
      </body>
    </html>
  );
}
