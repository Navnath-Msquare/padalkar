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
        <section className="py-16 md:py-24 px-4 sm:px-6 max-w-7xl mx-auto" id="about">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-4xl text-primary font-bold relative inline-block after:content-[''] after:absolute after:-bottom-3 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-secondary after:rounded-sm">आमच्याबद्दल</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(31,38,135,0.15)] order-2 md:order-1">
              <Image src="/images/cow.png" alt="Dairy Cow" fill className="object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-2xl md:text-3xl text-primary font-bold mb-4 md:mb-5">पडळकर दूध संकलन केंद्र, बंडगरवाडी</h3>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-5 text-base md:text-lg">
                आमचे दूध संकलन केंद्र बंडगरवाडी आणि आसपासच्या परिसरातील शेतकऱ्यांसाठी एक विश्वासाचे केंद्र आहे. 
                आम्ही आधुनिक तंत्रज्ञानाचा वापर करून दुधाची गुणवत्ता तपासतो आणि शेतकऱ्यांना योग्य मोबदला मिळवून देतो.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4 md:mb-5 text-base md:text-lg">
                गेल्या अनेक वर्षांपासून आम्ही दूध क्षेत्रात कार्यरत आहोत. आमचे उद्दिष्ट ग्रामीण भागातील शेतकऱ्यांचे 
                आर्थिक सक्षमीकरण करणे आणि ग्राहकांना शुद्ध दूध पुरवणे हे आहे.
              </p>
              <div className="bg-white/80 backdrop-blur-md p-4 md:p-5 mt-6 md:mt-8 border-l-4 border-primary rounded-r-xl shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg">
                <p className="m-0 font-bold text-primary text-lg md:text-xl">
                  "शुद्ध दूध, सुदृढ आरोग्य!"
                </p>
              </div>
              <div className="mt-6 md:mt-8">
                <p className="text-gray-600 leading-relaxed mb-4 md:mb-5 text-base md:text-lg">
                  आम्ही केवळ दूध संकलन करत नाही, तर शेतकऱ्यांच्या अडीअडचणीत त्यांच्या पाठीशी उभे राहतो. उत्कृष्ट दर्जाचे पशुखाद्य पुरवणे, प्राण्यांचे आरोग्य आणि योग्य मार्गदर्शन करणे हा आमच्या कार्याचा एक अविभाज्य भाग आहे. बंडगरवाडीतील शेतकऱ्यांची प्रगती हीच आमची खरी ओळख आहे.
                </p>
                <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(31,38,135,0.1)]">
                  <Image src="/images/happy_farmer.png" alt="Happy Dairy Farmer" fill className="object-cover" />
                </div>
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
