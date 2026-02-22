import type { DigiEvent } from "../data/events";
import AnimatedCard from "./AnimatedCard";
import ImagePlaceholder from "./ImagePlaceholder";

interface EventCardProps {
  event: DigiEvent;
  delay?: number;
  past?: boolean;
}

export default function EventCard({ event, delay = 0, past = false }: EventCardProps) {
  const formattedDate = new Date(event.date + "T00:00:00").toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const handleCardClick = () => {
    window.open(event.instagramUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <AnimatedCard className={`event-card ${past ? "event-card-past" : ""}`} delay={delay} onClick={handleCardClick}>
      <div className="event-card-link">
      {event.image ? (
        <img
          src={event.image}
          alt={event.title}
          className="event-card-image"
        />
      ) : (
        <ImagePlaceholder width="100%" height="140px" label={event.title} />
      )}
      <span className="event-card-date">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
        {formattedDate}
      </span>
      {past && <span className="event-card-badge-past">Past Event</span>}
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <span className="event-card-meta">
        {event.time} &middot; {event.location}
      </span>
      <a
        href={event.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-instagram"
        onClick={(e) => {
          e.stopPropagation();
          window.open(event.instagramUrl, "_blank", "noopener,noreferrer");
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
        View on Instagram
        <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
      </div>
    </AnimatedCard>
  );
}
