'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const servicesData = [
  {
    id: 1,
    icon: '🥛',
    title: 'दूध संकलन',
    shortDesc: 'सकाळ आणि संध्याकाळ दोन्ही वेळेस दुधाचे संकलन केले जाते.',
    fullDesc: 'आमच्या केंद्रावर दररोज सकाळ आणि संध्याकाळ नियमितपणे दूध संकलन केले जाते. शेतकऱ्यांचा वेळ वाचवण्यासाठी आम्ही वेगवान आणि पारदर्शक वजन प्रणाली वापरतो. दुधाची गुणवत्ता आणि ताजेपणा टिकवून ठेवण्यासाठी संकलित दूध लगेचच शीतकरण यंत्रणेत (Chilling Unit) साठवले जाते.'
  },
  {
    id: 2,
    icon: '⚖️',
    title: 'गुणवत्ता तपासणी',
    shortDesc: 'कॉम्प्युटरद्वारे अचूक फॅट आणि डिग्रीची तपासणी.',
    fullDesc: 'दुधाची फॅट (Fat) आणि एसएनएफ (SNF) तपासण्यासाठी आम्ही आधुनिक कॉम्प्युटराईज्ड मिल्क टेस्टिंग मशीन वापरतो. यामुळे प्रत्येक शेतकऱ्याला त्याच्या दुधाच्या गुणवत्तेनुसार अचूक आणि योग्य दर मिळतो. तपासणीची प्रिंट लगेच दिली जाते ज्यामुळे पूर्ण पारदर्शकता राहते.'
  },
  {
    id: 3,
    icon: '🌾',
    title: 'पशुखाद्य विक्री',
    shortDesc: 'दर्जेदार पशुखाद्य आणि सरकी पेंड रास्त दरात उपलब्ध.',
    fullDesc: 'शेतकऱ्यांच्या जनावरांच्या उत्तम आरोग्यासाठी आणि दूध उत्पादनात वाढ होण्यासाठी आम्ही नामांकित कंपन्यांचे दर्जेदार पशुखाद्य, सरकी पेंड, आणि मिनरल मिक्श्चर वाजवी दरात उपलब्ध करून देतो. दुधाच्या बिलातून याची रक्कम वळती करण्याची सुविधा देखील उपलब्ध आहे.'
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof servicesData[0] | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesData.map((service) => (
          <div 
            key={service.id}
            className="bg-white/90 backdrop-blur-md p-10 text-center rounded-2xl border border-primary/10 shadow-[0_8px_30px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group flex flex-col items-center"
          >
            <span className="text-6xl block mb-6 transition-transform duration-300 group-hover:scale-110 drop-shadow-sm">{service.icon}</span>
            <h3 className="text-2xl font-bold text-primary mb-4">{service.title}</h3>
            <p className="text-gray-600 mb-6 flex-grow">{service.shortDesc}</p>
            <button 
              onClick={() => setSelectedService(service)}
              className="mt-auto px-6 py-2 rounded-full border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-colors duration-300 w-full"
            >
              Read More
            </button>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-3 bg-secondary"></div>
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
                <div className="text-7xl bg-[#f9fff9] p-6 rounded-2xl border border-primary/10 shadow-inner">
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-4">{selectedService.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {selectedService.fullDesc}
                  </p>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center md:justify-end">
                <button 
                  onClick={() => setSelectedService(null)}
                  className="px-8 py-3 bg-primary text-white font-bold rounded-full hover:bg-[#0a260a] transition-colors shadow-md"
                >
                  बंद करा (Close)
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
