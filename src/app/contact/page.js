import React from "react";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-200 flex flex-col justify-between">
      <Navbar />
      
      {/* Main Content */}
      <div className="flex flex-col items-center px-6 py-24 flex-grow">
        {/* Heading */}
        <h1 className="text-4xl font-bold text-black text-center mb-4">Connect With Us</h1>
        <p className="text-gray-700 text-center max-w-3xl mb-6">
          We would love to respond to your queries and help you succeed. Feel free to get in touch with us.
        </p>

        {/* Contact Form & Info */}
        <div className="bg-white rounded-lg shadow-lg flex flex-col md:flex-row w-full max-w-4xl">
          
          {/* Form Section */}
          <div className="w-full md:w-2/3 p-6">
            <h2 className="text-xl font-bold text-navy mb-4">Send your request</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Name" className="border-b p-2 w-full outline-none" />
                <input type="text" placeholder="Phone" className="border-b p-2 w-full outline-none" />
                <input type="email" placeholder="Email" className="border-b p-2 w-full outline-none" />
                <input type="text" placeholder="Subject" className="border-b p-2 w-full outline-none" />
              </div>
              <textarea placeholder="Your Message" className="border-b p-2 w-full outline-none h-24"></textarea>
              <button className="bg-navy text-white px-6 py-2 rounded-lg mt-4 hover:bg-lbrown w-full sm:w-auto">
                SEND
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full md:w-1/3 bg-navy text-white p-6 flex flex-col justify-center items-center md:items-start">
            <h2 className="text-lg font-bold mb-4 text-center md:text-left">Reach Us</h2>
            <p className="text-center md:text-left"><strong>Email:</strong> contactus@jaisardagroup.com</p>
            <br />
            <p className="text-center md:text-left"><strong>Address:</strong> <br /> Jai Heights, Kotri Road, Kota <br /> Rajasthan, 324001</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center bg-navy text-white shadow-inner">
        <p>&copy; 2019 - 25 Jai Sarda Group. All rights reserved.</p>
      </footer>
    </div>
  );
}



// import React from "react";
// import Navbar from "@/components/Navbar";
// import Image from "next/image";

// export default function Contact() {
//   return (
//     <div className="min-h-screen bg-gray-200 flex flex-col justify-center items-center p-10 py-24">
//       <Navbar />
//       <h1 className="text-4xl font-bold text-black mb-2">Connect With Us</h1>
//       <p className="text-gray-700 text-center max-w-4xl mb-6">
//         We would love to respond to your queries and help you succeed. Feel free to get in touch with us.
//       </p>
      
//       <div className="bg-white rounded-lg shadow-lg flex w-full max-w-4xl">
//         {/* Form Section */}
//         <div className="w-2/3 p-8">
//           <h2 className="text-xl font-bold text-navy mb-4">Send your request</h2>
//           <form className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <input type="text" placeholder="Name" className="border-b p-2 w-full outline-none" />
//               <input type="text" placeholder="Phone" className="border-b p-2 w-full outline-none" />
//               <input type="email" placeholder="Email" className="border-b p-2 w-full outline-none" />
//               <input type="text" placeholder="Subject" className="border-b p-2 w-full outline-none" />
//             </div>
//             <textarea placeholder="Your Message" className="border-b p-2 w-full outline-none h-24"></textarea>
//             <button className="bg-navy text-white px-6 py-2 rounded-lg mt-4 hover:bg-lbrown">SEND</button>
//           </form>
//         </div>
        
//         {/* Contact Info Section */}
//         <div className="w-1/3 bg-navy text-white p-8 flex flex-col justify-center">
//           <h2 className="text-lg font-bold mb-4">Reach Us</h2>
//           <p><strong>Email:</strong> contactus@jaisardagroup.com</p>
//           <br/>
//           {/* <p><strong>Phone:</strong> +1 012 345 6789</p> */}
//           <p><strong>Address:</strong> <br/>Jai Heights<br/>Kotri Road, Kota<br/>Rajasthan, 324001</p>
//         </div>
//       </div>
//     </div>
//   );
// }

