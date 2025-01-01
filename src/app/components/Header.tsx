'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-blue-500 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold font-serif">Blog Hub</h1>
        <nav className="hidden md:flex space-x-6">
  <Link href="/" className="hover:underline">
    Home
  </Link>
  <Link href="/blog" className="hover:underline">
    Blog
  </Link>
  <Link href="/about" className="hover:underline">
    About Us
  </Link>
  <Link href="/contact" className="hover:underline">
    Contact
  </Link>
</nav>

        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>
      </div>

     {/* Mobile Menu */}
{isMenuOpen && (
  <div className="md:hidden bg-blue-600 px-4 py-6 space-y-6 rounded-lg shadow-lg absolute top-16 left-1/2 transform -translate-x-1/2 z-50 w-11/12">
    <Link 
      href="/" 
      className="block text-white text-xl font-semibold hover:text-blue-400 text-center"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Home
    </Link>
    <Link 
      href="/blog" 
      className="block text-white text-xl font-semibold hover:text-blue-400 text-center"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Blog
    </Link>
    <Link 
      href="/about" 
      className="block text-white text-xl font-semibold hover:text-blue-400 text-center"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      About Us
    </Link>
    <Link 
      href="/contact" 
      className="block text-white text-xl font-semibold hover:text-blue-400 text-center"
      onClick={() => setIsMenuOpen(false)} // Close menu on click
    >
      Contact
    </Link>
  </div>
)}


    </header>
  );
}
