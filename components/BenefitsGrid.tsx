import React from 'react';
import {
  CurrencyDollarIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline';

const benefits = [
  {
    icon: CurrencyDollarIcon,
    title: 'Find Your Hidden Revenue',
    description: 'Most stores lose 60-70% of visitors before checkout. We show you exactly where and why.',
  },
  {
    icon: ShoppingCartIcon,
    title: 'Stop Cart Abandonment',
    description: 'See the exact moment visitors hesitate. Get specific copy and design fixes that recover lost sales.',
  },
  {
    icon: UserGroupIcon,
    title: 'Know Why They Leave',
    description: "Go beyond 'they bounced.' Understand objections, hesitations, and what would make them buy.",
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'No Dev Work Required',
    description: 'We give you actionable fixes you can implement yourself—or we help you prioritize what to build next.',
  },
];

const BenefitsGrid: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Shopify Stores Work With Us
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Stop losing revenue to invisible conversion killers. Start understanding what your customers actually want.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-green-100 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsGrid;
