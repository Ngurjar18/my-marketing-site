"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const businesses = [
  { 
    id: "Apparel Division", 
    title: "Apparel Division", 
    sections: [
      {
        text: ["Our Legacy and Expertise",  
        "Our apparel division focuses on providing high-quality business wear, ethnic wear, and casual wear for the modern individual. We partner with renowned brands like Raymond and Manyavar, offering their premium collections that reflect the perfect blend of tradition, sophistication, and contemporary style. Whether it's formal business attire, elegant ethnic wear for cultural celebrations, or comfortable casual clothing, we deliver timeless fashion that meets the diverse needs of our customers.",
        "In addition to retail offerings, we operate a dedicated production facility that manufactures suiting fabrics tailored for corporate clients. This facility is equipped with advanced technology and skilled artisans to ensure that every fabric meets the highest standards of quality, offering businesses bespoke solutions for their workforce or retail lines. With an annual production capacity that includes:",
        " - 450 tons of yarn per day",
        " -350,000 meters of fabric per day",
        " -150 tons of fiber per day",
        " -10,000 kg of woolen yarn per day",],
        image: "/business1-1.jpg"
      },
      {
        text: ["We are equipped to meet the demands of top brands and corporate clients worldwide, providing premium suiting materials that are tailored for the professional sector. Our extensive production capacity ensures that we can offer bulk quantities of high-quality suiting fabrics, meeting the diverse needs of businesses and enterprises.",
        "Commitment to Quality and Innovation",
        "At Jai Sarda Group, we believe that quality is at the heart of everything we do. Our commitment to delivering world-class suiting fabrics and materials is unwavering. We focus on innovation, comfort, and durability, ensuring our products meet the ever-evolving demands of the corporate world. By continuously investing in state-of-the-art technology and advanced manufacturing techniques, we are able to produce fabrics that combine style, strength, and functionality.",
        "Our rigorous quality control processes ensure that every batch of fabric meets the highest global standards. Whether we are producing fabrics for large-scale corporations or providing tailored suiting solutions for smaller enterprises, we pride ourselves on consistently delivering products that exceed our clients' expectations.",
        "Manufacturing Excellence",
        "With modern machinery and infrastructure in place, Jai Sarda Group has built manufacturing units capable of handling large-scale production while maintaining exceptional quality. We employ state-of-the-art technology and have a dedicated team of professionals who work tirelessly to produce superior fabrics for our corporate clientele.",
        "Our facility is equipped to handle a wide range of suiting materials, and our well-organized production processes ensure timely delivery, meeting the tightest deadlines and the highest standards. We offer flexible, customized solutions for businesses in need of premium fabrics, whether for corporate uniforms, retail lines, or bespoke projects."],
        image: "/business1-2.jpg"
      },
      {
        text: "We ensure customer satisfaction through our commitment to excellence.",
        image: "/business1-2.jpg"
      }
    ]
  },
  { 
    id: "business2", 
    title: "Business Two", 
    sections: [
      {
        text: "Our second business is focused on sustainability and eco-friendly solutions.",
        image: "/business2-1.jpg"
      },
      {
        text: "We strive to create a greener future by incorporating renewable resources.",
        image: "/business2-2.jpg"
      }
    ]
  },
  { 
    id: "business3", 
    title: "Business Three", 
    sections: [
      {
        text: "Our third business revolves around technology and digital transformation.",
        image: "/business3-1.jpg"
      },
      {
        text: "We provide cutting-edge solutions to drive businesses forward.",
        image: "/business3-2.jpg"
      }
    ]
  }
];

export default function OurBusiness() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <h1 className="text-5xl font-extrabold text-center text-blue-900 mb- py-24 px-6">Our Business</h1>
      
      <div className="flex justify-center gap-6 mb-12">
        {businesses.map((business) => (
          <div key={business.id} 
               className="cursor-pointer bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 text-center"
               onClick={() => document.getElementById(business.id).scrollIntoView({ behavior: 'smooth' })}>
            <Image src={business.sections[0].image} alt={business.title} width={200} height={150} className="rounded-lg" />
            <h2 className="text-xl font-bold mt-2">{business.title}</h2>
          </div>
        ))}
      </div>
      
      <div className="space-y-16">
        {businesses.map((business) => (
          <div key={business.id} id={business.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">{business.title}</h2>
            {business.sections.map((section, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 mb-6` }>
                <Image src={section.image} alt={business.title} width={400} height={300} className="rounded-lg w-full md:w-1/2" />
                <p className="flex-1 text-lg text-gray-700">{section.text}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}




// import React from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";

// const businesses = [
//   {
//     id: "Apparel Division",
//     title: "Apparel Division",
//     description: ["Our Legacy and Expertise",  
//       "Our apparel division focuses on providing high-quality business wear, ethnic wear, and casual wear for the modern individual. We partner with renowned brands like Raymond and Manyavar, offering their premium collections that reflect the perfect blend of tradition, sophistication, and contemporary style. Whether it's formal business attire, elegant ethnic wear for cultural celebrations, or comfortable casual clothing, we deliver timeless fashion that meets the diverse needs of our customers.",
//       "In addition to retail offerings, we operate a dedicated production facility that manufactures suiting fabrics tailored for corporate clients. This facility is equipped with advanced technology and skilled artisans to ensure that every fabric meets the highest standards of quality, offering businesses bespoke solutions for their workforce or retail lines. With an annual production capacity that includes:",
//       " - 450 tons of yarn per day",
//       " -350,000 meters of fabric per day",
//       " -150 tons of fiber per day",
//       " -10,000 kg of woolen yarn per day",
//       "We are equipped to meet the demands of top brands and corporate clients worldwide, providing premium suiting materials that are tailored for the professional sector. Our extensive production capacity ensures that we can offer bulk quantities of high-quality suiting fabrics, meeting the diverse needs of businesses and enterprises.",
//       "Commitment to Quality and Innovation",
//       "At Jai Sarda Group, we believe that quality is at the heart of everything we do. Our commitment to delivering world-class suiting fabrics and materials is unwavering. We focus on innovation, comfort, and durability, ensuring our products meet the ever-evolving demands of the corporate world. By continuously investing in state-of-the-art technology and advanced manufacturing techniques, we are able to produce fabrics that combine style, strength, and functionality.",
//       "Our rigorous quality control processes ensure that every batch of fabric meets the highest global standards. Whether we are producing fabrics for large-scale corporations or providing tailored suiting solutions for smaller enterprises, we pride ourselves on consistently delivering products that exceed our clients' expectations.",
//       "Manufacturing Excellence",
//       "With modern machinery and infrastructure in place, Jai Sarda Group has built manufacturing units capable of handling large-scale production while maintaining exceptional quality. We employ state-of-the-art technology and have a dedicated team of professionals who work tirelessly to produce superior fabrics for our corporate clientele.",
//       "Our facility is equipped to handle a wide range of suiting materials, and our well-organized production processes ensure timely delivery, meeting the tightest deadlines and the highest standards. We offer flexible, customized solutions for businesses in need of premium fabrics, whether for corporate uniforms, retail lines, or bespoke projects.",
//       "Global Reach and Clientele",
//       "As our production capabilities have expanded, so has our client base. Today, Jai Sarda Group supplies suiting materials to leading brands across India and internationally. Our global clientele trusts us for our high-quality fabrics and on-time delivery, making us a reliable partner for companies across a wide range of industries.",
//       "We continue to build and strengthen our extensive distribution network, ensuring that our products are readily available to clients both domestically and internationally. As we look to expand our reach in markets like the US and UK, we are committed to ensuring that every client receives the same level of service and product excellence that has defined us for over two decades.",
//       "Why Choose Jai Sarda Group?",
//       "Decades of Expertise: Over 20 years of experience in the textile industry, specializing in suiting fabrics for corporate clients.",
//       "Global Clientele: Trusted by leading businesses worldwide for premium-quality suiting materials.",
//       "At Jai Sarda Group, we are committed to innovation, quality, and customer satisfaction. Our expertise in suiting materials and our dedication to excellence have allowed us to build long-lasting partnerships with clients across various sectors. We are proud of our legacy and excited for the future as we continue to innovate and expand, delivering world-class products that meet the evolving needs of the corporate world."
//     ],
//     images: ["/business1-1.jpg", "/business1-2.jpg"]
//   },
//   {
//     id: "Battery Recycling Division",
//     title: "Battery Recycling Division",
//     description: [
//       "Business Two specializes in innovative approaches that redefine the market.",
//       "Our mission is to constantly improve and bring cutting-edge solutions."
//     ],
//     images: ["/business2-1.jpg", "/business2-2.jpg"]
//   },
//   {
//     id: "Investment Division - Jai Sarda Group",
//     title: "Investment Division - Jai Sarda Group",
//     description: [
//       "Business Three focuses on customer satisfaction and excellence.",
//       "With years of experience, we have built a reputation for reliability and quality."
//     ],
//     images: ["/business3-1.jpg", "/business3-2.jpg"]
//   }
// ];

// export default function OurBusiness() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Navbar />
//       <div className="py-28 px-6">
//         <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-12">Our Business</h1>
        
//         {/* Clickable Tiles */}
//         <div className="flex justify-center gap-6 mb-12">
//           {businesses.map((business) => (
//             <a
//               key={business.id}
//               href={`#${business.id}`}
//               className="bg-blue-900 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-700 transition"
//             >
//               {business.title}
//             </a>
//           ))}
//         </div>

//         {/* Business Sections */}
//         <div className="space-y-16">
//           {businesses.map((business, index) => (
//             <div key={business.id} id={business.id} className="bg-white p-8 rounded-lg shadow-lg">
//               <h2 className="text-3xl font-bold text-blue-900 mb-6">{business.title}</h2>
//               {business.description.map((paragraph, i) => (
//                 <p key={i} className="text-lg text-gray-700 mb-4">{paragraph}</p>
//               ))}
              
//               {/* Image Layout */}
//               <div className="flex flex-col md:flex-row gap-6 mt-6">
//                 {business.images.map((image, imgIndex) => (
//                   <div key={imgIndex} className={`w-full md:w-1/2 ${imgIndex % 2 === 0 ? 'md:order-last' : ''}`}>
//                     <Image src={image} alt={business.title} width={500} height={300} className="rounded-lg" />
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// // import React from "react";
// // import Image from "next/image";
// // import Navbar from "@/components/Navbar";

// // const sections = [
// //   {
// //     title: "Apparel Division",
// //     image: "/about_us1.webp",
// //     text: [
// //       "Our Legacy and Expertise",  
// //       "Our apparel division focuses on providing high-quality business wear, ethnic wear, and casual wear for the modern individual. We partner with renowned brands like Raymond and Manyavar, offering their premium collections that reflect the perfect blend of tradition, sophistication, and contemporary style. Whether it's formal business attire, elegant ethnic wear for cultural celebrations, or comfortable casual clothing, we deliver timeless fashion that meets the diverse needs of our customers.",
// //       "In addition to retail offerings, we operate a dedicated production facility that manufactures suiting fabrics tailored for corporate clients. This facility is equipped with advanced technology and skilled artisans to ensure that every fabric meets the highest standards of quality, offering businesses bespoke solutions for their workforce or retail lines. With an annual production capacity that includes:",
// //       " - 450 tons of yarn per day",
// //       " -350,000 meters of fabric per day",
// //       " -150 tons of fiber per day",
// //       " -10,000 kg of woolen yarn per day"
// //     ],
// //   },
// //   {
// //     title: "Battery Recycling Division",
// //     image: "/about_us2.png",
// //     text: ["With our success in the first Raymond store, we were determined to keep growing and offering more to our customers. In 1985, we opened another Raymond shop, this time in the heart of the city, continuing to build our reputation for high-quality apparel. The city of Kota, with its expanding business opportunities and evolving demand for quality garments, was the ideal setting to further cement our position as a leader in the local apparel market.",
// //     "In 2000, we took a bold step and diversified into ethnic wear by partnering with Manyavar, one of the country’s most respected names in traditional fashion. We opened a Manyavar shop in Kota, bringing premium ethnic clothing to the region. This move was not only about meeting the growing demand for ethnic wear but also about adding depth to our portfolio, offering our customers a diverse range of choices for various occasions—from weddings and festivals to casual outings and celebrations."
// //     ],
// //   },
// //   {
// //     title: "Investment Division - Jai Sarda Group",
// //     image: "/about_us3.webp",
// //     text: ["In 2005, we expanded further by establishing a dedicated manufacturing unit for suiting fabric targeted at corporate clients. Understanding the importance of quality fabric in business attire, we invested in state-of-the-art technology and set up a facility that would cater to the needs of businesses across various industries. This move allowed us to tap into a new market segment and build strong relationships with corporate clients, providing them with premium suiting materials for their employees and retail offerings.",
// //     "Our manufacturing unit became a cornerstone of our business, allowing us to deliver custom-made, high-quality fabrics while adhering to the highest industry standards. This facility further solidified our reputation as a comprehensive provider of business attire solutions."
// //     ],
// //   }
// // ];

// // export default function BusinessPage() {
// //     return (
// //       <div className="min-h-screen bg-gray-100 text-gray-900">
// //         {/* Navbar */}
// //         <Navbar />
  
// //         {/* Main Content */}
// //         <div className="py-28 px-6">
// //           <h1 className="text-5xl font-extrabold text-center text-blue-900 mb-6">About Us</h1>
          
// //           {/* New Introduction Paragraph
// //           <p className="text-lg text-center text-gray-700 max-w-4xl mx-auto mb-12">
// //           The story of Jai Sarda Group is one of ambition, growth, and transformation—a journey that began in a small village in Rajasthan called Chaumela. From humble beginnings, we’ve steadily built a legacy of excellence across various sectors, from apparel and manufacturing to strategic investments and sustainable practices. Our evolution is rooted in a deep sense of entrepreneurship, a commitment to quality, and a drive to create long-term value for our customers, stakeholders, and the communities we serve.
// //           </p> */}
  
// //           <div className="space-y-12">
// //             {sections.map((section, index) => (
// //               <div
// //                 key={index}
// //                 className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} 
// //                 items-center gap-6 bg-white p-8 rounded-lg shadow-lg`}
// //               >
// //                 {/* Image */}
// //                 <Image src={section.image} alt={section.title} width={400} height={300} className="rounded-lg md:w-2/5" />
  
// //                 {/* Text Section with increased width */}
// //                 <div className={`w-full md:w-3/5 ${index % 2 === 0 ? 'text-left md:text-left' : 'text-right md:text-center'}`}>
// //                   <h2 className="text-3xl font-bold text-blue-900 mb-4">{section.title}</h2>
// //                   {section.text.map((paragraph, i) => (
// //                     <p key={i} className="text-lg text-gray-700 mb-4">{paragraph}</p>
// //                   ))}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   }
