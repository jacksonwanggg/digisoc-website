import EventCard from "../components/EventCard";
import { events } from "../data/events";

export default function Events() {
  return (
    <>
      <section className="page-header">
        <div
          className="blob blob-pink animate-pulse"
          style={{ width: 400, height: 400, top: -100, left: -100 }}
        />
        <div className="container">
          <h1>
            Our <span className="gradient-text">Events</span>
          </h1>
          <p>
            Workshops, hackathons, panels, and socials — there&apos;s always
            something happening at DigiSoc.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <p className="section-subtitle">
            Check out what we have planned for this semester.
          </p>
          <div className="grid-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
