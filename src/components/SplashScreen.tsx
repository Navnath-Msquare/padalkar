'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const SplashScreen: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const columns = 5;
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Hide splash screen after 3.5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000); // Wait for exit animation to finish before unmounting
    }, 3500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden pointer-events-none bg-[#f9fff9]">
          {/* 
            Dairy Atmosphere Layer
            Using a clean, fresh background with subtle green/yellow tones
          */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#ffffff] via-[#f0fdf0] to-[#e6ffe6]" />
            
            {/* Subtle Grid */}
            <div 
              className="absolute inset-0 opacity-[0.03]" 
              style={{ 
                backgroundImage: `linear-gradient(#1a5d1a 1px, transparent 1px), linear-gradient(90deg, #1a5d1a 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} 
            />
            
            {/* Animated Glow */}
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/20 blur-[120px] rounded-full"
            />
          </div>

          {/* 
            Glassy Staggered Exit Columns
          */}
          <div className="absolute inset-0 flex z-[10]">
            {[...Array(columns)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ y: '0%' }}
                exit={{ 
                  y: '-100%',
                  transition: { 
                    duration: 0.9, 
                    ease: [0.76, 0, 0.24, 1],
                    delay: i * 0.1 
                  } 
                }}
                className="h-full bg-white/95 backdrop-blur-xl border-r border-primary/5"
                style={{ width: `${100 / columns}%` }}
              />
            ))}
          </div>

          {/* 
            Central Content (Logo)
          */}
          <motion.div
            exit={{ 
              opacity: 0, 
              scale: 0.9,
              filter: 'blur(12px)',
              transition: { duration: 0.5 } 
            }}
            className="relative z-[20] flex flex-col items-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, filter: 'blur(15px)' }}
              animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative px-12 py-8"
            >
              {/* Glow Aura */}
              <div className="absolute inset-0 bg-primary/10 blur-3xl rounded-full scale-75 opacity-70" />
              
              <div className="relative flex justify-center w-[300px] md:w-[450px]">
                <Image
                  src="/padalkar_logo-removebg-preview.png"
                  alt="Padalkar Dairy"
                  width={450}
                  height={450}
                  priority
                  className="object-contain drop-shadow-[0_0_20px_rgba(26,93,26,0.15)]"
                />
                
                {/* Elegant Scanline / Processing Line */}
                <motion.div 
                  className="absolute -bottom-2 left-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ width: 0, opacity: 0, x: '-50%' }}
                  animate={{ width: '200%', opacity: 1, x: '0%' }}
                  transition={{ delay: 0.5, duration: 1.5, ease: "easeInOut" }}
                />
              </div>
            </motion.div>

            {/* Technical Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.8, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-8 flex flex-col items-center gap-2"
            >
              <span className="text-primary text-lg tracking-[0.4em] font-extrabold uppercase mt-4">
                शुद्धता आणि विश्वासाचे प्रतीक
              </span>
              <div className="flex gap-1.5 mt-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ 
                      duration: 1.5, 
                      repeat: Infinity, 
                      delay: i * 0.3 
                    }}
                    className="w-2 h-2 bg-secondary rounded-full"
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
