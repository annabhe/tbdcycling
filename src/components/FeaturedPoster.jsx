import { POSTERS, featuredPosterId } from "../content/index.js";

export default function FeaturedPoster({ onOpen }) {
  const poster = POSTERS.find((p) => p.id === featuredPosterId) ?? POSTERS[0];

  if (!poster) return null;

  return (
    <section className="px-6 py-10 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-s tracking-[0.3em] text-signal uppercase">
          Next Ride
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>
      <div className="flex flex-col justify-end pb-2">
        <p className="font-mono text-xs tracking-[0.2em] text-mist uppercase mb-3">
          {poster.date}
        </p>
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-none tracking-wider text-chalk mb-6">
          {poster.title}
        </h2>
      </div>

      {/* Poster + info */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Poster image — fixed 4:5 ratio */}
        <button
          onClick={() => onOpen({ src: poster.src, alt: poster.alt })}
          className="group relative flex-shrink-0 w-full md:w-[340px]"
          aria-label={`View ${poster.title} poster`}
        >
          <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
            <img
              src={poster.src}
              alt={poster.alt}
              className="absolute inset-0 w-full h-full object-cover rounded-sm"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "flex";
              }}
            />
            {/* Placeholder when no image is present */}
            <div
              className="absolute inset-0 hidden flex-col items-center justify-center bg-white/5 rounded-sm border border-white/10"
              aria-hidden="true"
            >
              <span className="font-display text-6xl text-white/20 tracking-widest">TBD</span>
              <span className="font-mono text-xs text-white/30 mt-2 tracking-widest">POSTER COMING SOON</span>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-asphalt/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm flex items-center justify-center">
              <span className="font-mono text-xs tracking-widest text-chalk border border-chalk/50 px-4 py-2 rounded-full">
                View Full Size
              </span>
            </div>
          </div>
        </button>

        {/* Ride details */}
        <div className="flex flex-col justify-end pb-2">
          <div className="w-12 h-1 bg-signal mb-6" />
          <p className="font-body text-sm text-mist leading-relaxed max-w-xs">
            Details and route info coming soon. Watch this space — or check the group chat.
          </p>
        </div>
      </div>
    </section>
  );
}
