export default function GridItem({ src, alt, caption, aspectRatio = "1/1", onOpen }) {
  return (
    <button
      onClick={() => onOpen({ src, alt, caption })}
      className="group relative block w-full overflow-hidden bg-white/5 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
      aria-label={`View ${caption ?? alt}`}
    >
      <div className="relative w-full" style={{ aspectRatio }}>
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Placeholder */}
        <div
          className="absolute inset-0 hidden flex-col items-center justify-center bg-white/5"
          aria-hidden="true"
        >
          <span className="font-display text-3xl text-white/20 tracking-widest">TBD</span>
        </div>

        {/* Hover overlay with caption */}
        <div className="absolute inset-0 bg-asphalt/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
          {caption && (
            <p className="font-mono text-xs text-chalk tracking-wide leading-snug text-left">
              {caption}
            </p>
          )}
        </div>
      </div>
    </button>
  );
}
