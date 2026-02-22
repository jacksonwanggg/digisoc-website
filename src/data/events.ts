export interface DigiEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  registrationUrl: string;
}

export const events: DigiEvent[] = [
  {
    id: 1,
    title: "Intro to Web Development",
    description:
      "Learn the fundamentals of HTML, CSS, and JavaScript in this beginner-friendly workshop. Build your first webpage from scratch!",
    date: "2026-03-10",
    time: "6:00 PM - 8:00 PM",
    location: "Ainsworth Building G03",
    registrationUrl: "#",
  },
  {
    id: 2,
    title: "Industry Night: Tech Careers Panel",
    description:
      "Hear from professionals at Google, Atlassian, and Canva about breaking into the tech industry as a UNSW graduate.",
    date: "2026-03-18",
    time: "5:30 PM - 7:30 PM",
    location: "Tyree Energy Technologies Building",
    registrationUrl: "#",
  },
  {
    id: 3,
    title: "Hackathon: DigiHack 2026",
    description:
      "48-hour hackathon where teams compete to build innovative digital solutions. Amazing prizes and mentorship from industry experts.",
    date: "2026-04-05",
    time: "9:00 AM (Sat) - 9:00 AM (Mon)",
    location: "John Niland Scientia Building",
    registrationUrl: "#",
  },
  {
    id: 4,
    title: "UI/UX Design Workshop",
    description:
      "Explore design thinking, Figma prototyping, and user research techniques in this hands-on design workshop.",
    date: "2026-04-15",
    time: "6:00 PM - 8:30 PM",
    location: "Red Centre East Wing",
    registrationUrl: "#",
  },
  {
    id: 5,
    title: "Cloud Computing with AWS",
    description:
      "Get started with cloud infrastructure. Deploy your first app on AWS with guided, hands-on exercises.",
    date: "2026-04-22",
    time: "6:00 PM - 8:00 PM",
    location: "Ainsworth Building G03",
    registrationUrl: "#",
  },
  {
    id: 6,
    title: "End of Semester Social",
    description:
      "Celebrate an incredible semester with food, drinks, trivia, and networking. All members welcome!",
    date: "2026-05-10",
    time: "5:00 PM - 8:00 PM",
    location: "Roundhouse Bar & Grill",
    registrationUrl: "#",
  },
];
