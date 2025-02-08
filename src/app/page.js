import React from "react";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-navy bg-opacity-80 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Jai Sarda Group Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-extrabold text-cream">Jai Sarda Group</h1>
        </div>
        <ul className="flex space-x-6 text-lg text-cream">
          <li><a href="#about" className="hover:text-gray-300 transition-all">About Us</a></li>
          <li><a href="#business" className="hover:text-gray-300 transition-all">Our Business</a></li>
          <li><a href="#team" className="hover:text-gray-300 transition-all">Team</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition-all">Contact</a></li>
        </ul>
      </nav>
      
      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center text-center px-4 bg-navy text-cream">
        <h2 className="text-5xl font-extrabold mb-4 animate-fade-in">Welcome to Jai Sarda Group</h2>
        <p className="text-xl mb-6 max-w-2xl">We provide exceptional services to help grow your business with innovation and expertise.</p>
        <a href="#about" className="bg-cream text-navy px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition-all">Learn More</a>
      </header>
      
      {/* Reusable Section Wrapper */}
      {[
        { id: "about", title: "About Us", content: "We are a company dedicated to providing top-notch services to our clients, helping them achieve success.", bg: "bg-cream" },
        { id: "business", title: "Our Business", content: "We offer innovative solutions tailored to your needs, ensuring business growth and sustainability.", bg: "bg-gray-200" },
      ].map(({ id, title, content, bg }) => (
        <section id={id} key={id} className={`min-h-[60vh] py-20 text-center ${bg} flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all`}>
          <h2 className="text-4xl font-bold mb-4 text-navy">{title}</h2>
          <p className="text-lg text-gray-700 max-w-2xl whitespace-pre-line">{content}</p>
        </section>
      ))}
      
      {/* Team Section */}
      <section id="team" className="min-h-[60vh] py-20 text-center bg-cream flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-8 text-navy">Meet Our Team</h2>
        <div className="flex space-x-8">
          {[
            { name: "Mr. Vallabh Sarda", image: "/vallabh.png", desc: "Founder & CEO" },
            { name: "Mr. Sanjay Sarda", image: "/sanjay.png", desc: "Managing Director" },
            { name: "Mr. Samaksh Sarda", image: "/samaksh.png", desc: "Operations Head" },
          ].map(({ name, image, desc }) => (
            <div key={name} className="bg-gray-100 shadow-lg rounded-lg p-4 w-64 flex flex-col items-center">
              <Image src={image} alt={name} width={150} height={150} className="rounded-lg" />
              <h3 className="text-xl font-semibold mt-4 text-navy">{name}</h3>
              <p className="text-gray-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="min-h-[60vh] py-20 text-center bg-gray-200 flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-8 text-navy">Contact Us</h2>
        <p className="text-lg text-gray-700 max-w-2xl mb-6">Get in touch with us for any inquiries or collaborations. We’d love to hear from you!</p>
        <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <input type="text" placeholder="Your Name" className="w-full p-3 mb-4 border rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 mb-4 border rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 mb-4 border rounded-lg" rows="4"></textarea>
          <button type="submit" className="bg-navy text-cream px-6 py-3 rounded-lg hover:bg-gray-700 transition-all w-full">Send Message</button>
        </form>
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center bg-navy text-cream shadow-inner">
        <p>&copy; {new Date().getFullYear()} Jai Sarda Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
