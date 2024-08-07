"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const handleScroll = () => {
      const logo = document.querySelector("nav img");
      if (window.scrollY > 25) {
        logo?.classList.add("mt-14", "scale-125");
      } else {
        logo?.classList.remove("mt-14", "scale-125");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="flex justify-between items-center sticky top-0 z-[99999] w-full h-11 px-10 md:px-40 bg-[url('/img/bg-3.png')] bg-no-repeat bg-cover backdrop-blur-md">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={75} height={75} />
      </Link>
      <Navigation />
    </nav>
  );
};

export default Navbar;
