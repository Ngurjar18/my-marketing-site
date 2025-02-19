import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "Education: Empowering Future Generations",
    image: "/csr_1.jpg",
    text: [
      "We recognize that education is the cornerstone of social and economic progress. Through the Satyanarayan Mandir Trust, we have launched numerous educational programs designed to provide quality education to children and young adults, particularly from marginalized communities. Our initiatives range from scholarships to school infrastructure support, helping improve educational outcomes and offering opportunities to individuals who might otherwise lack access to learning resources.",
      "By investing in education, we aim to break the cycle of poverty, empowering individuals with the knowledge and skills needed to create better futures for themselves and their families. Our long-term vision is to build a more educated, skilled, and empowered workforce, contributing to societal growth and development."
    ],
  },
  {
    title: "Healthcare: Enhancing Access to Medical Care",
    image: "/csr_2.jpeg",
    text: ["Healthcare is a fundamental right, yet many communities still face barriers to accessing basic medical services. Through the Satyanarayan Mandir Trust, we have implemented a range of healthcare initiatives aimed at improving access to medical care and preventative health measures for underserved populations.",
    "In 2023, we funded the construction and renovation of healthcare facilities, provided medical equipment to rural hospitals, and launched health awareness programs. These initiatives are designed to ensure that vulnerable communities have access to life-saving treatments and healthcare services. Additionally, our efforts extend to promoting preventative healthcare to mitigate the impact of diseases and improve overall community well-being."
    ],
  },
  {
    title: "Environment: Sustainable Solutions for a Better Future",
    image: "/csr_3.jpeg",
    text: ["Environmental sustainability is a critical part of our corporate responsibility. At Jai Sarda Group, we are committed to contributing to environmental conservation and climate action. Through the Satyanarayan Mandir Trust, we have invested in projects focused on sustainable practices, including afforestation initiatives, waste management solutions, and clean water projects.",
    "Our environmental efforts aim to address pressing global challenges such as deforestation, water scarcity, and pollution, ensuring that future generations inherit a healthier planet. By fostering green practices and supporting environmental awareness campaigns, we strive to reduce our carbon footprint and encourage others to do the same."
    ],
  },
  {
    title: "A Commitment to Long-Term Impact",
    image: "/about_us4.jpg",
    text: ["Through the support of our generous donors and partners, the Satyanarayan Mandir Trust continues to make a lasting impact on communities and the environment. The ₹40 Crore raised in 2023 is just the beginning of a journey towards sustainable development, and we are committed to continuing our efforts with transparency, accountability, and measurable results.",
    "At Jai Sarda Group, we firmly believe in the power of corporate social responsibility to create meaningful change. By addressing education, healthcare, and environmental sustainability, we are helping to build a more equitable, healthy, and sustainable world for everyone."
    ],
  }
];

export default function CSR() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="py-24 px-4 sm:px-8 lg:px-16">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-navy mb-6">
          Corporate Social Responsibility
        </h1>

        {/* Introduction */}
        <p className="text-lg text-center text-gray-700 max-w-7xl mx-auto mb-6 px-4">
         At Jai Sarda Group, we believe in giving back to society and making a positive impact on the communities where we operate. Through our CSR arm, the Satyanarayan Mandir Trust, we are dedicated to driving meaningful social change and improving the quality of life for underserved populations. Our approach to corporate responsibility is grounded in a commitment to support education, healthcare, and environmental sustainability.
        </p>
        <p className="text-lg text-center text-gray-700 max-w-7xl mx-auto mb-12 px-4">
          In 2023, we made significant strides with our CSR initiatives, raising an impressive ₹40 Crore to fund and scale projects that directly benefit those in need. This fundraising effort has resulted in a sustained annual impact of over ₹16 Crore, with the funds being allocated across key focus areas: education, healthcare, and environmental sustainability.
        </p>

        {/* CSR Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''} 
              items-center gap-6 lg:gap-12 bg-white p-6 sm:p-8 rounded-lg shadow-lg`}
            >
              {/* Image */}
              <div className="w-full lg:w-2/5">
                <Image 
                  src={section.image} 
                  alt={section.title} 
                  width={500} 
                  height={350} 
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="w-full lg:w-3/5 space-y-4 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-4">
                  {section.title}
                </h2>
                {section.text.map((paragraph, i) => (
                  <p key={i} className="text-lg text-gray-700 leading-relaxed">{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center bg-navy text-white shadow-inner">
        <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
      </footer>
    </div>
  );
}

// export default function CSR() {
//     return (
//       <div className="min-h-screen bg-gray-100 text-gray-900">
//         {/* Navbar */}
//         <Navbar />
  
//         {/* Main Content */}
//         <div className="py-28 px-6">
//           <h1 className="text-5xl font-extrabold text-center text-navy mb-6">Corporate Social Responsibility</h1>
          
//           {/* New Introduction Paragraph */}
//           <p className="text-lg text-center text-gray-700 max-w-7xl mx-auto mb-6">
//           At Jai Sarda Group, we believe in giving back to society and making a positive impact on the communities where we operate. Through our CSR arm, the Satyanarayan Mandir Trust, we are dedicated to driving meaningful social change and improving the quality of life for underserved populations. Our approach to corporate responsibility is grounded in a commitment to support education, healthcare, and environmental sustainability.
//           </p>
//           <p className="text-lg text-center text-gray-700 max-w-7xl mx-auto mb-12">
//           In 2023, we made significant strides with our CSR initiatives, raising an impressive ₹40 Crore to fund and scale projects that directly benefit those in need. This fundraising effort has resulted in a sustained annual impact of over ₹16 Crore, with the funds being allocated across key focus areas: education, healthcare, and environmental sustainability.
//           </p>
  
//           <div className="space-y-12">
//             {sections.map((section, index) => (
//               <div
//                 key={index}
//                 className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} 
//                 items-center gap-6 bg-white p-8 rounded-lg shadow-lg`}
//               >
//                 {/* Image */}
//                 <Image src={section.image} alt={section.title} width={400} height={300} className="rounded-lg md:w-2/5" />
  
//                 {/* Text Section with increased width */}
//                 <div className={`w-full md:w-3/5 space-y-4 ${index % 2 === 0 ? 'text-left md:text-center' : 'text-right md:text-center'}`}>
//                   <h2 className="text-3xl font-bold text-navy mb-4">{section.title}</h2>
//                   {section.text.map((paragraph, i) => (
//                     <p key={i} className="text-lg text-gray-700 mb-4">{paragraph}</p>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       {/* Footer */}
//       <footer className="py-6 text-center bg-navy text-white shadow-inner">
//         <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
//       </footer>
//     </div>
      
//     );
//   }
