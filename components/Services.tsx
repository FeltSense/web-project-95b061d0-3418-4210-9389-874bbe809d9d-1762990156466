'use client';

import { Home, Key, TrendingUp, Shield } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Property Search',
    description: 'Access our extensive database of premium properties tailored to your specific needs and preferences. We make finding your dream home effortless.'
  },
  {
    icon: Key,
    title: 'Property Management',
    description: 'Comprehensive management services for property owners. We handle everything from tenant screening to maintenance, maximizing your investment returns.'
  },
  {
    icon: TrendingUp,
    title: 'Investment Consulting',
    description: 'Expert guidance on real estate investments with market analysis and strategic recommendations to help you build wealth through property.'
  },
  {
    icon: Shield,
    title: 'Legal & Financial Support',
    description: 'Navigate complex transactions with confidence. Our team provides comprehensive legal and financial support throughout your property journey.'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive real estate solutions designed to meet all your property needs with excellence and professionalism.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}