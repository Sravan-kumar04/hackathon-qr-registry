
export interface HackathonEvent {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  theme: string;
  registrationOpen: boolean;
  imageUrl?: string;
}
