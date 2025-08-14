import React from 'react';

interface RibbonDividerProps {
  text: string;
}

const RibbonDivider: React.FC<RibbonDividerProps> = ({ text }) => {
  return (
    <section className="py-16 bg-wellness-lavender/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-block bg-wellness-purple text-white px-8 py-4 rounded-2xl wellness-shadow-medium">
            <h2 className="text-2xl lg:text-3xl font-bold">{text}</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RibbonDivider;
