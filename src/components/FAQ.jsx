import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const FAQ = () => {
  const [openQuestionId, setOpenQuestionId] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'Suvga chidamlimi?',
      answer: 'Ha, bizning 3D pollar maxsus qoplamasi tufayli suvga chidamli hisoblanadi va nam joylar uchun ham mos keladi. Oshxona va vannaxona uchun ham bemalol ishlatishingiz mumkin.'
    },
    {
      id: 2,
      question: "Uyda o'rnatish mumkinmi?",
      answer: "Ha, uyda o'rnatish mumkin. Biz sizga o'rnatish bo'yicha ko'rsatmalar beramiz yoki xizmat ko'rsatamiz. Professional ustalarimiz tezda va sifatli tarzda o'rnatib berishadi."
    },
    {
      id: 3,
      question: "Rang o'zgaradimi?",
      answer: "Yo'q, bizning maxsus qoplamalar rangning o'zgarmasligini ta'minlaydi. Uzoq yillar davomida o'z ko'rinishini saqlab qoladi. Quyosh nuri va nam ta'sirida ham rang o'zgarmaydi."
    },
    {
      id: 4,
      question: "Qancha vaqtda o'rnatiladi?",
      answer: "O'rtacha 2-3 kun ichida o'rnatiladi. Xona hajmiga qarab vaqt o'zgarishi mumkin. Premium va murakkab dizaynlar uchun 4-5 kun kerak bo'lishi mumkin."
    },
    {
      id: 5,
      question: "Kafolat bormi?",
      answer: "Ha, mahsulotlarimizga 2 yillik kafolat beriladi. Bu kafolat davomida yuzaga kelishi mumkin bo'lgan muammolar bepul bartaraf etiladi."
    }
  ];

  const toggleQuestion = (id) => {
    setOpenQuestionId(openQuestionId === id ? null : id);
  };

  return (
    <AnimatedSection id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ko'p so'raladigan savollar
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pollar haqida eng ko'p beriladigan savollarga javoblar. Boshqa savollaringiz bo'lsa, biz bilan bog'laning.
          </p>
        </div>
        
        <div className="space-y-4">
          {questions.map((faq) => (
            <motion.div 
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: faq.id * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(faq.id)}
                className="flex justify-between items-center w-full px-6 py-5 text-left font-medium text-gray-800 hover:bg-gray-50 focus:outline-none transition duration-300"
              >
                <span className="text-lg">{faq.question}</span>
                <motion.span
                  animate={{ rotate: openQuestionId === faq.id ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 text-accent" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
              </button>
              
              <AnimatePresence>
                {openQuestionId === faq.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 py-5 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-700">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default FAQ; 