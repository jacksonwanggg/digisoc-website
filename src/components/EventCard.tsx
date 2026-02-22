import type { DigiEvent } from "../data/events";
import AnimatedCard from "./AnimatedCard";
import ImagePlaceholder from "./ImagePlaceholder";

const RUBRIC_URL = "https://campus.hellorubric.com/?s=6334";

interface EventCardProps {
  event: DigiEvent;
  delay?: number;
}

export default function EventCard({ event, delay = 0 }: EventCardProps) {
  const formattedDate = new Date(event.date).toLocaleDateString("en-AU", {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <AnimatedCard className="event-card" delay={delay}>
      <ImagePlaceholder width="100%" height="140px" label={event.title} />
      <span className="event-card-date">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
      <a
        href={event.registrationUrl === "#" ? RUBRIC_URL : event.registrationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-rubric"
      >
        <img src="/rubric logo.png" alt="" width="20" height="20" />
        Get Tickets
        <svg className="external-link-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
          <polyline points="15 3 21 3 21 9" />
          <line x1="10" y1="14" x2="21" y2="3" />
        </svg>
      </a>
    </AnimatedCard>
  );
}
