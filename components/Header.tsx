import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header
      className="h-24 sticky top-0 text-white text-xl py-8 px-4 bg-[#121212]"
      id="header"
    >
      <nav className="h-full flex items-center justify-between">
        <Link href="/">
          <Image src="/logo.svg" alt="Personal Logo" width={64} height={64} />
        </Link>
        <ul className="gap-4 hidden md:flex">
          <li>About</li>
          <li>Projects</li>
          <li>Experience</li>
        </ul>
      </nav>
    </header>
  );
}
