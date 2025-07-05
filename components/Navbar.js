import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu visibility

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Screenshots', path: '/screenshots' },
    { name: 'Support Group', path: '/support-group' },
    { name: 'Buy', path: '/buy' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div className="
        max-w-7xl mx-auto
        relative
        rounded-full
        shadow-lg
        border border-gray-700
        bg-black bg-opacity-80
        py-2 px-4
        flex items-center justify-between
      ">
        {/* You might want a logo or title here for larger screens */}
        <div className="flex-shrink-0 text-white text-lg font-bold">
          {/* Replace with your actual logo or brand name */}
          <Link href="/">Ineffable Hub Plus</Link>
        </div>

        {/* Hamburger menu icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle navigation"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="
          hidden md:flex
          items-center
          space-x-4
          font-inter
        ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`
                px-4 py-2
                rounded-full
                text-sm font-medium
                transition-all duration-300 ease-in-out
                antialiased
                ${router.pathname === link.path
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu - Shown when isOpen is true */}
      {isOpen && (
        <div className="
          md:hidden
          bg-black
          rounded-3xl
          shadow-lg
          mt-2 mx-auto
          max-w-fit
          p-10
          flex flex-col items-center space-y-2
        ">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setIsOpen(false)} 
              className={`
                w-full text-center
                px-4 py-2
                rounded-3xl

                text-base font-medium
                transition-all duration-300 ease-in-out
                ${router.pathname === link.path
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white'}
              `}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
