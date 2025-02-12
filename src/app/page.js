import React from "react";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {

  const businesses = [
    {
      id: "Apparel Division", 
      title: "Apparel Division",
      image: "/Bussines_1.jpg", // Make sure the image path is correct
    },
    {
      id: "Battery Recycling Division", 
      title: "Battery Recycling Division", 
      image: "/Bussines_2.jpg",
    },
    {
      id: "Investment Division", 
      title: "Investment Division", 
      image: "/Bussines_3.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-navy bg-opacity-90 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
        <div className="flex items-center space-x-4">
          <Image src="/logo.png" alt="Jai Sarda Group Logo" width={50} height={50} className="rounded-full" />
          <h1 className="text-2xl font-extrabold text-white font-futurist">JAI SARDA GROUP</h1>
        </div>
        <ul className="flex space-x-6 text-lg text-white">

          {/* <li><Link href="/" className="hover:text-cyan-400 transition-all">Home</Link></li> */}
          <li><Link href="/about" className="hover:text-yellow transition-all">About Us</Link></li>
          <li><Link href="/business" className="hover:text-yellow transition-all">Our Businesses</Link></li>
          <li><Link href="/CSR" className="hover:text-yellow transition-all">CSR</Link></li>
          <li><Link href="/contact" className="hover:text-yellow transition-all">Contact</Link></li>
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
      <section id="about" className="min-h-[50vh] py-20 text-center bg-gray-200 flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-4 text-navy">About Us</h2>
        <p className="text-lg text-gray-700 max-w-7xl">At Jai Sarda Group, we are driven by a shared vision to create value across multiple industries through innovation, sustainability, and growth. With diversified interests in apparel, battery recycling, and strategic investments, we have established ourselves as a multi-faceted group that believes in making a positive impact on society while delivering excellence in every sector we engage with.</p>
          {/* Know More Button */}
        <Link href="/about">
          <button className="mt-4 bg-navy text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow transition-all">
            Know More
          </button>
        </Link>
      </section>
      
      {/* Our Business Section (Still on Home Page)
      <section id="business" className="min-h-[50vh] py-20 text-center bg-white flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-4 text-navy">Our Businesses</h2>
        <p className="text-lg text-gray-700 max-w-7xl">We offer innovative solutions tailored to your needs, ensuring business growth and sustainability.</p>
      </section> */}

      {/* Our Business Section (Still on Home Page) */}
      <section id="business" className="min-h-[50vh] py-20 text-center bg-white flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-6 text-navy">Our Businesses</h2>
        {/* <p className="text-lg text-gray-700 max-w-7xl mb-10">
          We offer innovative solutions tailored to your needs, ensuring business growth and sustainability.
        </p> */}

        {/* Business Navigation Tiles */}
        <div className="flex justify-center gap-9 mt-1">
          {businesses.map((business) => (
            <Link 
              key={business.id} 
              href={`/business#${business.id}`} // Redirect to Our Business page's section
              className="cursor-pointer bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 text-center w-[350px] h-[350px] flex flex-col items-center"
            >
              <div className="w-full h-[350px] flex items-center justify-center">
                <Image 
                  src={business.image} // Custom image per business
                  alt={business.title} 
                  width={300} 
                  height={300} 
                  className="rounded-lg object-cover aspect-square"
                />
              </div>
              {/* <h2 className="text-xl font-bold mt-2">{business.title}</h2> */}
            </Link>
          ))}
        </div>
      </section>

      {/* CSR (Still on Home Page) */}
      <section id="CSR" className="min-h-[50vh] py-20 text-center bg-gray-200 flex flex-col justify-center items-center shadow-md rounded-xl mx-4 my-6 p-6 animate-fade-in transition-all">
        <h2 className="text-4xl font-bold mb-4 text-navy">CSR</h2>
        <p className="text-lg text-gray-700 max-w-7xl">​​At Jai Sarda Group, our commitment to Corporate Social Responsibility (CSR) is rooted in creating lasting social impact through education, healthcare, and environmental sustainability. Through the Satyanarayan Mandir Trust, we raised ₹40 Crore in 2023 to support initiatives that empower marginalized communities. Our educational programs provide access to quality learning, while our healthcare projects improve medical access in underserved areas. We also focus on environmental sustainability through afforestation, waste management, and clean water projects. With a focus on transparency and accountability, we are dedicated to fostering a healthier, more educated, and sustainable future for all.</p>
        {/* Know More Button */}
        <Link href="/CSR">
          <button className="mt-4 bg-navy text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow transition-all">
            Know More
          </button>
        </Link>
      </section>
      
      {/* Footer */}
      <footer className="py-6 text-center bg-navy text-white shadow-inner">
        <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
      </footer>
    </div>
  );
}
