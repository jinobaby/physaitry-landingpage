import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-wellness-lavender/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="wellness-text-gradient">Users Say</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <p className="text-gray-600 mb-6">"The AI tracking helped me recover from my shoulder injury twice as fast!"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-wellness-purple rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-500">Former athlete</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <p className="text-gray-600 mb-6">"As a physiotherapist, I can now monitor my patients' progress in real-time."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-wellness-peach rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Dr. James L.</div>
                <div className="text-sm text-gray-500">Physiotherapist</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <p className="text-gray-600 mb-6">"The gamification makes doing my exercises actually fun and motivating."</p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-wellness-purple rounded-full mr-4"></div>
              <div>
                <div className="font-semibold text-gray-900">Mike R.</div>
                <div className="text-sm text-gray-500">Office worker</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
