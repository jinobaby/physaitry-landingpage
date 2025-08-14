import React from 'react';
import { Button } from './ui/button';

const LOIForm = () => {
  return (
    <section className="py-20 bg-wellness-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Join Our{' '}
            <span className="wellness-text-gradient">Beta Program</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be among the first to experience the future of physiotherapy. Submit your letter of intent to join our exclusive beta program.
          </p>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wellness-purple focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wellness-purple focus:border-transparent"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Why are you interested?</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-wellness-purple focus:border-transparent"
                  placeholder="Tell us about your interest in Physaitry..."
                />
              </div>
              
              <Button
                className="w-full bg-wellness-purple hover:bg-wellness-purple/90 text-white rounded-2xl py-4 text-lg"
              >
                Submit Letter of Intent
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LOIForm;
