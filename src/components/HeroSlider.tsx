'use client';

import { useState, useEffect } from 'react';

const slides = [
  {
    image: '/images/hero.png',
    title: 'पडळकर दूध संकलन केंद्र',
    subtitle: 'शुद्धता आणि विश्वासाचे दुसरे नाव'
  },
  {
    image: '/images/cans.png',
    title: 'आधुनिक संकलन व्यवस्था',
    subtitle: 'शेतकऱ्यांच्या प्रगतीसाठी कटिबद्ध'
  },
  {
    image: '/images/landscape.png',
    title: 'बंडगरवाडीचे वैभव',
    subtitle: 'दर्जेदार दुधाची खात्री'
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="h-screen w-full relative overflow-hidden flex items-center justify-center" id="home">
      <div className="absolute top-0 left-0 w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
          </div>
        ))}
      </div>
      
      <div className="relative z-20 text-center text-white px-5 animate-fade-in-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-5 drop-shadow-lg">{slides[current].title}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">{slides[current].subtitle}</p>
        <a 
          href="#contact" 
          className="inline-block px-8 py-4 bg-secondary text-bg-dark font-bold rounded-full transition-transform duration-300 hover:scale-105 hover:bg-accent shadow-[0_5px_20px_rgba(249,217,73,0.4)]"
        >
          आमच्याशी संपर्क साधा
        </a>
      </div>
    </section>
  );
}
