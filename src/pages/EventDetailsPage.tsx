
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, ChevronLeft, MapPin, QrCode, Users, Code } from 'lucide-react';
import { getHackathonById } from '@/data/hackathonEvents';
import { format } from 'date-fns';

const EventDetailsPage = () => {
  const { eventId } = useParams<{ eventId: string }>();
  const navigate = useNavigate();
  const event = getHackathonById(eventId || '');

  if (!event) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Event Not Found</h1>
          <p className="text-gray-600 mb-8">The hackathon event you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Back to Home</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex justify-start mb-6">
          <Button asChild variant="ghost" size="sm">
            <Link to="/" className="flex items-center">
              <ChevronLeft className="h-4 w-4 mr-1" /> Back to Events
            </Link>
          </Button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-bold">{event.title}</CardTitle>
                <CardDescription className="text-lg">{event.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-5 w-5 text-hackathon-blue" />
                      <span className="font-semibold">Date</span>
                    </div>
                    <p>
                      {format(new Date(event.startDate), 'MMMM d')} - {format(new Date(event.endDate), 'MMMM d, yyyy')}
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <MapPin className="h-5 w-5 text-hackathon-purple" />
                      <span className="font-semibold">Location</span>
                    </div>
                    <p>{event.location}</p>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Code className="h-5 w-5 text-hackathon-cyan" />
                    <span className="font-semibold">Theme</span>
                  </div>
                  <p>{event.theme}</p>
                </div>
                
                <div className="prose max-w-none">
                  <h3 className="text-xl font-semibold mb-2">About This Event</h3>
                  <p>
                    Join us for an exciting hackathon where you'll collaborate with like-minded 
                    innovators to develop solutions focused on {event.theme.toLowerCase()}. 
                    Over the course of 48 hours, your team will conceptualize, design, and build 
                    a working prototype to showcase to our panel of expert judges.
                  </p>
                  <p>
                    Whether you're a coding expert, designer, or idea generator, there's a place 
                    for you at {event.title}. Form a team or join one at the event and put your 
                    skills to the test!
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-hackathon-blue hover:bg-hackathon-blue/90">
                  <Link to={`/register/${event.id}`}>
                    Register for This Event
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Event QR Code</CardTitle>
                <CardDescription>
                  Scan to quickly access this event's registration
                </CardDescription>
              </CardHeader>
              <CardContent className="flex justify-center">
                <img 
                  src={`https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(`${window.location.origin}/qr/${event.id}`)}&chs=200x200&choe=UTF-8&chld=L|2`}
                  alt="Event Registration QR Code"
                  className="h-[200px] w-[200px] object-contain border border-gray-200 rounded-md"
                />
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/qr/${event.id}`}>
                    <QrCode className="mr-2 h-4 w-4" /> Get QR Code
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Event Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <span className="text-sm font-medium">Registration Status: </span>
                  {event.registrationOpen ? (
                    <span className="text-green-600 font-medium">Open</span>
                  ) : (
                    <span className="text-red-600 font-medium">Closed</span>
                  )}
                </div>
                <div>
                  <span className="text-sm font-medium">Team Size: </span>
                  <span>3-4 members</span>
                </div>
                <div>
                  <span className="text-sm font-medium">Duration: </span>
                  <span>48 hours</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsPage;
