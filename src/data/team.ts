export interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
}

export const team: TeamMember[] = [
  { id: 1, name: "Olivia Chen", role: "President", color: "#6C63FF" },
  { id: 2, name: "James Nguyen", role: "Vice President", color: "#FF6584" },
  { id: 3, name: "Priya Sharma", role: "Events Director", color: "#43E97B" },
  {
    id: 4,
    name: "Liam O'Brien",
    role: "Partnerships Director",
    color: "#F9A826",
  },
  { id: 5, name: "Sophie Kim", role: "Tech Director", color: "#00C9FF" },
  { id: 6, name: "Marcus Lee", role: "Marketing Director", color: "#F857A6" },
  { id: 7, name: "Emily Zhang", role: "Secretary", color: "#A18CD1" },
  { id: 8, name: "Daniel Patel", role: "Treasurer", color: "#FF9A76" },
];
