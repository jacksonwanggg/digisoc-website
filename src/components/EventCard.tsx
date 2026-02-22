import type { DigiEvent } from "../data/events";

interface EventCardProps {
  event: DigiEvent;
}

export default function EventCard({ event }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="card event-card">
      <span className="event-card-date">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {formattedDate}
      </span>
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <span className="event-card-meta">
        {event.time} &middot; {event.location}
      </span>
      <a href={event.registrationUrl} className="btn btn-primary">
        Register
      </a>
    </div>
  );
}
