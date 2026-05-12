'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  '/images/hero.png',
  '/images/cans.png',
  '/images/landscape.png',
  '/images/cow.png',
  '/images/milk_testing.png',
  '/images/happy_farmer.png',
  '/images/dairy_transport.png',
  '/images/dairy_products.png',
  '/images/dairy_equipment.png',
  '/images/cow_feeding.png',
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Show only 6 images initially (2 rows of 3 on desktop)
  const displayedImages = showAll ? images : images.slice(0, 6);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {displayedImages.map((img, i) => (
            <motion.div 
              key={img} 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="relative h-72 rounded-2xl overflow-hidden shadow-md group cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <Image 
                src={img} 
                alt={`Gallery image ${i+1}`} 
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View Full</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!showAll && images.length > 6 && (
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setShowAll(true)}
            className="px-8 py-3 bg-secondary text-bg-dark font-bold rounded-full hover:bg-accent transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            आणखी फोटो पहा (Load More)
          </button>
        </div>
      )}

      {showAll && (
        <div className="mt-10 flex justify-center">
          <button 
            onClick={() => setShowAll(false)}
            className="px-8 py-3 bg-gray-200 text-gray-800 font-bold rounded-full hover:bg-gray-300 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            कमी फोटो पहा (Show Less)
          </button>
        </div>
      )}

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking on image
            >
              <Image 
                src={selectedImage} 
                alt="Full screen gallery image" 
                fill 
                className="object-contain" 
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors text-xl z-50"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
