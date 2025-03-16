"use client";

import Image from "next/image";
import { navLinks } from "./definitions";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [activeBar, setActiveBar] = useState(false);
  return (
    <nav className="flex relative bg-white flex-col">
      <div className="flex items-center justify-between px-4 md:px-0 md:justify-around">
        <div className="logo flex flex-col items-center">
          <Image
            src={"/logo1.png"}
            className="md:animate-spin"
            width={92}
            height={48}
            alt="Logo"
          />
          <Image
            src={"/logo2.png"}
            className="hidden md:block"
            width={164}
            height={24}
            alt="Logo"
          />
        </div>
        <div
          onClick={() => setActiveBar(!activeBar)}
          className="flex md:hidden gap-1 flex-col"
        >
          <div className="bg-black w-6 h-1"></div>
          <div className="bg-black w-6 h-1"></div>
          <div className="bg-black w-6 h-1"></div>
        </div>
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, index) => (
            <Link key={index} href={link.href}>
              {" "}
              <li> {link.name} </li>{" "}
            </Link>
          ))}
        </ul>
      </div>
      <ul className={`${activeBar ? 'flex' : 'hidden'} flex-col absolute top-[76px] bg-white md:hidden w-full gap-8`}>
        {navLinks.map((link, index) => (
          <Link key={index} href={link.href} className="border-b pl-4 pb-4 border-b-black">
            {" "}
            <li> {link.name} </li>{" "}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
