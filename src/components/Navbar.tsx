'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="flex items-center gap-2 md:gap-3 z-[60]">
        <Image src="/padalkar_logo-removebg-preview.png" alt="Logo" width={80} height={80} className="object-contain w-14 h-14 md:w-24 md:h-24 transition-all duration-300" />
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
        className="lg:hidden z-[60] p-2 focus:outline-none"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between relative">
          <motion.span 
            animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className={`w-full h-1 rounded-full transition-colors ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'}`}
          />
          <motion.span 
            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            className={`w-full h-1 rounded-full transition-colors ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'}`}
          />
          <motion.span 
            animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className={`w-full h-1 rounded-full transition-colors ${scrolled || mobileMenuOpen ? 'bg-primary' : 'bg-white'}`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#f9fff9] z-50 shadow-2xl flex flex-col lg:hidden pt-28"
            >
              <div className="px-6 mb-8">
                <Image src="/padalkar logo.png" alt="Logo" width={60} height={60} className="rounded-full bg-white shadow-md p-1" />
                <p className="text-primary font-bold mt-2">पडळकर दूध संकलन केंद्र</p>
              </div>

              <nav className="flex flex-col px-6">
                {links.map((item, idx) => (
                  <motion.a 
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                    key={idx} 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-bold text-xl text-primary py-4 border-b border-primary/10 hover:text-secondary flex items-center justify-between group"
                  >
                    <span>{item.name}</span>
                    <span className="text-secondary opacity-0 group-hover:opacity-100 transition-all">→</span>
                  </motion.a>
                ))}
              </nav>
              
              <div className="mt-auto p-8 bg-primary/5 border-t border-primary/10">
                <p className="text-sm text-gray-500 font-semibold mb-2 flex items-center gap-2">
                  <span>📞</span> संपर्क करा:
                </p>
                <p className="text-primary font-bold text-lg">9356980450</p>
                <div className="mt-4 flex gap-3">
                   <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">FB</div>
                   <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs">IG</div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
