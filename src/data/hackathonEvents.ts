
import { HackathonEvent } from "@/types/hackathonTypes";

export const hackathonEvents: HackathonEvent[] = [
  {
    id: "techthrone-2023",
    title: "TechThrone Hackathon 2023",
    description: "Join the ultimate coding competition and showcase your skills",
    startDate: "2023-10-15",
    endDate: "2023-10-17",
    location: "San Francisco, CA",
    theme: "Sustainable Technology Solutions",
    registrationOpen: true,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "ai-summit-2023",
    title: "AI Innovation Summit",
    description: "Build the next generation of AI-powered solutions",
    startDate: "2023-11-05",
    endDate: "2023-11-07",
    location: "New York, NY",
    theme: "Artificial Intelligence for Good",
    registrationOpen: true,
    imageUrl: "/placeholder.svg"
  },
  {
    id: "web3-hackfest",
    title: "Web3 HackFest",
    description: "Creating the decentralized future of the web",
    startDate: "2023-12-10",
    endDate: "2023-12-12",
    location: "Austin, TX",
    theme: "Blockchain & Web3 Applications",
    registrationOpen: true,
    imageUrl: "/placeholder.svg"
  }
];

export const getHackathonById = (id: string): HackathonEvent | undefined => {
  return hackathonEvents.find(event => event.id === id);
};
