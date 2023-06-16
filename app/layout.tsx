import Image from "next/image";
import "./globals.css";
import { Inter, Montserrat } from "next/font/google";
import Link from "next/link";

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
        <header className="h-24 fixed inset-x-0 text-white text-xl py-8 px-4 bg-[#121212]">
          <nav className="h-full flex items-center justify-between">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Personal Logo"
                width={64}
                height={64}
              />
            </Link>
            <ul className="flex gap-4">
              <li>About</li>
              <li>Projects</li>
              <li>Experience</li>
            </ul>
          </nav>
        </header>
        <main> {children}</main>
      </body>
    </html>
  );
}
