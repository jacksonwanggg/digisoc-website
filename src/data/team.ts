export interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
}

export const team: TeamMember[] = [
  { id: 1, name: "Alex Chen", role: "President", color: "#6C5CE7" },
  { id: 2, name: "Sarah Kim", role: "Vice President", color: "#FF6584" },
  { id: 3, name: "James Wu", role: "Secretary", color: "#43E8C3" },
  { id: 4, name: "Priya Sharma", role: "Treasurer", color: "#F9A826" },
  { id: 5, name: "David Park", role: "Events Director", color: "#00C9FF" },
  { id: 6, name: "Emma Liu", role: "Marketing Director", color: "#A855F7" },
  { id: 7, name: "Ryan Nguyen", role: "Tech Director", color: "#6C5CE7" },
  { id: 8, name: "Olivia Zhang", role: "Partnerships Director", color: "#FF6584" },
  { id: 9, name: "Liam Santos", role: "Design Lead", color: "#43E8C3" },
  { id: 10, name: "Chloe Wang", role: "Content Lead", color: "#F9A826" },
];
