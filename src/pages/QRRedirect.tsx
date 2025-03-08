
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const QRRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect to registration page after a short delay
    const redirectTimer = setTimeout(() => {
      navigate('/register');
    }, 1000); // 1-second delay before redirecting
    
    return () => clearTimeout(redirectTimer); // Clean up timer on unmount
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2">Redirecting...</h2>
        <p className="text-gray-600">Taking you to the hackathon registration page</p>
      </div>
    </div>
  );
};

export default QRRedirect;
