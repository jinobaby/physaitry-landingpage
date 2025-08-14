import React from 'react';
import SectionWrapper from './SectionWrapper';

const features = [
  {
    icon: '🤖',
    title: 'AI Motion Tracking',
    description: 'Advanced computer vision that monitors your exercises with 97% accuracy.',
    bgColor: 'bg-wellness-cream',
    iconBg: 'bg-wellness-purple'
  },
  {
    icon: '📱',
    title: 'Smart Reminders',
    description: 'Personalized notifications that keep you on track with your recovery plan.',
    bgColor: 'bg-wellness-lavender',
    iconBg: 'bg-wellness-peach'
  },
  {
    icon: '🏆',
    title: 'Gamified Progress',
    description: 'Earn points, unlock achievements, and stay motivated throughout your journey.',
    bgColor: 'bg-wellness-teal',
    iconBg: 'bg-wellness-purple'
  }
];

const Features = () => {
  return (
    <SectionWrapper id="features" className="bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Powerful Features for{' '}
          <span className="wellness-text-gradient">Better Recovery</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Our AI-powered platform combines cutting-edge technology with proven physiotherapy principles.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className={`${feature.bgColor} rounded-2xl p-8 wellness-shadow-soft`}>
            <div className={`w-16 h-16 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-6`}>
              <span className="text-white text-2xl">{feature.icon}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Features;
