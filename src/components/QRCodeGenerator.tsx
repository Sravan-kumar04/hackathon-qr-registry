
import React, { useState, useEffect } from 'react';
import { QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface QRCodeGeneratorProps {
  value: string;
}

const QRCodeGenerator: React.FC<QRCodeGeneratorProps> = ({ value }) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Use Google Charts API to generate QR code
    // Generate the QR code using the provided value
    const url = `https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(value)}&chs=250x250&choe=UTF-8&chld=L|2`;
    setQrCodeUrl(url);
    setIsLoading(false);
  }, [value]); // Re-generate when value changes

  const downloadQRCode = () => {
    // Create a temporary link to download the image
    const link = document.createElement('a');
    link.href = qrCodeUrl;
    link.download = 'hackathon-registration-qr.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <QrCode className="w-5 h-5" />
          Registration QR Code
        </CardTitle>
        <CardDescription>
          Scan this QR code to access the registration form
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        {isLoading ? (
          <div className="h-[250px] w-[250px] bg-gray-100 animate-pulse flex items-center justify-center">
            <QrCode className="w-12 h-12 text-gray-400" />
          </div>
        ) : (
          <img
            src={qrCodeUrl}
            alt="Registration QR Code"
            className="h-[250px] w-[250px] object-contain border border-gray-200 rounded-md"
          />
        )}
      </CardContent>
      <CardFooter>
        <Button 
          onClick={downloadQRCode} 
          className="w-full"
          disabled={isLoading}
        >
          Download QR Code
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QRCodeGenerator;
