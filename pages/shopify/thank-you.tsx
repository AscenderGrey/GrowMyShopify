import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

const ShopifyThankYouPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        {/* Success Icon */}
        <div className="mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="h-12 w-12 text-green-600" />
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            You're In! 🎉
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Welcome to the RetailOS beta waitlist. You're now part of an exclusive group of forward-thinking Shopify merchants.
          </p>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          
          <div className="space-y-6 text-left">
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Confirmation Email</h3>
                <p className="text-gray-600 text-sm">Check your inbox for a confirmation email with next steps and exclusive beta updates.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Beta Invitation</h3>
                <p className="text-gray-600 text-sm">You'll receive early access when we launch the beta program (expected in the next few weeks).</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                <span className="text-green-600 font-bold text-sm">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Training Head Start</h3>
                <p className="text-gray-600 text-sm">Get your 2-month training advantage while your AI agent learns your brand and customers.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beta Benefits Reminder */}
        <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl p-6 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Beta Benefits</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
              <span>Priority access to all features</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
              <span>Direct feedback channel</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
              <span>2-month training head start</span>
            </div>
            <div className="flex items-center">
              <CheckCircleIcon className="h-4 w-4 text-green-600 mr-2" />
              <span>Exclusive community access</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="space-y-4">
          <a 
            href="https://discord.gg/dFgyfdW8"
            className="inline-flex items-center px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Join Our Discord Community
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
          
          <div className="text-center">
            <a 
              href="/shopify"
              className="text-green-600 hover:text-green-700 font-medium transition-colors"
            >
              ← Back to RetailOS for Shopify
            </a>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            You're joining other innovative Shopify merchants who are preparing for the AI-powered future of ecommerce.
          </p>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-orange-500 rounded-full border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600 ml-3">Join 500+ merchants already on the waitlist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopifyThankYouPage;
