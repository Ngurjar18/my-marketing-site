import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-navy bg-opacity-90 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Jai Sarda Group Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-extrabold text-white">Jai Sarda Group</h1>
        </div>
        <ul className="flex space-x-6 text-lg text-white">
          <li><Link href="/about" className="hover:text-cyan-400 transition-all">About Us</Link></li>
          <li><Link href="/business" className="hover:text-cyan-400 transition-all">Our Business</Link></li>
          <li><Link href="/CSR" className="hover:text-cyan-400 transition-all">CSR</Link></li>
          <li><Link href="/contact" className="hover:text-cyan-400 transition-all">Contact</Link></li>
        </ul>
      </nav>
      
      {/* Hero Section
      <header className="h-screen flex flex-col justify-center items-center text-center px-4 bg-navy text-cream bg-[url('/home_bg.png')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 backdrop-blur-sm"></div> 
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to Jai Sarda Group</h2>
        <p className="text-xl mb-6 max-w-2xl">We provide exceptional services to help grow your business with innovation and expertise.</p>
        <Link href="/about" className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition-all">Learn More</Link>
      </header> */}
      
      <header className="relative h-screen flex flex-col items-center text-center px-4 text-cream">
        
        {/* Blurred Background Image */}
        <div 
          className="absolute inset-0 bg-[url('/home_bg.png')] bg-cover bg-center bg-no-repeat 
          backdrop-blur-md"
        ></div>
        {/* Content */}
        <div className="relative z-10 w-full flex flex-col items-center">
          <h2 className="mt-10 text-5xl font-extrabold animate-fade-in"> 
            Welcome to
          </h2>
          {/* <p className="text-xl mb-6 max-w-2xl">
            We provide exceptional services to help grow your business with innovation and expertise.
          </p> */}
          {/* <Link href="/about" className="bg-cyan-400 text-blue-900 px-6 py-3 rounded-full shadow-lg hover:bg-cyan-300 transition-all">
            Learn More
          </Link> */}
        </div>

      </header>


      {/* About Us Section (Still on Home Page) */}
      <section id="about" className="min-h-[60vh] py-20 text-center bg-gray-200 flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">About Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl">At Jai Sarda Group, we are driven by a shared vision to create value across multiple industries through innovation, sustainability, and growth. With diversified interests in apparel, battery recycling, and strategic investments, we have established ourselves as a multi-faceted group that believes in making a positive impact on society while delivering excellence in every sector we engage with.</p>
      </section>
      
      {/* Our Business Section (Still on Home Page) */}
      <section id="business" className="min-h-[60vh] py-20 text-center bg-white flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-4 text-blue-900">Our Business</h2>
        <p className="text-lg text-gray-700 max-w-2xl">We offer innovative solutions tailored to your needs, ensuring business growth and sustainability.</p>
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center bg-blue-900 text-white shadow-inner">
        <p>&copy; {new Date().getFullYear()} Jai Sarda Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
