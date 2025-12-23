import React from 'react';
import { ArrowRightIcon, CheckIcon } from '@heroicons/react/24/outline';
import Layout from '../components/Layout';
import RetailOSLogo from '../components/RetailOSLogo';

const SHOPIFY_OAUTH_URL = 'https://admin.shopify.com/?organization_id=188510280&no_redirect=true&redirect=/oauth/redirect_from_developer_dashboard?client_id%3D66b3c54575c0a7c7ff730a88faf84417';
const DISCORD_URL = 'https://discord.gg/dFgyfdW8';

const PricingPage = () => {
  return (
    <Layout theme="green">
      <div className="min-h-screen bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <RetailOSLogo variant="horizontal" size="lg" className="mb-6 mx-auto" />
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Starter Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-600 mb-6">Perfect for small Shopify stores</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 10,000 monthly visitors</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">AI sales agent</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <a
                href={SHOPIFY_OAUTH_URL}
                className="block w-full text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Start Free Trial
              </a>
            </div>

            {/* Pro Plan - Featured */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-600 rounded-2xl p-8 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">Most Popular</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 mb-6">For growing Shopify stores</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$299</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 50,000 monthly visitors</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced AI agent</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Custom integrations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority support</span>
                </li>
              </ul>
              <a
                href={SHOPIFY_OAUTH_URL}
                className="block w-full text-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors shadow-md"
              >
                Start Free Trial
              </a>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-600 mb-6">For high-volume stores</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited visitors</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Enterprise AI agent</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced analytics & reporting</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">SLA guarantee</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">24/7 support</span>
                </li>
              </ul>
              <a
                href="/enterprise"
                className="block w-full text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Contact Sales
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial?</h3>
                <p className="text-gray-600">Yes! All plans include a 14-day free trial. No credit card required.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
                <p className="text-gray-600">Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What happens if I exceed my visitor limit?</h3>
                <p className="text-gray-600">We'll notify you when you're approaching your limit. You can upgrade your plan or we'll work with you on a custom solution.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
                <p className="text-gray-600">We offer a 30-day money-back guarantee on all paid plans. Contact us for details.</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
            <p className="text-lg text-gray-600 mb-6">Join hundreds of Shopify stores using RetailOS</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={SHOPIFY_OAUTH_URL}
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </a>
              <a
                href={DISCORD_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;

