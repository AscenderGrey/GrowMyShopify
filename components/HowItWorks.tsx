import React from 'react';
import {
  CalendarDaysIcon,
  MagnifyingGlassIcon,
  DocumentTextIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const steps = [
  {
    icon: CalendarDaysIcon,
    number: '01',
    title: 'Book Your Strategy Call',
    description: '15 minutes. We learn about your store, your traffic, and your conversion challenges.',
  },
  {
    icon: MagnifyingGlassIcon,
    number: '02',
    title: 'We Analyze Your Store',
    description: 'Our team reviews your site, identifies friction points, and maps your customer journey.',
  },
  {
    icon: DocumentTextIcon,
    number: '03',
    title: 'Get Your Custom Action Plan',
    description: 'Receive a prioritized list of specific changes—copy, design, flow—ranked by impact.',
  },
  {
    icon: RocketLaunchIcon,
    number: '04',
    title: 'Implement and Scale',
    description: 'Make the changes yourself or work with us ongoing. Track results. Iterate.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            From first call to actionable insights in days, not months.
          </p>
        </div>
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex gap-4 sm:gap-6 items-start group"
            >
              <div className="flex-shrink-0">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">
                    STEP {step.number}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
