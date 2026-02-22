interface ImagePlaceholderProps {
  width: string;
  height: string;
  label: string;
}

export default function ImagePlaceholder({ width, height, label }: ImagePlaceholderProps) {
  return (
    <div
      className="image-placeholder"
      style={{ width, height, minHeight: height }}
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
      <span>{label}</span>
    </div>
  );
}
