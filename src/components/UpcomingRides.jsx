import { UPCOMING_RIDES } from "../content/index.js";

export default function UpcomingRides() {
  if (!UPCOMING_RIDES?.length) return null;

  return (
    <section className="px-6 py-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <span className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
          Upcoming Rides
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <ul>
        {UPCOMING_RIDES.map((ride) => (
          <li key={ride.id} className="flex items-center gap-5 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-signal flex-shrink-0" />
            <span className="font-mono text-xs tracking-widest text-mist uppercase w-28 flex-shrink-0">
              {ride.date}
            </span>
            <span className="font-body text-sm text-chalk">
              {ride.name}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}