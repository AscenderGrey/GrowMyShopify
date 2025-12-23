import React from 'react';
import { ArrowRightIcon, ShieldCheckIcon, ChartBarIcon, BuildingOfficeIcon, CpuChipIcon, CheckIcon } from '@heroicons/react/24/outline';

const EnterprisePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-50 border border-yellow-200 text-sm text-yellow-800 mb-6">
              <span className="mr-2">ℹ️</span>
              Currently focused on Shopify stores. Enterprise deployments available on request.
            </div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-sm text-blue-700 mb-8">
              <BuildingOfficeIcon className="h-4 w-4 mr-2" />
              Enterprise AI Solutions — RolloutFactory
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 leading-tight">
              Enterprise AI,<br />
              <span className="text-blue-600">Without the Risk</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              RolloutFactory delivers enterprise-grade AI sales agents that increase revenue while protecting your data, your brand, and your customers. We are based in Sweden, operating across Europe and globally, with a focus on compliance, trust, and measurable impact.
            </p>
            
            <a 
              href="/enterprise/book-call"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Pilot Call
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900">
            Why Now
          </h2>
          
          <div className="space-y-8 mb-12">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-6 mt-3"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                AI in ecommerce is no longer optional — it is quickly becoming a competitive advantage.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-6 mt-3"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                Early adopters are already reducing churn, increasing AOV, and capturing more revenue.
              </p>
            </div>
            
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-6 mt-3"></div>
              <p className="text-xl text-gray-700 leading-relaxed">
                The question is no longer <em>if</em>, but <em>how</em> to deploy AI safely.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/enterprise/book-call"
              className="inline-flex items-center px-6 py-3 text-blue-600 hover:text-blue-700 font-semibold transition-colors border-b-2 border-blue-600"
            >
              Start a Low-Risk Pilot
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-bold mb-12 text-center text-gray-900">
            The Pain Points Enterprises Face
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-red-600 text-xl">📉</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Revenue Leakage</h3>
              <p className="text-gray-600">Customers abandoning carts across online and in-store channels</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-orange-600 text-xl">💔</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Poor Retention</h3>
              <p className="text-gray-600">Low LTV due to poor retention and weak personalization</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-yellow-600 text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Ineffective Upsells</h3>
              <p className="text-gray-600">Lack of intelligence in upsells, bundles, and recommendations</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-purple-600 text-xl">❓</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Limited Insights</h3>
              <p className="text-gray-600">Limited insight into why customers leave</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 md:col-span-2">
              <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-gray-600 text-xl">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">Technology Risk</h3>
              <p className="text-gray-600">High risk when trialing new technology in enterprise environments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Our Solution — RetailOS
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              RetailOS deploys an AI-powered sales agent designed for enterprise requirements
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-gray-900">Core Capabilities:</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-blue-100 rounded-lg mr-4 mt-1">
                    <CpuChipIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Integrated Deployment</h4>
                    <p className="text-gray-600">Lives across your online store and integrates with your existing stack</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-green-100 rounded-lg mr-4 mt-1">
                    <ChartBarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automatic Learning</h4>
                    <p className="text-gray-600">Understands your catalog and brand tone automatically</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-purple-100 rounded-lg mr-4 mt-1">
                    <span className="text-purple-600 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Real-time Guidance</h4>
                    <p className="text-gray-600">Provides real-time product guidance and bundle recommendations</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg mr-4 mt-1">
                    <ShieldCheckIcon className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Auditable & Safe</h4>
                    <p className="text-gray-600">Fully auditable, with hard safety guardrails to prevent errors</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold mb-6 text-gray-900">Enterprise Features:</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Multi-region compliance (GDPR and beyond)</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Secure hosting and data pipelines</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-green-600 mr-3" />
                  <span className="text-gray-700">Integration with existing POS or data warehouses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* De-risked Deployment */}
      <section className="py-24 bg-blue-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              De-risked Deployment
            </h2>
            <p className="text-xl text-gray-600">
              We know large retailers can't gamble on untested tech. That's why we run structured pilot programs:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-600 font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Limited Rollout</h3>
              <p className="text-gray-600 text-sm">Start with a limited rollout in a low-risk channel</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-green-600 font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Measure Uplift</h3>
              <p className="text-gray-600 text-sm">Measure uplift in AOV, LTV, and cart recovery</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-purple-600 font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Audit Performance</h3>
              <p className="text-gray-600 text-sm">Audit performance with your team</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-orange-600 font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Scale Safely</h3>
              <p className="text-gray-600 text-sm">Scale only when the ROI is proven</p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center">
            <p className="text-lg font-semibold text-gray-900 mb-6">
              This ensures <span className="text-blue-600">no surprises</span> — only data-backed decisions.
            </p>
            <a 
              href="/enterprise/book-call"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Book a Pilot Call
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Why RolloutFactory */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Why RolloutFactory
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3"></div>
                <p className="text-gray-700">Headquartered in Sweden, with strong European and global reach</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3"></div>
                <p className="text-gray-700">Specialists in <strong>enterprise AI engineering</strong> — not just plugins</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3"></div>
                <p className="text-gray-700">Trusted by forward-looking teams who value compliance and reliability</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-600 rounded-full mr-4 mt-3"></div>
                <p className="text-gray-700">Experienced in building systems that pass procurement and security reviews</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-2xl text-center">
            <p className="text-xl font-semibold text-gray-900">
              Our reputation is built on <span className="text-blue-600">stability, safety, and scale</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Book a Call Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
              Book a Call
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We don't do generic sales demos. We run structured discovery calls to understand your stack, your risks, and your goals.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 mb-12">
            <h3 className="text-xl font-bold mb-6 text-gray-900">On the call, we'll cover:</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Your current retail architecture</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Key risk factors and compliance requirements</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Pilot program structure and timeline</span>
                </div>
                <div className="flex items-center">
                  <CheckIcon className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Expected ROI benchmarks</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/enterprise/book-call"
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Questionnaire
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Closing Assurance */}
      <section className="py-24 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Safe, Measurable AI Deployment
          </h2>
          <p className="text-xl mb-8 opacity-90">
            RetailOS is the safe, measurable way to introduce AI into your retail operations. Our pilots are designed to prove ROI, reduce risk, and prepare your organization for the future of retail.
          </p>
          
          <a 
            href="/enterprise/book-call"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Book a Pilot Call Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">© 2024 RolloutFactory. Based in Sweden, serving Europe & global clients.</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:contact@rolloutfactory.com" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="https://discord.gg/dFgyfdW8" className="text-gray-400 hover:text-white transition-colors">Community</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default EnterprisePage;
