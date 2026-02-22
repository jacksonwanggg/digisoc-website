import TeamCard from "../components/TeamCard";
import { team } from "../data/team";

export default function Team() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-blue animate-pulse"
          style={{ width: 400, height: 400, top: -100, right: -100 }}
        />
        <div className="container">
          <h1>
            The <span className="gradient-text">Team</span>
          </h1>
          <p>
            Meet the passionate executives who make DigiSoc possible.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-4">
            {team.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
