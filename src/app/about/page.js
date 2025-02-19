import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

const sections = [
  {
    title: "Our Humble Beginnings",
    image: "/about_us1.webp",
    text: [
      "Our journey started in Chaumela, a small village where our founder laid the first bricks of what would become a diverse business empire. In the early years, the vision was simple, to build a sustainable business and create a better future for the people around us. This vision led us to Kota, where in 1974, we opened our first Raymond shop, marking the beginning of our presence in the apparel industry.",
      "Kota, known for its educational institutions and bustling markets, provided the perfect platform to expand our retail footprint. The opening of the Raymond shop not only made premium fabrics and clothing more accessible to the local community, but it also established us as a trusted name in the region."
    ],
  },
  {
    title: "Expanding Horizons",
    image: "/abt_us_exp.jpg",
    text: ["With our success in the first Raymond store, we were determined to keep growing and offering more to our customers. In 1985, we opened another Raymond shop, this time in the heart of the city, continuing to build our reputation for high-quality apparel. The city of Kota, with its expanding business opportunities and evolving demand for quality garments, was the ideal setting to further cement our position as a leader in the local apparel market.",
    "In 2000, we took a bold step and diversified into ethnic wear by partnering with Manyavar, one of the country’s most respected names in traditional fashion. We opened a Manyavar shop in Kota, bringing premium ethnic clothing to the region. This move was not only about meeting the growing demand for ethnic wear but also about adding depth to our portfolio, offering our customers a diverse range of choices for various occasions, from weddings and festivals to casual outings and celebrations."
    ],
  },
  {
    title: "Entering Manufacturing",
    image: "/about_us3.webp",
    text: ["In 2005, we expanded further by establishing a dedicated manufacturing unit for suiting fabric targeted at corporate clients. Understanding the importance of quality fabric in business attire, we invested in state-of-the-art technology and set up a facility that would cater to the needs of businesses across various industries. This move allowed us to tap into a new market segment and build strong relationships with corporate clients, providing them with premium suiting materials for their employees and retail offerings.",
    "Our manufacturing unit became a cornerstone of our business, allowing us to deliver custom-made, high-quality fabrics while adhering to the highest industry standards. This facility further solidified our reputation as a comprehensive provider of business attire solutions."
    ],
  },
  {
    title: "Diversification into Investment",
    image: "/about_us4.jpg",
    text: ["As our apparel business continued to thrive, we recognized the importance of diversifying and creating long-term value through strategic investments. In 2015, we established our investment arm, marking a significant milestone in the evolution of Jai Sarda Group. This arm was created with the goal of managing company assets, diversifying across various products, and maximizing returns for our stakeholders.Our mission is to provide top-quality solutions tailored to our customers' needs, ensuring their success and satisfaction.",
    "Since then, our investment division has grown exponentially, and today, we manage assets totaling over $100 million across multiple channels, including Alternative Investment Funds (AIFs), Portfolio Management Services (PMS), and other financial products.",
    "Our investment approach is driven by a focus on sustainable growth, risk management, and long-term value creation. By leveraging our deep industry knowledge and a team of experienced professionals, we continue to unlock new opportunities for growth and expansion, both within India and globally."
    ],
  },
  {
    title: "Sustainability and Innovation in Recycling",
    image: "/about_us5.webp",
    text: ["A major turning point in our growth came in 2024, when we made a strategic acquisition of a distressed asset unit in the battery recycling sector. This facility, with a capacity of 15,000 metric tons, marked our entry into the environmental sustainability space. We have set ambitious goals to increase the unit’s capacity to 50,000 metric tons within the next three years, positioning Jai Sarda Group as a leader in the circular economy.",
    "Our battery recycling business is an important part of our vision to create a sustainable future. As we continue to expand this division, we are committed to developing innovative solutions for e-waste management, ensuring responsible recycling processes, and helping to mitigate the environmental impact of waste. By increasing capacity and improving recycling efficiency, we aim to contribute to the global effort to preserve natural resources, reduce pollution, and promote cleaner energy alternatives."
    ],
  },
  {
    title: "Looking Ahead",
    image: "/about_us6.webp",
    text: ["From our origins in a small village to becoming a diversified group with interests spanning apparel, manufacturing, investments, and sustainability, Jai Sarda Group has come a long way. But our journey doesn’t end here. We are constantly evolving, exploring new opportunities, and looking to expand into new markets. Whether it’s our continued push into the US and UK apparel markets, increasing our investment footprint, or scaling our battery recycling operations, Jai Sarda Group is committed to driving positive change in every sector we touch.",
    "As we move forward, we remain focused on our core values of quality, integrity, innovation, and sustainability. These principles have guided us throughout our journey and will continue to shape our future as we look to make an even greater impact on the world.",
    "Join us on our journey as we continue to grow, innovate, and lead with purpose, creating value for our customers, our investors, and our communities around the globe."
    ],
  }
];

export default function AboutUs() {
    return (
      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* Navbar */}
        <Navbar />
  
        {/* Main Content */}
        <div className="py-28 px-6">
          <h1 className="text-5xl font-extrabold text-center text-navy mb-6">About Us</h1>
          
          {/* New Introduction Paragraph */}
          <p className="text-lg text-center text-gray-700 max-w-7xl mx-auto mb-12">
          The story of Jai Sarda Group is one of ambition, growth, and transformation—a journey that began in a small village in Rajasthan called Chaumela. From humble beginnings, we’ve steadily built a legacy of excellence across various sectors, from apparel and manufacturing to strategic investments and sustainable practices. Our evolution is rooted in a deep sense of entrepreneurship, a commitment to quality, and a drive to create long-term value for our customers, stakeholders, and the communities we serve.
          </p>
  
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} 
                items-center gap-6 bg-white p-8 rounded-lg shadow-lg`}
              >
                {/* Image */}
                <Image src={section.image} alt={section.title} width={400} height={300} unoptimized className="rounded-lg md:w-2/5" />
  
                {/* Text Section with increased width */}
                <div className={`w-full md:w-3/5 space-y-4 ${index % 2 === 0 ? 'text-left md:text-center' : 'text-right md:text-center'}`}>
                  <h2 className="text-3xl font-bold text-navy mb-4">{section.title}</h2>
                  {section.text.map((paragraph, i) => (
                    <p key={i} className="text-lg text-gray-700 mb-4">{paragraph}</p>
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