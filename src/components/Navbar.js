import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    // <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4 flex justify-between items-center">
    //   {/* Logo */}
    //   <div className="flex items-center">
    //     <Image src="/logo.png" alt="Logo" width={50} height={50} className="mr-3" />
    //     <span className="text-xl font-bold text-blue-900">Jai Sarda Group</span>
    //   </div>

    //   {/* Navigation Links */}
    //   <div className="space-x-6">
    //     <Link href="/" className="text-gray-700 hover:text-blue-900 font-medium">Home</Link>
    //     <Link href="/about" className="text-gray-700 hover:text-blue-900 font-medium">About Us</Link>
    //     <Link href="/business" className="text-gray-700 hover:text-blue-900 font-medium">Our Business</Link>
    //     <Link href="/team" className="text-gray-700 hover:text-blue-900 font-medium">Team</Link>
    //     <Link href="/contact" className="text-gray-700 hover:text-blue-900 font-medium">Contact Us</Link>
    //   </div>
    // </nav>
    // {/* Navigation Bar */}
    <nav className="bg-navy bg-opacity-90 backdrop-blur-md shadow-lg p-4 flex justify-between items-center fixed w-full top-0 z-50">
      <div className="flex items-center space-x-4">
        <Image src="/logo.png" alt="Jai Sarda Group Logo" width={50} height={50} className="rounded-full" />
        <h1 className="text-2xl font-extrabold text-white">Jai Sarda Group</h1>
      </div>
      <ul className="flex space-x-6 text-lg text-white">
        <li><Link href="/" className="hover:text-cyan-400 transition-all">Home</Link></li>
        <li><Link href="/about" className="hover:text-cyan-400 transition-all">About Us</Link></li>
        <li><Link href="/business" className="hover:text-cyan-400 transition-all">Our Businesses</Link></li>
        <li><Link href="/CSR" className="hover:text-cyan-400 transition-all">CSR</Link></li>
        <li><Link href="/contact" className="hover:text-cyan-400 transition-all">Contact</Link></li>
      </ul>
    </nav>
  );
}
