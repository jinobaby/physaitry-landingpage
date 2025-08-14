import React from 'react';
import { Button } from './ui/button';

const JoinWaitlist = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-wellness-purple to-wellness-peach">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Don't Wait to{' '}
          <span className="text-wellness-cream">Transform</span>
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Join thousands of patients and therapists who are already experiencing the future of physiotherapy.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <input
            type="email"
            placeholder="Enter your email address"
            className="px-6 py-4 rounded-2xl border-0 focus:ring-2 focus:ring-white/50 text-lg min-w-[300px]"
          />
          <Button
            size="lg"
            className="bg-white text-wellness-purple hover:bg-white/90 rounded-2xl px-8 py-4 text-lg wellness-shadow-large"
          >
            Join Waitlist
          </Button>
        </div>
        
        <p className="text-sm text-white/70 mt-4">
          No spam, ever. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default JoinWaitlist;
