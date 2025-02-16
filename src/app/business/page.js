"use client";
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const businesses = [
  { 
    id: "Apparel Division", 
    title: "Apparel Division",
    image: "/Bussines_1.jpg", // <-- Custom Image 
    sections: [
      {
        text: [
          "**Our Legacy and Expertise**",
          "Our apparel division focuses on providing high-quality business wear, ethnic wear, and casual wear for the modern individual. We partner with renowned brands like Raymond and Manyavar, offering their premium collections that reflect the perfect blend of tradition, sophistication, and contemporary style. Whether it's formal business attire, elegant ethnic wear for cultural celebrations, or comfortable casual clothing, we deliver timeless fashion that meets the diverse needs of our customers.",
          "In addition to retail offerings, we operate a dedicated production facility that manufactures suiting fabrics tailored for corporate clients. This facility is equipped with advanced technology and skilled artisans to ensure that every fabric meets the highest standards of quality, offering businesses bespoke solutions for their workforce or retail lines."
        ],
        image: "/apparel_1.jpg"
      },
      {
        text: [
          "**Commitment to Quality and Innovation**",
          "At Jai Sarda Group, we believe that quality is at the heart of everything we do. Our commitment to delivering world-class suiting fabrics and materials is unwavering. We focus on innovation, comfort, and durability, ensuring our products meet the ever-evolving demands of the corporate world. By continuously investing in state-of-the-art technology and advanced manufacturing techniques, we are able to produce fabrics that combine style, strength, and functionality.",
          "Our rigorous quality control processes ensure that every batch of fabric meets the highest global standards. Whether we are producing fabrics for large-scale corporations or providing tailored suiting solutions for smaller enterprises, we pride ourselves on consistently delivering products that exceed our clients' expectations."
        ],
        image: "/apparel_2.jpg"
      },
      {
        text: [
          "**Manufacturing Excellence**",
          "With modern machinery and infrastructure in place, Jai Sarda Group has built manufacturing units capable of handling large-scale production while maintaining exceptional quality. We employ state-of-the-art technology and have a dedicated team of professionals who work tirelessly to produce superior fabrics for our corporate clientele.",
          "Our facility is equipped to handle a wide range of suiting materials, and our well-organized production processes ensure timely delivery, meeting the tightest deadlines and the highest standards. We offer flexible, customized solutions for businesses in need of premium fabrics, whether for corporate uniforms, retail lines, or bespoke projects.",
          "With an annual production capacity that includes:",
          "- 450 tons of yarn per day",
          "- 350,000 meters of fabric per day",
          // "- 150 tons of fiber per day",
          // "- 10,000 kg of woolen yarn per day"
        ],
        image: "/apparel_3.webp"
      },
      {
        text: [
          "**Global Reach and Clientele**",
          "As our production capabilities have expanded, so has our client base. Today, Jai Sarda Group supplies suiting materials to leading brands across India and internationally. Our global clientele trusts us for our high-quality fabrics and on-time delivery, making us a reliable partner for companies across a wide range of industries",
          "We continue to build and strengthen our extensive distribution network, ensuring that our products are readily available to clients both domestically and internationally. As we look to expand our reach in markets like the US and UK, we are committed to ensuring that every client receives the same level of service and product excellence that has defined us for over two decades."
        ],
        image: "/apparel_4.jpg"
      },
      {
        text: [
          "- Decades of Expertise: Over 20 years of experience in the textile industry, specializing in suiting fabrics for corporate clients.",
          "- Global Clientele: Trusted by leading businesses worldwide for premium-quality suiting materials.",
          "- Advanced Manufacturing: Equipped with state-of-the-art machinery and technology for large-scale, high-quality production.",
          "- Quality Assurance: Stringent quality control processes that ensure every product meets global standards.",
          "- Customer-Focused: A deep commitment to customer satisfaction, delivering tailored solutions and on-time deliveries.",
          "- Extensive Distribution Network: Efficient, reliable distribution channels ensuring timely deliveries to clients both in India and internationally."
        ],
        image: "/WHY_US.png"
      }
    ]
  },
  { 
    id: "Battery Recycling Division", 
    title: "Battery Recycling Division", 
    image: "/Bussines_2.jpg",
    sections: [
      {
        text: [
          "**The Challenge**",
          "The climate crisis is no longer a distant threat—it is happening right now. With rising temperatures, erratic weather patterns, and increasing natural disasters like droughts, floods, and hurricanes, the world is facing an urgent need for sustainable solutions. At the heart of the solution lies the shift away from fossil fuels toward cleaner, renewable energy sources. A key enabler of this transformation is lithium-ion battery recycling.",
          "As the demand for clean energy intensifies, the need to secure the raw materials for energy storage solutions becomes critical. Lithium-ion batteries are at the core of energy storage technologies, from electric vehicles (EVs) to grid-scale storage systems. However, as we rely more on these batteries, the dependency on mining for raw materials like lithium, cobalt, and nickel also grows—creating an environmental and ethical challenge."
        ],
        image: "/battery_1.webp"
      },
      {
        text: [
          "**The Solution**",
          "At Jai Sarda Group, we are accelerating the shift towards a sustainable energy ecosystem through lithium-ion battery recycling. We envision a world where the lifecycle of battery materials is maximized through recycling, repurposing, and low-carbon refining, creating a closed-loop supply chain that reduces waste, lowers costs, and enhances energy security.",
          "Our focus is on building a zero-waste battery materials supply chain. Through the recovery and repurposing of critical raw materials such as lithium, cobalt, and nickel, we can reduce the need for mining and the environmental degradation that comes with it. By recycling used batteries, we aim to lower the overall battery costs, making clean energy storage solutions more affordable and accessible to the masses."
        ],
        image: "/battery_2.jpg"
      },
      {
        text: [
          "- Sustainable Practices: We are committed to creating a 100% circular supply chain for lithium-ion batteries, reducing the need for mining and protecting the environment.",
          "- Energy Security: By recycling and repurposing critical battery materials, we are enhancing global energy security and advancing the transition to clean, renewable energy.",
          "- Cutting-Edge Technology: Our state-of-the-art battery recycling facility is equipped with the latest technology, ensuring high-efficiency recovery and minimal environmental impact.",
          "- Circular Economy: We are building a sustainable, zero-waste ecosystem, reducing costs, and promoting responsible, ethical sourcing of battery materials.",
          "- Global Impact: As part of the growing movement toward a climate-conscious energy future, our solutions help reduce the carbon footprint of energy storage technologies and support industries striving for net-zero emissions."
        ],
        image: "/WHY_US.png"
      }
    ]
  },
  { 
    id: "Investment Division", 
    title: "Investment Division", 
    image: "/Bussines_3.jpg",
    sections: [
      {
        text: [
          "At Jai Sarda Group, our Investment Division is driven by a vision to create long-term value while focusing on responsible investing and sustainable growth. We believe in balancing financial returns with a commitment to Environmental, Social, and Governance (ESG) principles. By integrating ESG factors into our investment strategy, we not only aim to maximize returns but also contribute to a more sustainable, equitable, and ethical future. Our approach to responsible investing ensures that the investments we make generate positive economic, social, and environmental impacts.",
          "We focus on identifying high-potential opportunities across a broad spectrum of asset classes, including real estate, private equity, alternative investment funds (AIFs), portfolio management services (PMS), and other financial products. Our team of experienced professionals employs a blend of traditional and innovative investment strategies to build a resilient portfolio, one that can navigate market fluctuations while generating stable, long-term capital appreciation."],
        image: "/invest_0.png"
      },
      {
        text: [
          "**Our Investment Strategy: Focused on ESG Values**",
          "At Jai Sarda Group, we believe that the future of investing is intrinsically tied to sustainability. Our investment strategy integrates ESG principles, ensuring that we make investment decisions that prioritize long-term value creation, ethical practices, and positive societal impact. By evaluating potential investments not only for their financial returns but also their social and environmental contributions, we aim to build a diversified portfolio that is in harmony with our broader sustainability goals.",
          "Our commitment to ESG-driven investments means that we carefully consider factors such as carbon emissions, social equity, and corporate governance practices when assessing opportunities. This approach allows us to create a well-rounded, future-proof portfolio that generates financial growth while fostering a positive impact on the world."],
        image: "/invest_1.png"
      },
      {
        text: [
          "**Environmental Impact**",
          "Environmental sustainability is a core aspect of our investment philosophy. We actively seek opportunities in industries and sectors that are at the forefront of sustainable practices and green technologies. By investing in areas such as clean energy, energy-efficient solutions, and battery recycling, we contribute to a transition towards a low-carbon economy. As part of our commitment to ESG principles, we focus on investments that reduce environmental footprints and promote innovations that will help combat climate change.",
          "**Social Responsibility**",
          "We understand that social impact is integral to long-term value creation. At Jai Sarda Group, we prioritize investments that promote social equity, community development, and inclusive growth. Whether it's supporting workplace diversity, improving education and healthcare access, or backing social enterprises, we aim to make a difference through our investments. By integrating ESG factors into our decision-making process, we ensure that our investments not only yield returns but also benefit society as a whole.",
          "**Governance and Ethical Practices**",
          "Good governance is key to sustainable growth. Our investment decisions are shaped by our commitment to strong corporate governance, ethical leadership, and transparency. We invest in companies that have well-established governance frameworks, adhere to ethical business practices, and demonstrate transparency and accountability in their operations. By focusing on strong governance, we ensure that our investments are not only financially sound but also aligned with our values of integrity and responsibility."
          ],
        image: "/invest_2.png"
      },
      {
        text: [
          "**Our Commitment to Growth**",
          "As we look to the future, our Investment Division remains committed to maintaining a diversified portfolio that maximizes returns while adhering to our ESG principles. We will continue to seek out opportunities across global markets, particularly in sectors that align with our values of sustainability and responsibility. Whether it's renewable energy, technology, infrastructure, or clean solutions, we are focused on identifying investments that support long-term growth while contributing to a more sustainable, ethical, and inclusive future.",
          "At Jai Sarda Group, we believe that responsible investing, guided by ESG principles, is both a strategic imperative and an opportunity to drive meaningful change. Our goal is to create lasting value for our stakeholders by investing in projects, businesses, and technologies that benefit not only our investors but also the environment and society at large."
          ],
        image: "/invest_3.jpg"
      }
    ]
  }
];

export default function OurBusiness() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Navbar />
      <h1 className="text-5xl font-extrabold text-center backdrop-blur-md text-navy py-16 px-6 mt-24">
        Our Businesses
      </h1>

      <div className="flex justify-center gap-9 mt-1 mb-20">
        {businesses.map((business) => (
          <div
            key={business.id}
            className="cursor-pointer bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 text-center w-[350px] h-[350px] flex flex-col items-center"
            onClick={() =>
              document.getElementById(business.id).scrollIntoView({ behavior: "smooth" })
            }
          >
            <div className="w-full h-[350px] flex items-center justify-center">
              <Image
                src={business.image}
                alt={business.title}
                width={300}
                height={300}
                className="rounded-lg object-cover aspect-square"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Business Sections */}
      <div className="space-y-16">
        {businesses.map((business) => (
          <div key={business.id} id={business.id} className="scroll-mt-24 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-5xl font-bold text-navy mb-8 text-center">{business.title}</h2>

            {business.sections.map((section, i) => (
              <div key={i} className={`flex ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} items-center gap-6 mb-6`}>
                <Image src={section.image} alt={business.title} width={400} height={300} className="rounded-lg w-full md:w-1/2" />

                <div className="flex-1 text-lg text-gray-700">
                  {Array.isArray(section.text) ? (
                    section.text.map((para, index) => {
                      if (para.startsWith("**") && para.endsWith("**")) {
                        // Bold and colored headings
                        return (
                          <p key={index} className="mb-4 font-bold text-navy">
                            {para.replace(/\*\*/g, "")}
                          </p>
                        );
                      } else if (para.startsWith("- ")) {
                        // Bullet points
                        return (
                          <ul key={index} className="list-disc ml-6">
                            <li>{para.substring(2)}</li>
                          </ul>
                        );
                      } else {
                        return <p key={index} className="mb-4">{para}</p>;
                      }
                    })
                  ) : (
                    <p>{section.text}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
        {/* Footer */}
        <footer className="py-6 text-center bg-navy text-white shadow-inner">
        <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
        </footer>
    </div>
  );
}

// "use client";
// import React from "react";
// import Image from "next/image";
// import Navbar from "@/components/Navbar";

// const businesses = [
//   { 
//     id: "Apparel Division", 
//     title: "Apparel Division",
//     image: "/Bussines_1.jpg", // <-- Custom Image 
//     sections: [
//       {
//         text: [
//           "Our Legacy and Expertise",
//           "Our apparel division focuses on providing high-quality business wear, ethnic wear, and casual wear for the modern individual. We partner with renowned brands like Raymond and Manyavar, offering their premium collections that reflect the perfect blend of tradition, sophistication, and contemporary style. Whether it's formal business attire, elegant ethnic wear for cultural celebrations, or comfortable casual clothing, we deliver timeless fashion that meets the diverse needs of our customers.",
//           "In addition to retail offerings, we operate a dedicated production facility that manufactures suiting fabrics tailored for corporate clients. This facility is equipped with advanced technology and skilled artisans to ensure that every fabric meets the highest standards of quality, offering businesses bespoke solutions for their workforce or retail lines."
//         ],
//         image: "/apparel_1.jpg"
//       },
//       {
//         text: [
//           "Commitment to Quality and Innovation",
//           "At Jai Sarda Group, we believe that quality is at the heart of everything we do. Our commitment to delivering world-class suiting fabrics and materials is unwavering. We focus on innovation, comfort, and durability, ensuring our products meet the ever-evolving demands of the corporate world. By continuously investing in state-of-the-art technology and advanced manufacturing techniques, we are able to produce fabrics that combine style, strength, and functionality.",
//           "Our rigorous quality control processes ensure that every batch of fabric meets the highest global standards. Whether we are producing fabrics for large-scale corporations or providing tailored suiting solutions for smaller enterprises, we pride ourselves on consistently delivering products that exceed our clients' expectations."
//         ],
//         image: "/apparel_2.jpg"
//       },
//       {
//         text: [
//           "Manufacturing Excellence",
//           "With modern machinery and infrastructure in place, Jai Sarda Group has built manufacturing units capable of handling large-scale production while maintaining exceptional quality. We employ state-of-the-art technology and have a dedicated team of professionals who work tirelessly to produce superior fabrics for our corporate clientele.",
//           "Our facility is equipped to handle a wide range of suiting materials, and our well-organized production processes ensure timely delivery, meeting the tightest deadlines and the highest standards. We offer flexible, customized solutions for businesses in need of premium fabrics, whether for corporate uniforms, retail lines, or bespoke projects.",
//           "With an annual production capacity that includes:",
//           "- 450 tons of yarn per day",
//           "- 350,000 meters of fabric per day",
//           // "- 150 tons of fiber per day",
//           // "- 10,000 kg of woolen yarn per day"
//         ],
//         image: "/apparel_3.webp"
//       },
//       {
//         text: [
//           "Global Reach and Clientele",
//           "As our production capabilities have expanded, so has our client base. Today, Jai Sarda Group supplies suiting materials to leading brands across India and internationally. Our global clientele trusts us for our high-quality fabrics and on-time delivery, making us a reliable partner for companies across a wide range of industries",
//           "We continue to build and strengthen our extensive distribution network, ensuring that our products are readily available to clients both domestically and internationally. As we look to expand our reach in markets like the US and UK, we are committed to ensuring that every client receives the same level of service and product excellence that has defined us for over two decades."
//         ],
//         image: "/apparel_4.jpg"
//       },
//       {
//         text: [
//           "- Decades of Expertise: Over 20 years of experience in the textile industry, specializing in suiting fabrics for corporate clients.",
//           "- Global Clientele: Trusted by leading businesses worldwide for premium-quality suiting materials.",
//           "- Advanced Manufacturing: Equipped with state-of-the-art machinery and technology for large-scale, high-quality production.",
//           "- Quality Assurance: Stringent quality control processes that ensure every product meets global standards.",
//           "- Customer-Focused: A deep commitment to customer satisfaction, delivering tailored solutions and on-time deliveries.",
//           "- Extensive Distribution Network: Efficient, reliable distribution channels ensuring timely deliveries to clients both in India and internationally."
//         ],
//         image: "/WHY_US.png"
//       }
//     ]
//   },
//   { 
//     id: "Battery Recycling Division", 
//     title: "Battery Recycling Division", 
//     image: "/Bussines_2.jpg",
//     sections: [
//       {
//         text: [
//           "The Challenge",
//           "The climate crisis is no longer a distant threat—it is happening right now. With rising temperatures, erratic weather patterns, and increasing natural disasters like droughts, floods, and hurricanes, the world is facing an urgent need for sustainable solutions. At the heart of the solution lies the shift away from fossil fuels toward cleaner, renewable energy sources. A key enabler of this transformation is lithium-ion battery recycling.",
//           "As the demand for clean energy intensifies, the need to secure the raw materials for energy storage solutions becomes critical. Lithium-ion batteries are at the core of energy storage technologies, from electric vehicles (EVs) to grid-scale storage systems. However, as we rely more on these batteries, the dependency on mining for raw materials like lithium, cobalt, and nickel also grows—creating an environmental and ethical challenge."
//         ],
//         image: "/battery_1.webp"
//       },
//       {
//         text: [
//           "The Solution",
//           "At Jai Sarda Group, we are accelerating the shift towards a sustainable energy ecosystem through lithium-ion battery recycling. We envision a world where the lifecycle of battery materials is maximized through recycling, repurposing, and low-carbon refining, creating a closed-loop supply chain that reduces waste, lowers costs, and enhances energy security.",
//           "Our focus is on building a zero-waste battery materials supply chain. Through the recovery and repurposing of critical raw materials such as lithium, cobalt, and nickel, we can reduce the need for mining and the environmental degradation that comes with it. By recycling used batteries, we aim to lower the overall battery costs, making clean energy storage solutions more affordable and accessible to the masses."
//         ],
//         image: "/battery_2.jpg"
//       },
//       {
//         text: [
//           "- Sustainable Practices: We are committed to creating a 100% circular supply chain for lithium-ion batteries, reducing the need for mining and protecting the environment.",
//           "- Energy Security: By recycling and repurposing critical battery materials, we are enhancing global energy security and advancing the transition to clean, renewable energy.",
//           "- Cutting-Edge Technology: Our state-of-the-art battery recycling facility is equipped with the latest technology, ensuring high-efficiency recovery and minimal environmental impact.",
//           "Circular Economy: We are building a sustainable, zero-waste ecosystem, reducing costs, and promoting responsible, ethical sourcing of battery materials.",
//           "- Global Impact: As part of the growing movement toward a climate-conscious energy future, our solutions help reduce the carbon footprint of energy storage technologies and support industries striving for net-zero emissions."
//         ],
//         image: "/WHY_US.png"
//       }
//     ]
//   },
//   { 
//     id: "Investment Division", 
//     title: "Investment Division", 
//     image: "/Bussines_3.jpg",
//     sections: [
//       {
//         text: [
//           "At Jai Sarda Group, our Investment Division is driven by a vision to create long-term value while focusing on responsible investing and sustainable growth. We believe in balancing financial returns with a commitment to Environmental, Social, and Governance (ESG) principles. By integrating ESG factors into our investment strategy, we not only aim to maximize returns but also contribute to a more sustainable, equitable, and ethical future. Our approach to responsible investing ensures that the investments we make generate positive economic, social, and environmental impacts.",
//           "We focus on identifying high-potential opportunities across a broad spectrum of asset classes, including real estate, private equity, alternative investment funds (AIFs), portfolio management services (PMS), and other financial products. Our team of experienced professionals employs a blend of traditional and innovative investment strategies to build a resilient portfolio, one that can navigate market fluctuations while generating stable, long-term capital appreciation."],
//         image: "/invest_0.png"
//       },
//       {
//         text: [
//           "Our Investment Strategy: Focused on ESG Values",
//           "At Jai Sarda Group, we believe that the future of investing is intrinsically tied to sustainability. Our investment strategy integrates ESG principles, ensuring that we make investment decisions that prioritize long-term value creation, ethical practices, and positive societal impact. By evaluating potential investments not only for their financial returns but also their social and environmental contributions, we aim to build a diversified portfolio that is in harmony with our broader sustainability goals.",
//           "Our commitment to ESG-driven investments means that we carefully consider factors such as carbon emissions, social equity, and corporate governance practices when assessing opportunities. This approach allows us to create a well-rounded, future-proof portfolio that generates financial growth while fostering a positive impact on the world."],
//         image: "/invest_1.png"
//       },
//       {
//         text: [
//           "Environmental Impact",
//           "Environmental sustainability is a core aspect of our investment philosophy. We actively seek opportunities in industries and sectors that are at the forefront of sustainable practices and green technologies. By investing in areas such as clean energy, energy-efficient solutions, and battery recycling, we contribute to a transition towards a low-carbon economy. As part of our commitment to ESG principles, we focus on investments that reduce environmental footprints and promote innovations that will help combat climate change.",
//           "Social Responsibility",
//           "We understand that social impact is integral to long-term value creation. At Jai Sarda Group, we prioritize investments that promote social equity, community development, and inclusive growth. Whether it's supporting workplace diversity, improving education and healthcare access, or backing social enterprises, we aim to make a difference through our investments. By integrating ESG factors into our decision-making process, we ensure that our investments not only yield returns but also benefit society as a whole.",
//           "Governance and Ethical Practices",
//           "Good governance is key to sustainable growth. Our investment decisions are shaped by our commitment to strong corporate governance, ethical leadership, and transparency. We invest in companies that have well-established governance frameworks, adhere to ethical business practices, and demonstrate transparency and accountability in their operations. By focusing on strong governance, we ensure that our investments are not only financially sound but also aligned with our values of integrity and responsibility."
//           ],
//         image: "/invest_2.png"
//       },
//       {
//         text: [
//           "Our Commitment to Growth",
//           "As we look to the future, our Investment Division remains committed to maintaining a diversified portfolio that maximizes returns while adhering to our ESG principles. We will continue to seek out opportunities across global markets, particularly in sectors that align with our values of sustainability and responsibility. Whether it's renewable energy, technology, infrastructure, or clean solutions, we are focused on identifying investments that support long-term growth while contributing to a more sustainable, ethical, and inclusive future.",
//           "At Jai Sarda Group, we believe that responsible investing, guided by ESG principles, is both a strategic imperative and an opportunity to drive meaningful change. Our goal is to create lasting value for our stakeholders by investing in projects, businesses, and technologies that benefit not only our investors but also the environment and society at large."
//           ],
//         image: "/invest_3.jpg"
//       }
//     ]
//   }
// ];

// export default function OurBusiness() {
//   return (
//     <div className="min-h-screen bg-gray-100 text-gray-900">
//       <Navbar />
//       <h1 className="text-5xl font-extrabold text-center backdrop-blur-md text-navy py-16 px-6 mt-24">Our Businesses</h1>
      
//       <div className="flex justify-center gap-9 mt-1 mb-20">
//         {businesses.map((business) => (
//           <div 
//             key={business.id} 
//             className="cursor-pointer bg-white shadow-lg p-4 rounded-lg transition-transform transform hover:scale-105 text-center w-[350px] h-[350px] flex flex-col items-center"
//             onClick={() => document.getElementById(business.id).scrollIntoView({ behavior: 'smooth' })}
//           >
//             <div className="w-full h-[350px] flex items-center justify-center">
//               <Image 
//                 src={business.image}  // <-- Custom image per business
//                 alt={business.title} 
//                 width={300} 
//                 height={300} 
//                 className="rounded-lg object-cover aspect-square"
//               />
//             </div>
//             {/* <h2 className="text-xl font-bold mt-2">{business.title}</h2> */}
//           </div>
//         ))}
//       </div>
      
//       {/* Business Sections */}
//       <div className="space-y-16">
//         {businesses.map((business) => (
//           <div key={business.id} id={business.id} className="scroll-mt-24 bg-white p-6 rounded-lg shadow-lg">
//             <h2 className="text-5xl font-bold text-navy mb-4 text-center">{business.title}</h2>

//             {business.sections.map((section, i) => (
//               <div key={i} className={`flex ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-6 mb-6`}>
//                 <Image src={section.image} alt={business.title} width={400} height={300} className="rounded-lg w-full md:w-1/2" />

//                 <div className="flex-1 text-lg text-gray-700">
//                   {Array.isArray(section.text) ? (
//                     section.text.map((para, index) => <p key={index} className="mb-4">{para}</p>)
//                   ) : (
//                     <p>{section.text}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//         {/* Footer */}
//         <footer className="py-6 text-center bg-navy text-white shadow-inner">
//         <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
//         </footer>
//     </div>
//   );
// }
