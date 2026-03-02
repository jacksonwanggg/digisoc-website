const base = typeof import.meta !== "undefined" && import.meta.env?.BASE_URL ? import.meta.env.BASE_URL : "/";

export type Portfolio = "Careers" | "Education" | "HR" | "Socials" | "Marketing" | "Media" | "IT" | "Projects";
export type VPSection = "Externals" | "Internals" | "Digital" | "Operations";

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  color: string;
  linkedin?: string;
  /** Photo path under public/execs (e.g. "alicia.png") — shown instead of initials when set */
  photo?: string;
  portfolio?: Portfolio;
  vpSection?: VPSection;
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

// Director portfolio teams
export const directorTeams: TeamMember[] = [
  // EXTERNALS
  // Careers Directors
  { id: 101, name: "Jonathan Ge", role: "Careers Director", color: "#00C9FF", portfolio: "Careers", vpSection: "Externals" },
  { id: 102, name: "Hannah Liu", role: "Careers Director", color: "#1AD4FF", portfolio: "Careers", vpSection: "Externals" },
  { id: 103, name: "Kit Ng", role: "Careers Director", color: "#00B8E6", portfolio: "Careers", vpSection: "Externals" },

  // Education Directors
  { id: 104, name: "Chuck Gao", role: "Education Director", color: "#33D1FF", portfolio: "Education", vpSection: "Externals" },
  { id: 105, name: "Angela Zhang", role: "Education Director", color: "#00A8D6", portfolio: "Education", vpSection: "Externals" },

  // INTERNALS
  // HR Directors
  { id: 201, name: "Kelly Chour", role: "HR Director", color: "#A855F7", portfolio: "HR", vpSection: "Internals" },
  { id: 202, name: "Christine Chen", role: "HR Director", color: "#B86FFF", portfolio: "HR", vpSection: "Internals" },
  { id: 203, name: "Minh Bui", role: "HR Director", color: "#983BE7", portfolio: "HR", vpSection: "Internals" },

  // Socials Directors
  { id: 204, name: "Louis Nguyen", role: "Socials Director", color: "#C880FF", portfolio: "Socials", vpSection: "Internals" },
  { id: 205, name: "Tranchau Nguyen", role: "Socials Director", color: "#D699FF", portfolio: "Socials", vpSection: "Internals" },
  { id: 206, name: "An Nguyen", role: "Socials Director", color: "#BA66F7", portfolio: "Socials", vpSection: "Internals" },

  // DIGITAL
  // Marketing Directors
  { id: 301, name: "Krystal Truong", role: "Marketing Director", color: "#F9A826", portfolio: "Marketing", vpSection: "Digital" },
  { id: 302, name: "Kristine Lim", role: "Marketing Director", color: "#FFB84D", portfolio: "Marketing", vpSection: "Digital" },
  { id: 303, name: "Duke Phan", role: "Marketing Director", color: "#E69B22", portfolio: "Marketing", vpSection: "Digital" },

  // Media Directors
  { id: 304, name: "Nick Leung", role: "Media Director", color: "#FFAE33", portfolio: "Media", vpSection: "Digital" },
  { id: 305, name: "Summer Lees", role: "Media Director", color: "#FFC266", portfolio: "Media", vpSection: "Digital" },
  { id: 306, name: "Kiet Phan", role: "Media Director", color: "#FF9E00", portfolio: "Media", vpSection: "Digital" },

  // OPERATIONS
  // IT Directors
  { id: 401, name: "Mia Grasso-Nguyen", role: "IT Director", color: "#6C5CE7", portfolio: "IT", vpSection: "Operations" },
  { id: 402, name: "Chantel Truong", role: "IT Director", color: "#8677ED", portfolio: "IT", vpSection: "Operations" },

  // Projects Directors
  { id: 404, name: "David Shun", role: "Projects Director", color: "#7C6CE9", portfolio: "Projects", vpSection: "Operations" },
  { id: 405, name: "Parham Sepas", role: "Projects Director", color: "#4A3BC6", portfolio: "Projects", vpSection: "Operations" },
];

export interface PortfolioSection {
  vpSection: VPSection;
  portfolios: Portfolio[];
}

export const portfolioStructure: PortfolioSection[] = [
  { vpSection: "Externals", portfolios: ["Careers", "Education"] },
  { vpSection: "Internals", portfolios: ["HR", "Socials"] },
  { vpSection: "Digital", portfolios: ["Marketing", "Media"] },
  { vpSection: "Operations", portfolios: ["IT", "Projects"] },
];

export const portfolios: Portfolio[] = ["Careers", "Education", "HR", "Socials", "Marketing", "Media", "IT", "Projects"];
export const vpSections: VPSection[] = ["Externals", "Internals", "Digital", "Operations"];

export function getExecPhotoUrl(photo: string): string {
  return `${base}execs/${photo}`;
}
