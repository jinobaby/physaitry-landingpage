import React from 'react';

const ProblemsWeSolve = () => {
  return (
    <section id="problems" className="py-20 bg-wellness-cream">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Problems We{' '}
            <span className="wellness-text-gradient">Solve</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional physiotherapy faces several challenges that our platform addresses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Poor Adherence</h3>
            <p className="text-gray-600 mb-4">Only 35% of patients complete their prescribed exercise programs.</p>
            <div className="text-wellness-purple font-semibold">→ Our Solution: Gamified progress tracking with rewards</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Lack of Feedback</h3>
            <p className="text-gray-600 mb-4">Patients don't know if they're performing exercises correctly.</p>
            <div className="text-wellness-purple font-semibold">→ Our Solution: Real-time AI motion analysis</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Limited Monitoring</h3>
            <p className="text-gray-600 mb-4">Therapists can't track progress between sessions.</p>
            <div className="text-wellness-purple font-semibold">→ Our Solution: Continuous progress insights</div>
          </div>
          
          <div className="bg-white rounded-2xl p-8 wellness-shadow-soft">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Inconsistent Results</h3>
            <p className="text-gray-600 mb-4">Recovery times vary widely due to inconsistent practice.</p>
            <div className="text-wellness-purple font-semibold">→ Our Solution: Smart reminders and scheduling</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsWeSolve;
