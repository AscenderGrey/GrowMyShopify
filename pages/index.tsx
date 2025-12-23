import React from 'react';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import CountdownBanner from '../components/CountdownBanner';
import LogoMarquee from '../components/LogoMarquee';
import ProductDemo from '../components/ProductDemo';
import BenefitsGrid from '../components/BenefitsGrid';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import CalendlyWidget from '../components/CalendlyWidget';

const SHOPIFY_OAUTH_URL = 'https://admin.shopify.com/?organization_id=188510280&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D66b3c54575c0a7c7ff730a88faf84417';
const DISCORD_URL = 'https://discord.gg/dFgyfdW8';

const HomePage = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <Layout theme="green">
      <CountdownBanner theme="green" />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 relative py-12 sm:py-0">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <div className="mb-6 sm:mb-8">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-100 border border-green-200 text-xs sm:text-sm text-green-700 mb-4 sm:mb-6">
              For Shopify Store Owners
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight px-2 sm:px-0">
              Stop Losing Sales to<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Invisible Conversion Killers
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0">
              We analyze your store, find exactly why visitors leave, and show you what to fix. No guesswork. Just results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6 sm:mb-10 px-4 sm:px-0">
              <a
                href="#calendly"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                Book a Free Strategy Call
                <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200 text-sm sm:text-base"
              >
                Join the Community
              </a>
            </div>
            <div className="inline-flex items-center px-3 py-1.5 bg-yellow-100 border border-yellow-200 rounded-lg text-yellow-800 text-xs sm:text-sm">
              Free consultation • No commitment required
            </div>
          </div>
        </div>
        <button onClick={scrollToNext} className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce hidden sm:block">
          <ChevronDownIcon className="h-6 w-6 sm:h-8 sm:w-8" />
        </button>
      </section>

      {/* 3. Explainer Video */}
      <ProductDemo />

      {/* 4. Social Proof */}
      <LogoMarquee />

      {/* 5. Benefits */}
      <BenefitsGrid />

      {/* 6. How It Works */}
      <HowItWorks />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. FAQ */}
      <FAQ />

      {/* Calendly Booking */}
      <CalendlyWidget />

      {/* 9. Final CTA */}
      <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 px-2 sm:px-0">
            Ready to turn your Shopify store into a conversion machine?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 px-2 sm:px-0">
            Install RetailOS in 2 minutes. Start converting more visitors today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href={SHOPIFY_OAUTH_URL}
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-green-700 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              Install RetailOS
              <ArrowRightIcon className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
            <a 
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg border-2 border-white/30 hover:border-white/50 transition-all duration-200 text-sm sm:text-base"
            >
              Join Community
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
