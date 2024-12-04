'use client';
import { useState } from 'react';
import { Facebook, Twitter, Instagram, Menu } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo"
            width={50}
            height={50}
            className="mr-2"
          />
        </div>

        <div className="md:hidden flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-700 hover:text-blue-500" />
          </a>

          <button onClick={toggleMenu} className="text-gray-700 hover:text-blue-500">
            <Menu />
          </button>
        </div>

        <div className="hidden md:flex space-x-8">
          <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
          <a href="/news" className="text-gray-700 hover:text-blue-500">News</a>
          <a href="/international" className="text-gray-700 hover:text-blue-500">International News</a>
          <a href="/bizwire" className="text-gray-700 hover:text-blue-500">Bizwire</a>
          <a href="/sports" className="text-gray-700 hover:text-blue-500">Sports</a>
          <a href="/yamu" className="text-gray-700 hover:text-blue-500">YAMU</a>
        </div>

        <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-16 left-0 w-full bg-white shadow-md`}>
          <div className="flex flex-col space-y-4 px-4 py-2">
            <a href="/" className="text-gray-700 hover:text-blue-500">Home</a>
            <a href="/news" className="text-gray-700 hover:text-blue-500">News</a>
            <a href="/international" className="text-gray-700 hover:text-blue-500">International News</a>
            <a href="/bizwire" className="text-gray-700 hover:text-blue-500">Bizwire</a>
            <a href="/sports" className="text-gray-700 hover:text-blue-500">Sports</a>
            <a href="/yamu" className="text-gray-700 hover:text-blue-500">YAMU</a>
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <Facebook className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="text-gray-700 hover:text-blue-500" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="text-gray-700 hover:text-blue-500" />
          </a>
        </div>
      </div>
    </nav>
  );
}
