
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { QrCode, ArrowRight, Calendar, Users, Code } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden hackathon-gradient-bg text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              TechThrone Hackathon 2023
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Join the ultimate coding competition and showcase your skills
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-hackathon-blue hover:bg-white/90"
              >
                <Link to="/register">
                  Register Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Link to="/qr-code">
                  <QrCode className="mr-2 h-5 w-5" /> Get QR Code
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30 pointer-events-none"></div>
      </div>
      
      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-blue/10 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-hackathon-blue" />
            </div>
            <h3 className="text-xl font-bold mb-2">Event Date</h3>
            <p className="text-gray-600">October 15-17, 2023</p>
            <p className="text-gray-600 mt-2">48 hours of non-stop coding and innovation</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-purple/10 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-hackathon-purple" />
            </div>
            <h3 className="text-xl font-bold mb-2">Participants</h3>
            <p className="text-gray-600">Open to all college students</p>
            <p className="text-gray-600 mt-2">Form teams of 3-4 members</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
            <div className="w-12 h-12 rounded-full bg-hackathon-cyan/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-hackathon-cyan" />
            </div>
            <h3 className="text-xl font-bold mb-2">Theme</h3>
            <p className="text-gray-600">Sustainable Technology Solutions</p>
            <p className="text-gray-600 mt-2">Build projects that address environmental challenges</p>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join the Hackathon?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Register now to secure your spot and compete for amazing prizes worth $10,000+
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              asChild
              size="lg" 
              className="bg-hackathon-blue hover:bg-hackathon-blue/90"
            >
              <Link to="/register">
                Register Now
              </Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline"
            >
              <Link to="/qr-code">
                Get QR Code
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2023 TechThrone Hackathon. All rights reserved.</p>
          <p className="mt-2 text-gray-400">A premier coding competition for innovative minds.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
