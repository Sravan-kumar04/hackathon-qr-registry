
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const QRRedirect = () => {
  const navigate = useNavigate();
  const { eventId } = useParams<{ eventId: string }>();

  useEffect(() => {
    // Automatically redirect to event registration page after a short delay
    const redirectTimer = setTimeout(() => {
      if (eventId) {
        navigate(`/register/${eventId}`);
      } else {
        navigate('/register');
      }
    }, 1000); // 1-second delay before redirecting
    
    return () => clearTimeout(redirectTimer); // Clean up timer on unmount
  }, [navigate, eventId]);

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
