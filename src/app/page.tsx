'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSlider from '@/components/HeroSlider';
import SplashScreen from '@/components/SplashScreen';
import Gallery from '@/components/Gallery';
import Services from '@/components/Services';
import Image from 'next/image';

export default function Home() {
  const [splashFinished, setSplashFinished] = useState(false);

  return (
    <>
      {/* Show Splash Screen on load */}
      {!splashFinished && (
        <SplashScreen onComplete={() => setSplashFinished(true)} />
      )}

      {/* Main Content, wait for splash to finish to enable scrolling */}
      <main className={`font-sans text-gray-800 bg-white overflow-x-hidden ${!splashFinished ? 'h-screen overflow-hidden' : ''}`}>
        <Navbar />
        <HeroSlider />

        {/* About Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16 md:space-y-24" id="about">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl text-primary font-bold relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-secondary after:rounded-sm">आमच्याबद्दल</h2>
          </div>
          
          {/* Row 1: Text Left, Photo Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-2 lg:order-1 space-y-6">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm mb-2 block">पडळकर दूध संकलन केंद्र</span>
              <h3 className="text-3xl md:text-4xl text-primary font-extrabold mb-6 leading-snug">
                बंडगरवाडीतील शेतकऱ्यांचे विश्वासाचे केंद्र
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                आमचे दूध संकलन केंद्र केवळ एक व्यावसायिक संस्था नसून, बंडगरवाडी आणि आसपासच्या परिसरातील शेतकऱ्यांच्या प्रगतीचे साधन आहे. आम्ही आधुनिक तंत्रज्ञानाचा वापर करून दुधाची गुणवत्ता तपासतो आणि शेतकऱ्यांना त्यांच्या घामाचा योग्य मोबदला मिळवून देतो.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                गेल्या अनेक वर्षांपासून आम्ही दूध क्षेत्रात प्रामाणिकपणे कार्यरत आहोत. ग्राहकांना १००% शुद्ध आणि दर्जेदार दूध पुरवणे तसेच ग्रामीण अर्थव्यवस्थेला बळकटी देणे हे आमचे प्राथमिक उद्दिष्ट आहे. 
              </p>
            </div>
            <div className="order-1 lg:order-2 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(31,38,135,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/cow.png" alt="Dairy Cow" fill className="object-cover" />
            </div>
          </div>

          {/* Row 2: Photo Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="order-1 relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(31,38,135,0.15)] transform hover:scale-[1.02] transition-transform duration-500">
              <Image src="/images/happy_farmer.png" alt="Happy Farmer" fill className="object-cover" />
            </div>
            <div className="order-2 space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-primary/10 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-primary text-2xl mb-3 flex items-center gap-3">
                  <span>🎯</span> आमचे ध्येय
                </h4>
                <p className="text-gray-600 text-base">शेतकऱ्यांना पारदर्शक आणि आधुनिक सेवा देऊन त्यांच्या जीवनमानात सुधारणा घडवून आणणे. उत्कृष्ट दर्जाचे पशुखाद्य पुरवणे आणि योग्य मार्गदर्शन करणे हा आमच्या कार्याचा एक अविभाज्य भाग आहे.</p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] border border-secondary/50 border-l-4 border-l-secondary hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-primary text-2xl mb-3 flex items-center gap-3">
                  <span>👁️</span> दृष्टिकोन
                </h4>
                <p className="text-gray-600 text-base">दुग्ध व्यवसायात नाविन्य आणून ग्राहकांना आरोग्यासाठी सर्वोत्तम दूध उत्पादने पुरवणे. बंडगरवाडीतील शेतकऱ्यांची प्रगती हीच आमची खरी ओळख आहे.</p>
              </div>
            </div>
          </div>

          {/* Bottom Quote Box */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary to-[#0a260a] p-8 md:p-12 rounded-3xl shadow-2xl text-white transform hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden flex flex-col items-center justify-center min-h-[250px]">
              {/* Background Blur Effects */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              
              {/* Corner Logos */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <Image src="/padalkar_logo-removebg-preview.png" alt="Logo Left" width={80} height={80} className="object-contain drop-shadow-md" />
              </div>
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
                <Image src="/padalkar_logo-removebg-preview.png" alt="Logo Right" width={80} height={80} className="object-contain drop-shadow-md" />
              </div>

              {/* Quote Content */}
              <div className="relative z-10 text-center space-y-4">
                <p className="m-0 font-bold text-3xl md:text-5xl text-secondary drop-shadow-lg leading-tight">
                  "शुद्ध दूध, सुदृढ आरोग्य!"
                </p>
                <div className="w-16 h-1 bg-white/30 mx-auto rounded-full mt-6 mb-6"></div>
                <p className="text-white/90 text-lg md:text-xl font-semibold tracking-wide">
                  - आप्पासाहेब पडोळकर
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f9fff9]" id="services">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-3xl md:text-4xl text-primary font-bold relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-secondary after:rounded-sm">आमच्या सेवा</h2>
            </div>
            <Services />
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="gallery">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl text-primary font-bold relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-secondary after:rounded-sm">गॅलरी</h2>
            <p className="text-gray-600 mt-4 md:mt-6 text-sm md:text-base">मोठा फोटो पाहण्यासाठी फोटोवर क्लिक करा</p>
          </div>
          
          <Gallery />

        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="contact">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl text-primary font-bold relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-secondary after:rounded-sm">संपर्क साधा</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white/80 backdrop-blur-md p-6 sm:p-8 md:p-10 rounded-2xl shadow-[0_8px_32px_rgba(31,38,135,0.1)] border border-gray-100">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">संपर्क माहिती</h3>
              <div className="flex flex-col gap-5 md:gap-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl">📍</span>
                  <div>
                    <strong className="text-base md:text-lg">पत्ता:</strong><br />
                    <span className="text-sm md:text-base text-gray-600 block mt-1">
                      मु. लकडेवाडी, बंडगरवाडी, पो. सोन्याळ,<br />
                      ता. जत, जि. सांगली, महाराष्ट्र ४१६४१३
                    </span>
                    <div className="mt-3 md:mt-4">
                      <a 
                        href="https://maps.google.com/?q=17.0601,75.2285" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 md:px-5 md:py-2 bg-secondary text-bg-dark font-bold rounded-full text-xs md:text-sm hover:bg-accent transition-colors"
                      >
                        View Map (नकाशा पहा)
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl">📞</span>
                  <div>
                    <strong className="text-base md:text-lg">फोन:</strong><br />
                    <span className="text-sm md:text-base text-gray-600 block mt-1">+91 9356980450</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="text-2xl md:text-3xl">👤</span>
                  <div>
                    <strong className="text-base md:text-lg">संचालक:</strong><br />
                    <span className="text-sm md:text-base text-gray-600 block mt-1">आप्पासाहेब पडोळकर</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] sm:h-[400px] lg:h-auto rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(31,38,135,0.15)] relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3809.5!2d75.22!3d17.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDAzJzM2LjAiTiA3NcKwMTMnMTIuMCJF!5e0!3m2!1sen!2sin!4v1620890000000!5m2!1sen!2sin" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={true} 
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-bg-dark text-white pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
            <div>
              <Image src="/padalkar logo.png" alt="Padalkar Logo" width={80} height={80} className="mb-4 rounded-full bg-white p-1" />
              <h4 className="text-xl md:text-2xl font-bold text-secondary mb-3 md:mb-4">पडळकर दूध</h4>
              <p className="opacity-80 leading-relaxed text-sm md:text-base">
                शेतकऱ्यांच्या हक्काचे आणि विश्वासाचे संकलन केंद्र. आम्ही गुणवत्तेशी कधीही तडजोड करत नाही.
              </p>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">द्रुत दुवे</h4>
              <ul className="space-y-2 md:space-y-3 opacity-80 text-sm md:text-base">
                <li><a href="#home" className="hover:text-secondary hover:opacity-100 transition-colors">होम</a></li>
                <li><a href="#about" className="hover:text-secondary hover:opacity-100 transition-colors">आमच्याबद्दल</a></li>
                <li><a href="#services" className="hover:text-secondary hover:opacity-100 transition-colors">सेवा</a></li>
                <li><a href="#gallery" className="hover:text-secondary hover:opacity-100 transition-colors">गॅलरी</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl md:text-2xl font-bold text-secondary mb-4 md:mb-6">आमच्याशी जोडा</h4>
              <div className="space-y-2 md:space-y-3 opacity-80 text-sm md:text-base">
                <div className="flex items-center gap-2"><span>📞</span> +91 9356980450</div>
                <div className="flex items-center gap-2"><span>📍</span> बंडगरवाडी, जत, सांगली</div>
              </div>
            </div>
          </div>
          <div className="text-center pt-6 md:pt-8 border-t border-white/10 opacity-60 text-xs md:text-sm">
            &copy; 2026 पडळकर दूध संकलन केंद्र. सर्व हक्क राखीव. | संचालक: आप्पासाहेब पडोळकर
          </div>
        </footer>
      </main>
    </>
  );
}
