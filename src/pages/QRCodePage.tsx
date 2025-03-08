
import React from 'react';
import QRCodeGenerator from '@/components/QRCodeGenerator';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, Clipboard, Check } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const QRCodePage = () => {
  const { toast } = useToast();
  const redirectUrl = window.location.origin + '/qr';
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(redirectUrl);
    setCopied(true);
    toast({
      title: "Copied!",
      description: "Registration link copied to clipboard",
    });
    setTimeout(() => setCopied(false), 2000);
  };

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
        
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Hackathon Registration QR Code</h1>
          <p className="text-gray-600">
            Scan this QR code to directly access the registration form
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <QRCodeGenerator value={redirectUrl} />
          
          <Card>
            <CardHeader>
              <CardTitle>Registration Link</CardTitle>
              <CardDescription>
                Share this link directly if QR code scanning is not available
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Input
                  value={redirectUrl}
                  readOnly
                  className="font-mono text-sm"
                />
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={copyToClipboard} 
                  className="flex-shrink-0"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Clipboard className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-4">
              <div>
                <h3 className="font-semibold mb-2">How to use:</h3>
                <ol className="text-sm text-gray-600 list-decimal ml-4 space-y-1">
                  <li>Download the QR code image</li>
                  <li>Print it or share it digitally with participants</li>
                  <li>Participants can scan it with their smartphone camera</li>
                  <li>They'll be taken directly to the registration form</li>
                </ol>
              </div>
              
              <Button asChild className="w-full mt-4">
                <Link to="/register">
                  Go to Registration Form
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default QRCodePage;
