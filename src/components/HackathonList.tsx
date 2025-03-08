
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, QrCode, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { HackathonEvent } from '@/types/hackathonTypes';
import { format } from 'date-fns';

interface HackathonListProps {
  events: HackathonEvent[];
}

const HackathonList: React.FC<HackathonListProps> = ({ events }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="flex flex-col h-full">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-bold">{event.title}</CardTitle>
            <CardDescription>{event.description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Calendar className="h-4 w-4" />
              <span>
                {format(new Date(event.startDate), 'MMM d')} - {format(new Date(event.endDate), 'MMM d, yyyy')}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
              <MapPin className="h-4 w-4" />
              <span>{event.location}</span>
            </div>
            <div className="text-sm">
              <strong>Theme:</strong> {event.theme}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between pt-2">
            <Button asChild variant="outline" size="sm">
              <Link to={`/qr/${event.id}`}>
                <QrCode className="mr-2 h-4 w-4" /> QR Code
              </Link>
            </Button>
            <Button asChild size="sm">
              <Link to={`/event/${event.id}`}>
                Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HackathonList;
