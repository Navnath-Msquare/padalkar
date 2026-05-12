'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 px-6 py-2 flex justify-between items-center transition-all duration-300 border-b ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-gray-200 py-2' : 'bg-primary/30 backdrop-blur-sm border-transparent py-4'
      }`}
    >
      <div className="flex items-center gap-3">
        <Image src="/padalkar_logo-removebg-preview.png" alt="Logo" width={80} height={80} className="object-contain w-20 h-20 md:w-24 md:h-24 transition-all duration-300" />
        <span className={`font-bold text-2xl md:text-3xl tracking-wide transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>पडळकर दूध</span>
      </div>
      <nav className="hidden md:flex gap-4">
        {['होम', 'आमच्याबद्दल', 'सेवा', 'गॅलरी', 'संपर्क'].map((item, idx) => {
          const links = ['#home', '#about', '#services', '#gallery', '#contact'];
          return (
            <a 
              key={idx} 
              href={links[idx]} 
              className={`font-semibold px-6 py-2 rounded-full transition-all duration-300 border ${
                scrolled 
                  ? 'text-primary hover:bg-primary hover:text-white border-transparent hover:border-primary' 
                  : 'text-white bg-white/10 hover:bg-secondary hover:text-[#0a260a] border-white/20 hover:border-secondary'
              }`}
            >
              {item}
            </a>
          );
        })}
      </nav>
    </header>
  );
}
