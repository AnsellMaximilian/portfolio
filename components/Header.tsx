"use client";

import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { BiMenu as MenuIcon } from "react-icons/bi";

export default function Header() {
  return (
    <Menu
      as="header"
      className="sticky top-0 text-white text-xl py-8 px-4 bg-[#121212] z-10"
      id="header"
    >
      <nav className="h-full">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <Image src="/logo.svg" alt="Personal Logo" width={64} height={64} />
          </Link>
          <ul className="gap-4 hidden md:flex">
            <li>
              <a href="#projects" className="hover:text-gray-300">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact-section" className="hover:text-gray-300">
                Contacts
              </a>
            </li>
          </ul>
          <div className="md:hidden">
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              <MenuIcon size={32} />
            </Menu.Button>
          </div>
        </div>
      </nav>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute top-full w-full left-0 origin-top-right divide-y divide-gray-100 bg-primary-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              <a
                href="#projects"
                className="group hover:bg-gray-200 hover:text-black transition-all duration-75 flex w-full items-center rounded-md px-2 py-2"
              >
                Projects
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href="#contact-section"
                className="group hover:bg-gray-200 hover:text-black transition-all duration-75 flex w-full items-center rounded-md px-2 py-2"
              >
                Contacts
              </a>
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
