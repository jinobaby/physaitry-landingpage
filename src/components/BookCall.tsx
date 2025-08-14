import React from 'react';
import { Button } from './ui/button';

const BookCall = () => {
  return (
    <section className="py-20 bg-wellness-purple">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to Transform Your{' '}
          <span className="text-wellness-peach">Recovery?</span>
        </h2>
        <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
          Book a free consultation with our team to see how Physaitry can help you achieve faster, more effective recovery.
        </p>
        <Button
          size="lg"
          className="bg-white text-wellness-purple hover:bg-white/90 rounded-2xl px-8 py-6 text-lg wellness-shadow-large"
        >
          Book Free Consultation
        </Button>
      </div>
    </section>
  );
};

export default BookCall;
