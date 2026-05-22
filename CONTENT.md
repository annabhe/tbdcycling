# TBD Cycling — Content Guide

All images live in `public/content/`.

```
public/
  content/
    posters/      ← ride poster images (4:5 ratio recommended)
    photos/       ← group ride photos (any ratio)
```

## Adding a new ride poster

1. Copy the poster image into `public/content/posters/`
   - Recommended format: `.jpg` or `.webp`
   - Recommended dimensions: 800 × 1000 px (4:5)

2. Open `src/content/index.js` and add a new entry at the **top** of the `POSTERS` array:

```js
{
  id: "ride-aug-2025",          // unique slug, use ride-MONTH-YEAR
  src: "/content/posters/ride-aug-2025.jpg",
  title: "August Night Ride",
  date: "August 9, 2025",
  alt: "August Night Ride poster",
},
```

3. Update `featuredPosterId` to point to the new poster's id:

```js
export const featuredPosterId = "ride-aug-2025";
```

The featured poster appears large at the top of the home page. All others appear in the grid below.

## Adding a group photo

1. Copy the photo into `public/content/photos/`

2. Open `src/content/index.js` and add a new entry at the **top** of the `PHOTOS` array:

```js
{
  id: "photo-aug-2025-1",
  src: "/content/photos/aug-group-1.jpg",
  alt: "August Night Ride group photo",
  caption: "August Night Ride",
},
```

That's it — the grid updates automatically.
