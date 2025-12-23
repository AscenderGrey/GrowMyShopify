import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const testimonials = [
  {
    quote: "They found 3 issues in my checkout flow I'd never noticed. Fixed them in a day, saw real improvements within weeks.",
    author: "DTC Brand Owner",
    role: "Apparel",
    avatar: null,
  },
  {
    quote: "Other tools show you what happens. These guys explained why it happens and what to do about it.",
    author: "Shopify Store Owner",
    role: "Home Goods",
    avatar: null,
  },
  {
    quote: "First call was genuinely useful. No pitch, just insights I could use immediately.",
    author: "E-commerce Manager",
    role: "Health & Wellness",
    avatar: null,
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Store Owners Say
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Early feedback from store owners in our pilot program.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-base sm:text-lg text-gray-900 font-medium mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-500 text-xs">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
