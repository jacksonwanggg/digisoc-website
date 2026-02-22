import type { TeamMember } from "../data/team";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="card team-card">
      <div
        className="team-card-avatar"
        style={{ background: member.color }}
      >
        {initials}
      </div>
      <h3>{member.name}</h3>
      <p>{member.role}</p>
    </div>
  );
}
