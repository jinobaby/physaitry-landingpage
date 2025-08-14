import React from 'react';
import { Button } from './ui/button';
import { Play, TrendingUp, Award, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-20 pb-20 overflow-hidden">
      <div className="absolute inset-0 wellness-gradient opacity-50" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-wellness-peach/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-wellness-purple/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-6 lg:px-8 h-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-wellness-lavender/50 rounded-full px-6 py-3 text-wellness-purple font-medium">
                <Sparkles className="h-5 w-5" />
                <span>AI-Powered Physiotherapy Platform</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 leading-none">
                Stick to your{' '}
                <span className="wellness-text-gradient">physio plan</span>,{' '}
                recover faster
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                AI-assisted motion tracking, smart reminders, and engaging rewards
                that keep patients consistent while giving clinics real-time progress insights.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-wellness-purple hover:bg-wellness-purple/90 text-white rounded-2xl px-8 py-6 text-lg wellness-shadow-medium transform hover:scale-105 transition-all duration-300"
              >
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-wellness-purple/20 text-wellness-purple hover:bg-wellness-lavender/50 rounded-2xl px-8 py-6 text-lg"
              >
                Join Beta Waitlist
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-purple">97%</div>
                <div className="text-sm text-gray-600">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-peach">2.5k+</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-wellness-purple">85%</div>
                <div className="text-sm text-gray-600">Faster Recovery</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              <div className="bg-white rounded-3xl wellness-shadow-large p-8 transform rotate-3 hover:rotate-0 transition-transform duration-700">
                <div className="bg-wellness-cream rounded-2xl p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-wellness-purple rounded-2xl flex items-center justify-center">
                        <Play className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Today's Exercises</h3>
                        <p className="text-sm text-gray-600">5 exercises remaining</p>
                      </div>
                    </div>
                    <div className="bg-wellness-peach text-white px-4 py-2 rounded-xl text-sm font-medium">
                      3/8 Complete
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-white rounded-xl p-4 flex items-center justify-between wellness-shadow-soft">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Shoulder Rolls</span>
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>

                    <div className="bg-white rounded-xl p-4 flex items-center justify-between wellness-shadow-soft">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                        <span className="font-medium text-gray-900">Arm Raises</span>
                      </div>
                      <TrendingUp className="h-5 w-5 text-green-500" />
                    </div>

                    <div className="bg-wellness-lavender rounded-xl p-4 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-wellness-purple rounded-full animate-pulse"></div>
                        <span className="font-medium text-wellness-purple">Neck Stretches</span>
                      </div>
                      <Play className="h-5 w-5 text-wellness-purple" />
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 flex items-center justify-between opacity-60">
                      <div className="flex items-center space-x-3">
                        <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                        <span className="text-gray-500">Back Extensions</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-wellness-purple to-wellness-peach rounded-xl p-4 text-center">
                    <div className="flex items-center justify-center space-x-2 text-white">
                      <Award className="h-6 w-6" />
                      <span className="font-semibold text-lg">+150 Points Today!</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-wellness-peach text-white px-6 py-3 rounded-2xl text-sm font-semibold wellness-shadow-medium animate-bounce">
                14-day streak! 🎉
              </div>
              <div className="absolute -bottom-6 -left-6 bg-wellness-purple text-white px-6 py-3 rounded-2xl text-sm font-semibold wellness-shadow-medium">
                AI Tracking Active
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
