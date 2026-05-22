import { POSTERS, PHOTOS, featuredPosterId } from "../content/index.js";
import GridItem from "./GridItem.jsx";

export default function MediaGrid({ onOpen }) {
  // All grid items: past posters (excluding featured) + photos, newest first
  const pastPosters = POSTERS.filter((p) => p.id !== featuredPosterId).map((p) => ({
    ...p,
    caption: p.title,
    kind: "poster",
    aspectRatio: "4/5",
  }));

  const photos = PHOTOS.map((p) => ({
    ...p,
    kind: "photo",
    aspectRatio: "1/1",
  }));

  // Interleave: poster, photos, poster, photos …
  const items = [];
  const maxLen = Math.max(pastPosters.length, photos.length);
  for (let i = 0; i < maxLen; i++) {
    if (pastPosters[i]) items.push(pastPosters[i]);
    if (photos[i]) items.push(photos[i]);
  }

  if (items.length === 0) return null;

  return (
    <section className="px-6 py-10 pb-24 max-w-6xl mx-auto">
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-xs tracking-[0.3em] text-signal uppercase">
          Rides &amp; Photos
        </span>
        <div className="flex-1 h-px bg-white/10" />
        <span className="font-mono text-xs text-mist">{items.length} items</span>
      </div>

      {/* Masonry-style grid — 2 cols mobile, 3 cols md, 4 cols lg */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <GridItem
            key={item.id}
            src={item.src}
            alt={item.alt}
            caption={item.caption}
            aspectRatio={item.aspectRatio}
            onOpen={onOpen}
          />
        ))}
      </div>
    </section>
  );
}
