import React from 'react';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
