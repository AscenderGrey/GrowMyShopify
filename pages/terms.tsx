import React from 'react';
import Layout from '../components/Layout';
import RetailOSLogo from '../components/RetailOSLogo';

const TermsPage = () => {
  return (
    <Layout theme="green">
      <div className="min-h-screen bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="mb-8">
            <RetailOSLogo variant="horizontal" size="lg" className="mb-6" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
            <p className="text-gray-600">Last updated: January 2025</p>
          </div>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using RetailOS, you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-700 mb-4">
                RetailOS is an AI-powered sales agent platform designed for Shopify stores. 
                The service provides automated customer engagement, analytics, and conversion optimization tools.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Accounts</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>You must provide accurate and complete information when creating an account</li>
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must notify us immediately of any unauthorized access</li>
                <li>You are responsible for all activities under your account</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
              <p className="text-gray-700 mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Use the service for any illegal purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Transmit harmful code or malware</li>
                <li>Interfere with the service's operation</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing</h2>
              <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
                <li>Subscription fees are billed in advance</li>
                <li>All fees are non-refundable unless otherwise stated</li>
                <li>We reserve the right to change pricing with 30 days notice</li>
                <li>Failure to pay may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                The service and its original content, features, and functionality are owned by RolloutFactory Inc. 
                and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the maximum extent permitted by law, RolloutFactory Inc. shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages resulting from your use of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we 
                believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes. 
                Your continued use of the service after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these Terms of Service, please contact us at:
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

export default TermsPage;

