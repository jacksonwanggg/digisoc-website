const base = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : "/";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
  linkedin?: string;
  /** Photo path under public/execs (e.g. "alicia.png") — shown instead of initials when set */
  photo?: string;
}

export const team: TeamMember[] = [
  { id: 1, name: "Alicia McGregor", role: "Co-President", color: "#6C5CE7", linkedin: "https://www.linkedin.com/in/aliciamcgregor/", photo: "alicia.png" },
  { id: 2, name: "Chanel Chen", role: "Co-President", color: "#FF6584", linkedin: "https://www.linkedin.com/in/chanel-c-04a9212b9/", photo: "chanel.JPG" },
  { id: 3, name: "Anthony Le", role: "VP Finance", color: "#43E8C3", linkedin: "https://www.linkedin.com/in/anthony-le-6504b226b/" },
  { id: 4, name: "Kylie Chan", role: "VP Digital", color: "#F9A826", linkedin: "https://www.linkedin.com/in/kylie-chan-7a7633334/", photo: "kylie.JPG" },
  { id: 5, name: "Shanjida Khan", role: "VP Externals", color: "#00C9FF", linkedin: "https://www.linkedin.com/in/shanjida-khan-ab690b235/" },
  { id: 6, name: "Aren Dosser", role: "VP Internals", color: "#A855F7", linkedin: "https://www.linkedin.com/in/aren-dosser/" },
  { id: 7, name: "Jayden Lam", role: "VP Operations", color: "#6C5CE7", linkedin: "https://www.linkedin.com/in/jaydenn-lam/", photo: "jayden.JPG" },
];

export function getExecPhotoUrl(photo: string): string {
  return `${base}execs/${photo}`;
}
