import React from 'react';
import Layout from '../components/Layout';
import RetailOSLogo from '../components/RetailOSLogo';

const PrivacyPage = () => {
  return (
    <Layout theme="green">
      <div className="min-h-screen bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <RetailOSLogo variant="horizontal" size="lg" className="mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                RolloutFactory Inc. ("we," "our," or "us") operates RetailOS, an AI-powered sales agent platform for Shopify stores. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Information You Provide</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Account information (name, email, store URL)</li>
                <li>Store data and analytics you upload</li>
                <li>Communication data when you contact us</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 Automatically Collected Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Usage data and analytics</li>
                <li>Device and browser information</li>
                <li>IP address and location data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To improve and optimize RetailOS</li>
                <li>To communicate with you about your account</li>
                <li>To analyze usage patterns and trends</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell your personal information. We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Service providers who assist in operating our platform</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> <a href="mailto:contact@rolloutfactory.com" className="text-green-600 hover:text-green-700">contact@rolloutfactory.com</a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;

