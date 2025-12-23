import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    question: 'What do I get from a strategy call?',
    answer: 'A free 15-minute call where we learn about your store and identify at least 2-3 quick wins you can implement immediately. No pitch, no obligation.',
  },
  {
    question: 'How do you analyze my store?',
    answer: 'We use AI to study visitor behavior patterns—where they click, where they hesitate, where they leave. Combined with our e-commerce experience, we translate this into specific, actionable fixes.',
  },
  {
    question: 'What does early access include?',
    answer: 'We work directly with a limited number of stores each month. You get a full conversion audit, prioritized recommendations, and optional ongoing optimization support.',
  },
  {
    question: 'Do I need to give you store access?',
    answer: 'Not initially. We can identify major issues from the public-facing site. For deeper analysis, we may request view-only access to your analytics.',
  },
  {
    question: 'How quickly will I see results?',
    answer: 'Most stores implement our top recommendations within a week. Depending on your traffic, you can validate results within 2-4 weeks.',
  },
  {
    question: 'Why should I trust you over other agencies?',
    answer: "We don't guess. Our AI actually watches how visitors behave on your specific store and gives you data-backed recommendations. Plus, the first call is free—you can judge our expertise before committing anything.",
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Got questions? We've got answers.
          </p>
        </div>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden hover:border-green-200 transition-colors duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm sm:text-base pr-4">
                  {faq.question}
                </span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
