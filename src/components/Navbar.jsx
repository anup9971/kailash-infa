"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // for icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-md fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-700">Kailash</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#">Products</Link></li>
          <li><Link href="#">Services</Link></li>
          <li><Link href="#">About</Link></li>
          <li><Link href="#">Client</Link></li>
          <li><Link href="#">Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-blue-700 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col items-center space-y-4 py-6 font-medium">
            <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Products</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Services</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>About</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Client</Link></li>
            <li><Link href="#" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
