
import React from 'react';
import RegistrationForm from '@/components/RegistrationForm/RegistrationForm';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const RegistrationPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-start mb-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Home
            </Link>
          </Button>
        </div>
        
        <RegistrationForm />
        
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>By submitting this form, you agree to our Terms and Conditions and Privacy Policy.</p>
          <p className="mt-1">
            Need help? <a href="#" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
