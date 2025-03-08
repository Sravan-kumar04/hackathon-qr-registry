
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, Users, Code } from 'lucide-react';
import HackathonList from '@/components/HackathonList';
import { hackathonEvents } from '@/data/hackathonEvents';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden hackathon-gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Upcoming Hackathon Events
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join exciting coding competitions and showcase your skills
            </p>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none"></div>
      </div>
      
      {/* Events Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Hackathons</h2>
        <HackathonList events={hackathonEvents} />
      </div>
      
      {/* Info Section */}
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold mb-8 text-center">Why Join Our Hackathons?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-blue/10 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-hackathon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Immersive Experience</h3>
            <p className="text-gray-600">48 hours of non-stop coding and innovation with like-minded individuals</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-purple/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-hackathon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Networking</h3>
            <p className="text-gray-600">Connect with industry professionals, mentors, and fellow developers</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-cyan/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-hackathon-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Prizes & Recognition</h3>
            <p className="text-gray-600">Win amazing prizes and get recognized for your innovative solutions</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 Hackathon Events Platform. All rights reserved.</p>
          <p className="mt-2 text-gray-400">The premier platform for coding competitions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
