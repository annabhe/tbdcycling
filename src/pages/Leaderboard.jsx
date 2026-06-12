export default function Leaderboard() {
  return (
    <div className="pt-24 px-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
          Leaderboard
        </span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      <h1 className="font-display text-[clamp(3rem,8vw,7rem)] leading-none tracking-wider text-chalk mb-10">
        LEADER<span className="text-signal">BOARD</span>
      </h1>

      <iframe
        src="/content/charts/rider_leaderboard_2026.html"
        className="w-full rounded-sm border border-white/10"
        style={{ height: "600px" }}
        title="Leaderboard chart"
      />
    </div>
  );
}