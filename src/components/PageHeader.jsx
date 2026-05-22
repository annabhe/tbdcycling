export default function PageHeader() {
  return (
    <div className="pt-8 pb-8 px-6 max-w-6xl mx-auto">
      {/* Overline label */}
      <p className="font-mono text-xs tracking-[0.3em] text-mist uppercase mb-3">
        Washington D.C. &bull; Est. 2023
      </p>

      {/* Club name */}
      <h1 className="font-display text-[clamp(4rem,12vw,9rem)] leading-none tracking-widest text-chalk">
        TBD
        <span className="text-signal">CYCLING</span>
      </h1>

      {/* Divider */}
      <div className="mt-6 h-px bg-gradient-to-r from-signal via-mist/30 to-transparent" />
    </div>
  );
}
