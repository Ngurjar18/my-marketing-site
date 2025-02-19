"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-navy bg-opacity-90 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Logo" width={50} height={50} className="rounded-full" />
        <h1 className="text-2xl font-extrabold text-white font-futurist">JAI SARDA GROUP</h1>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden text-white text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Navigation Links */}
      <ul className={`lg:flex space-x-4 text-lg text-white absolute lg:relative bg-navy lg:bg-transparent w-full top-24 left-0 lg:top-0 lg:w-auto transition-all ${menuOpen ? "flex flex-col items-center w-full text-center" : "hidden"}`}>
        <li><Link href="/" className="block py-2 px-4 lg:inline hover:text-lbrown">Home</Link></li>
        <li><Link href="/about" className="block py-2 px-4 lg:inline hover:text-lbrown">About Us</Link></li>
        <li><Link href="/business" className="block py-2 px-4 lg:inline hover:text-lbrown">Our Businesses</Link></li>
        <li><Link href="/CSR" className="block py-2 px-4 lg:inline hover:text-lbrown">CSR</Link></li>
        <li><Link href="/contact" className="block py-2 px-4 lg:inline hover:text-lbrown">Contact</Link></li> 
      </ul>
    </nav>
    // <nav className="bg-navy bg-opacity-90 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
    //   <div className="flex items-center space-x-4">
    //     <Image src="/logo.png" alt="Jai Sarda Group Logo" width={50} height={50} className="rounded-full" />
    //     <h1 className="text-2xl font-extrabold text-white font-futurist">JAI SARDA GROUP</h1>
    //   </div>
    //   <ul className="flex space-x-6 text-lg text-white">
    //     <li><Link href="/" className="hover:text-lbrown transition-all">Home</Link></li>
    //     <li><Link href="/about" className="hover:text-lbrown transition-all">About Us</Link></li>
    //     <li><Link href="/business" className="hover:text-lbrown transition-all">Our Businesses</Link></li>
    //     <li><Link href="/CSR" className="hover:text-lbrown transition-all">CSR</Link></li>
    //     <li><Link href="/contact" className="hover:text-lbrown transition-all">Contact</Link></li>
    //   </ul>
    // </nav>
  );
}
