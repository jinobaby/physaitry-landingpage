import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import RibbonDivider from './components/RibbonDivider';
import ProblemsWeSolve from './components/ProblemsWeSolve';
import Evidence from './components/Evidence';
import BookCall from './components/BookCall';
import LOIForm from './components/LOIForm';
import JoinWaitlist from './components/JoinWaitlist';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <Hero />

      <Features />

      <RibbonDivider text="Transforming Physiotherapy Through Technology" />

      <ProblemsWeSolve />

      <Evidence />

      <Testimonials />

      <BookCall />

      <LOIForm />

      <JoinWaitlist />
    </div>
  );
}
