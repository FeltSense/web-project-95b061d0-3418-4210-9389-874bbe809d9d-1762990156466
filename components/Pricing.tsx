'use client';

import { Check, Sparkles } from 'lucide-react';

const features = [
  'Full property search access',
  'Personalized property recommendations',
  'Virtual property tours',
  'Dedicated real estate agent',
  'Market analysis reports',
  'Negotiation support',
  'Legal documentation assistance',
  'Post-purchase support'
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-blue-100 leading-relaxed">
            Get started with our comprehensive property service package designed to help you find and secure your perfect home.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Sparkles className="text-yellow-300" size={28} />
                <h3 className="text-3xl font-bold text-white">Premium Package</h3>
                <Sparkles className="text-yellow-300" size={28} />
              </div>
              <div className="flex items-center justify-center gap-2">
                <span className="text-6xl font-bold text-white">$29</span>
                <span className="text-xl text-blue-200">/ month</span>
              </div>
              <p className="text-blue-100 mt-4 text-lg">Everything you need to find your dream property</p>
            </div>

            <div className="p-10">
              <ul className="space-y-5 mb-10">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1">
                      <Check className="text-green-600" size={16} />
                    </div>
                    <span className="text-gray-700 text-lg">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center px-8 py-5 rounded-xl text-xl font-bold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Now
              </a>

              <p className="text-center text-gray-500 mt-6 text-sm">
                Secure payment processed by Stripe • Cancel anytime
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-12 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-4xl font-bold text-white mb-2">500+</p>
              <p className="text-blue-200">Properties Listed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-4xl font-bold text-white mb-2">98%</p>
              <p className="text-blue-200">Client Satisfaction</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <p className="text-4xl font-bold text-white mb-2">1000+</p>
              <p className="text-blue-200">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}