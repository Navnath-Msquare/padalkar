'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'होम', href: '#home' },
    { name: 'आमच्याबद्दल', href: '#about' },
    { name: 'सेवा', href: '#services' },
    { name: 'गॅलरी', href: '#gallery' },
    { name: 'संपर्क', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 px-4 md:px-6 py-2 flex justify-between items-center transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200 py-2' : 'bg-primary/30 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="flex items-center gap-2 md:gap-3 z-50">
        <Image src="/padalkar_logo-removebg-preview.png" alt="Logo" width={80} height={80} className="object-contain w-16 h-16 md:w-24 md:h-24 transition-all duration-300" />
        <span className={`font-bold text-xl sm:text-2xl md:text-3xl tracking-wide transition-colors ${scrolled || mobileMenuOpen ? 'text-primary' : 'text-white'}`}>पडळकर दूध</span>
      </div>
      
      {/* Desktop Menu */}
      <nav className="hidden lg:flex gap-4">
        {links.map((item, idx) => (
          <a 
            key={idx} 
            href={item.href} 
            className={`font-semibold px-5 py-2 rounded-full transition-all duration-300 border text-sm xl:text-base ${
              scrolled 
                ? 'text-primary hover:bg-primary hover:text-white border-transparent hover:border-primary' 
                : 'text-white bg-white/10 hover:bg-secondary hover:text-[#0a260a] border-white/20 hover:border-secondary'
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle Button */}
      <button 
        className="lg:hidden z-50 p-2"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between relative">
          <span className={`w-full h-1 rounded-full transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-1 rounded-full transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`w-full h-1 rounded-full transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-transform duration-500 ease-in-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col gap-6 text-center w-full px-6">
          {links.map((item, idx) => (
            <a 
              key={idx} 
              href={item.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="font-bold text-2xl text-primary p-4 border-b border-primary/10 hover:bg-primary/5 rounded-xl transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
