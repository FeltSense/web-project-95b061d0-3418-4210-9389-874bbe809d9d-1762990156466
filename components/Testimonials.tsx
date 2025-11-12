'use client';

import { Star } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    quote: 'Elite Properties helped us find our dream home in just two weeks. Their attention to detail and understanding of our needs was exceptional. Highly recommended!'
  },
  {
    name: 'Michael Chen',
    role: 'Real Estate Investor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    quote: 'The investment consulting service provided invaluable insights that helped me build a profitable property portfolio. Their market knowledge is unmatched.'
  },
  {
    name: 'Emily Rodriguez',
    role: 'First-Time Buyer',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
    quote: 'As a first-time buyer, I was nervous about the process. The team at Elite Properties guided me every step of the way with patience and expertise.'
  },
  {
    name: 'David Thompson',
    role: 'Property Owner',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    quote: 'Their property management service has been a game-changer. I can focus on my business while they handle everything from tenants to maintenance perfectly.'
  },
  {
    name: 'Lisa Anderson',
    role: 'Homeowner',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80',
    quote: 'Professional, responsive, and truly caring. Elite Properties went above and beyond to ensure we found the perfect neighborhood for our family.'
  },
  {
    name: 'James Wilson',
    role: 'Commercial Investor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    quote: 'Outstanding service from start to finish. Their expertise in commercial real estate helped me make informed decisions that significantly grew my portfolio.'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const visibleTestimonials = [
    testimonials[currentIndex * 3],
    testimonials[(currentIndex * 3 + 1) % testimonials.length],
    testimonials[(currentIndex * 3 + 2) % testimonials.length]
  ].filter(Boolean);

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Hear from our satisfied clients who found their perfect properties with Elite Properties.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="fill-yellow-400 text-yellow-400" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-blue-100"
                  />
                  <div>
                    <p className="font-bold text-gray-900 text-lg">{testimonial.name}</p>
                    <p className="text-blue-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-2 mt-12">
            {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-blue-600 w-8' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}