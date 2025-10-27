"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "کیا میں پرانے زیورات لا کر نیا ڈیزائن بنوا سکتا/سکتی ہوں؟",
    answer:
      "بالکل! آپ اپنے پرانے سونا یا زیورات لا سکتے ہیں، اور ہم اسے آپ کی پسند کے نئے ڈیزائن میں ڈھال دیتے ہیں — چاہے وہ انگوٹھی ہو، ہار یا بالیاں۔",
  },
  {
    id: 2,
    question: "کیا آپ کسٹم ڈیزائن بنا کر دیتے ہیں؟",
    answer:
      "جی ہاں، ہم مکمل طور پر آپ کے ذوق کے مطابق ڈیزائن تیار کرتے ہیں۔ آپ اپنا خیال، تصویر یا اسکیچ دکھائیں، باقی کام ہمارا بنانے کا۔",
  },
  {
    id: 3,
    question: "اگر میرا سونا کم وزن کا ہو تو کیا آپ خرید لیتے ہیں؟",
    answer:
      "ہم ہر طرح کا اصلی سونا خریدتے ہیں، چاہے وزن کم ہو یا زیادہ۔ مارکیٹ ریٹ کے مطابق بہترین قیمت دی جاتی ہے۔",
  },
  {
    id: 4,
    question: "کیا زیورات بنوانے میں کتنا وقت لگتا ہے؟",
    answer:
      "عام طور پر آرڈر کی نوعیت کے لحاظ سے 5 سے 7 دن کا وقت لگتا ہے۔ خصوصی یا بھاری ڈیزائن کے لیے تھوڑا زیادہ وقت درکار ہو سکتا ہے۔",
  },
  {
    id: 5,
    question: "کیا میں آن لائن آرڈر یا رابطہ کر سکتا ہوں؟",
    answer:
      "جی ہاں، آپ ہمیں فون، ای میل یا واٹس ایپ پر رابطہ کر سکتے ہیں۔ ہم آپ کو ڈیزائن، قیمت اور ٹائم لائن کے بارے میں مکمل رہنمائی فراہم کریں گے۔",
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const toggleFAQ = (id: number) => setOpenFAQ(openFAQ === id ? null : id);
  const handleScroll = (sectionId: string) => {
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="faqs"
      className="py-32 bg-gradient-to-b from-[#FFF9F0] to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.h2
            variants={fadeUp}
            className="text-5xl font-sunscreen md:text-6xl font-extrabold text-[#10375C] mb-6 leading-tight"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-2xl md:text-3xl text-[#5B3A00]/90 max-w-4xl mx-auto leading-relaxed"
          >
            Explore answers to the most common inquiries about our bespoke
            jewelry, services, and policies. Still have questions? Contact our
            experts anytime.
          </motion.p>
        </motion.div>

        {/* FAQ Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="space-y-8"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.id}
              layout
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="bg-white rounded-3xl shadow-2xl border-2 border-[#F3C623]/30 overflow-hidden hover:shadow-3xl transition-shadow duration-500"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full px-10 py-10 text-left flex justify-between items-center hover:bg-[#F3C623]/10 transition-colors duration-300"
              >
                <h3 className="text-3xl font-varuna md:text-4xl font-semibold text-[#10375C] pr-6">
                  {faq.question}
                </h3>
                <motion.span
                  animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                  transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className="text-[#F3C623] text-4xl transition-all shrink-0"
                >
                  ▼
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openFAQ === faq.id && (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scaleY: 0 }}
                    animate={{ opacity: 1, scaleY: 1 }}
                    exit={{ opacity: 0, scaleY: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ originY: 0 }}
                    className="overflow-hidden transition-all bg-[#FFF9F0] px-10 pb-10"
                  >
                    <p className="text-xl md:text-2xl font-varuna text-[#5B3A00]/90 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div variants={fadeUp} className="text-center mt-28">
          <p className="text-2xl md:text-3xl text-[#5B3A00]/90 mb-6">
            Have more questions or want personalized assistance?
          </p>
          <button
            onClick={() => {
              handleScroll("#contact");
            }}
            className="bg-gradient-to-r from-[#F3C623] to-[#FFD966] text-[#10375C] px-12 py-5 rounded-full font-extrabold hover:scale-105 hover:shadow-2xl transition-all duration-300 text-2xl"
          >
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQs;
