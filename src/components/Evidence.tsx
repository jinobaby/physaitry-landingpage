import React from 'react';

const Evidence = () => {
  return (
    <section id="evidence" className="py-20 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Evidence-Based{' '}
            <span className="wellness-text-gradient">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform is backed by research and real-world clinical studies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-wellness-purple mb-4">97%</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Accuracy Rate</h3>
            <p className="text-gray-600">AI motion tracking precision validated by physiotherapists</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-wellness-peach mb-4">85%</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Faster Recovery</h3>
            <p className="text-gray-600">Patients using our platform recover 85% faster on average</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-wellness-purple mb-4">3.2x</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Better Adherence</h3>
            <p className="text-gray-600">Exercise completion rates improved by 3.2x</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Evidence;
