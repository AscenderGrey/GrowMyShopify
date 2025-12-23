import React from 'react';
import { ArrowRightIcon, ChevronDownIcon, ShoppingBagIcon, ChartBarIcon, UserGroupIcon, CpuChipIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import CountdownBanner from '../components/CountdownBanner';
import LogoMarquee from '../components/LogoMarquee';
import ConversionCalculator from '../components/ConversionCalculator';
import CalendlyBlock from '../components/CalendlyBlock';
import UploadCTA from '../components/UploadCTA';

const ShopifyPage = () => {
  const scrollToNext = () => {
    window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
  };

  return (
    <Layout theme="green">
      <CountdownBanner theme="green" />
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-emerald-50 relative">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 text-sm text-green-700 mb-8">
              <ShoppingBagIcon className="h-4 w-4 mr-2" />
              RetailOS for Shopify — Native AI Sales Agent
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              The AI Sales Agent That Lives on Your<br />
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Shopify Store
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Turn every visitor into a buyer — and every buyer into a repeat customer. RetailOS is a smart, evolving sales agent built for your brand.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="/shopify/join"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join Beta Waitlist
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="https://discord.gg/dFgyfdW8"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                Join the Discord
              </a>
            </div>
            
            <div className="inline-flex items-center px-4 py-2 bg-yellow-100 border border-yellow-200 rounded-lg text-yellow-800 text-sm">
              <span className="mr-2">⚡</span>
              Limited beta spots — early users get a 2-month training head start
            </div>
          </div>
        </div>
        
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 text-gray-400 hover:text-gray-600 transition-colors animate-bounce"
        >
          <ChevronDownIcon className="h-8 w-8" />
        </button>
      </section>

      <LogoMarquee />

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Install fast. Learn faster.</h3>
            <p className="text-gray-700 mb-6">Native app, Shopify APIs, zero-code setup. Your agent starts learning from day one and optimizes where it matters: PDPs, bundles, checkout.</p>
            <div className="flex gap-3">
              <a href="#book" className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow">Book install</a>
              <a href="#upload" className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg">Free audit</a>
            </div>
          </div>
          <div id="upload">
            <UploadCTA theme="green" />
          </div>
        </div>
      </section>

      <section className="py-24 bg-green-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">Black Friday is not forgiving</h2>
          <p className="text-lg text-gray-600 mb-8">You dont have quarters to iterate. Use data from real conversations to fix the leaks before traffic spikes.</p>
          <div className="flex justify-center">
            <ConversionCalculator theme="green" />
          </div>
        </div>
      </section>

      {/* Built with Shopify Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-gray-900">
            Built with Shopify, For Shopify
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Ecosystem Collaboration</h3>
              <p className="text-gray-600">Built in collaboration with developers from the Shopify ecosystem</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Native Performance</h3>
              <p className="text-gray-600">Deep integration with native performance optimization</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Instant Results</h3>
              <p className="text-gray-600">Fast install, zero code, instant results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized AI Section */}
      <section className="py-24 bg-green-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Personalized AI That Understands Your Brand
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Once installed, RetailOS:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-lg mr-4 mt-1">
                    <CpuChipIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Uses Shopify API Intelligence</h4>
                    <p className="text-gray-600">Learns your brand's tone, customer segments, and product taxonomy automatically</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4 mt-1">
                    <ChartBarIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Product Database</h4>
                    <p className="text-gray-600">Creates intelligent tagging: use-case based ("gift for runners") and occasion-based ("wedding kit")</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4 mt-1">
                    <UserGroupIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Natural Bundles</h4>
                    <p className="text-gray-600">Builds natural bundles and supplementary product suggestions</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4 mt-1">
                    <span className="text-orange-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Context-Based Recommendations</h4>
                    <p className="text-gray-600">Recommends products based on real context, not random rules</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-green-200">
              <div className="bg-green-50 p-6 rounded-xl mb-6">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full mr-3"></div>
                  <span className="font-semibold text-gray-900">RetailOS Agent</span>
                </div>
                <p className="text-gray-600 mb-4">"I see you're building a skincare routine! Based on your dry skin concerns, I'd recommend starting with our gentle cleanser, then this hydrating serum, and finishing with our bestselling moisturizer. This bundle saves you 15% and covers your complete morning routine."</p>
                <div className="flex space-x-2">
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg text-sm">Add Bundle to Cart</button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">Tell me more</button>
                </div>
              </div>
              <p className="text-sm text-gray-500 text-center">Smart, contextual product recommendations</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={scrollToNext}
              className="inline-flex items-center px-6 py-3 text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              See How It Works
              <ChevronDownIcon className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* LTV Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8 text-gray-900">
            LTV — Loyalty on Autopilot
          </h2>
          
          <p className="text-xl text-gray-600 mb-12">
            The AI doesn't just sell — it remembers.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-green-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Personalizes Future</h3>
              <p className="text-gray-600 text-sm">After purchase, personalizes future recommendations based on history</p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Custom Follow-ups</h3>
              <p className="text-gray-600 text-sm">Sends custom follow-ups via email or on-site interactions</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl">
              <div className="text-3xl mb-4">🔄</div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Builds Relationships</h3>
              <p className="text-gray-600 text-sm">Creates relationships that lead to repeat purchases</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-8 rounded-2xl">
            <p className="text-lg font-semibold text-gray-900">
              This boosts <span className="text-green-600">LTV and retention</span> — the real drivers of long-term profit.
            </p>
          </div>
        </div>
      </section>

      {/* Abandoned Cart Recovery */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Abandoned Cart Recovery
            </h2>
            <p className="text-xl text-gray-600">
              Most Shopify stores lose sales at checkout. RetailOS solves this in two ways:
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-green-600 font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">At the Beginning</h3>
              </div>
              <p className="text-gray-600 mb-4">
                The agent offers a limited-time incentive in exchange for an email. <em>(Configurable by you.)</em>
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">"Hey! I'm Sarah, your personal shopping assistant. Get 10% off your first order when you share your email — I'll help you find exactly what you need!"</p>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900">At the End</h3>
              </div>
              <p className="text-gray-600 mb-4">
                It nudges users with personalized prompts, checkout help, or additional offers.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-700">"I noticed you're about to leave! Need help with sizing? Or would you like free shipping if you add one more item to your cart?"</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-block bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-lg font-semibold text-gray-900">
                <span className="text-green-600">Result:</span> More carts convert. Less revenue lost.
              </p>
            </div>
            
            <div className="mt-8">
              <a 
                href="/shopify/join"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Join the Beta
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advantage Snowball */}
      <section className="py-24 bg-gradient-to-br from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            The AI Advantage Snowball
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">🧠</div>
              <h3 className="text-lg font-semibold mb-3">More Training Time</h3>
              <p className="text-sm opacity-90">Beta users get more time to train your agent</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold mb-3">Better Responses</h3>
              <p className="text-sm opacity-90">Better responses, faster personalization</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <div className="text-3xl mb-4">🏆</div>
              <h3 className="text-lg font-semibold mb-3">Competitive Edge</h3>
              <p className="text-sm opacity-90">Head start before competitors enter the ecosystem</p>
            </div>
          </div>
          
          <div className="bg-white/20 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <p className="text-xl mb-4">
              In AI sales, <span className="font-bold">time = intelligence</span>.
            </p>
            <p className="text-lg opacity-90">
              The earlier you start, the better your results.
            </p>
          </div>
          
          <div className="text-2xl font-bold mb-8">
            Be first. Be smarter. Snowball the advantage.
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Common Problems We Solve
            </h2>
          </div>
          
          <div className="space-y-6 mb-12">
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">Low LTV</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">Follow-up that drives return buyers</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">High cart abandonment</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">Smart incentives + checkout nudges</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">Visitors lost in the catalog</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">Guided product discovery</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">Static upsells</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">Dynamic bundles that actually make sense</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">No feedback from customers</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">Conversation logs and insight</span>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-gray-50 p-6 rounded-xl">
              <div className="flex items-center">
                <XMarkIcon className="h-6 w-6 text-red-500 mr-4" />
                <span className="text-gray-700">Boring store</span>
              </div>
              <div className="flex items-center">
                <CheckIcon className="h-6 w-6 text-green-500 mr-4" />
                <span className="text-gray-700 font-medium">AI that talks like your brand</span>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/shopify/join"
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              I Want In Early
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      <CalendlyBlock theme="green" />

      {/* Community Section */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join the AI ECOM CABAL
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Retail is changing. Fast. We're building this in public with merchants, marketers, and ecommerce founders who want the edge. Get updates, share ideas, shape the future.
          </p>
          
          <a 
            href="https://discord.gg/dFgyfdW8"
            className="inline-flex items-center px-8 py-4 bg-white text-purple-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join the Discord
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

    </Layout>
  );
};

export default ShopifyPage;
