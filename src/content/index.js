/**
 * ─────────────────────────────────────────────────────────
 *  TBD CYCLING — CONTENT INDEX
 *  Edit this file to manage all site content.
 * ─────────────────────────────────────────────────────────
 *
 *  HOW TO ADD A NEW RIDE POSTER
 *  1. Drop the poster image in:  public/content/posters/
 *  2. Add an entry to POSTERS below (newest first).
 *  3. Set featuredPosterId to the new poster's id.
 *
 *  HOW TO ADD A GROUP PHOTO
 *  1. Drop the photo in:  public/content/photos/
 *  2. Add an entry to PHOTOS below (newest first).
 *
 *  Supported image formats: jpg, jpeg, png, webp, gif
 * ─────────────────────────────────────────────────────────
 */

// ── Posters ──────────────────────────────────────────────
// Each poster appears in the grid. The featured poster is
// controlled by `featuredPosterId` below.

export const POSTERS = [
  {
    id: "ride-jun-2025",
    src: "/content/posters/ride-jun-2025.jpg",
    title: "Summer Solstice Ride",
    date: "June 21, 2025",
    alt: "Summer Solstice Ride poster",
  },
  {
    id: "ride-may-2025",
    src: "/content/posters/ride-may-2025.jpg",
    title: "May Day Spin",
    date: "May 4, 2025",
    alt: "May Day Spin poster",
  },
  {
    id: "ride-apr-2025",
    src: "/content/posters/ride-apr-2025.jpg",
    title: "Spring Awakening",
    date: "April 13, 2025",
    alt: "Spring Awakening poster",
  },
];

// ── Featured poster ───────────────────────────────────────
// Set this to the `id` of whichever poster should be
// displayed large at the top of the home page.

export const featuredPosterId = "ride-jun-2025";

// ── Group photos ─────────────────────────────────────────
// Ride group photos shown in the Instagram-style grid
// alongside the posters.

export const PHOTOS = [
  {
    id: "photo-may-2025-1",
    src: "/content/photos/may-group-1.jpg",
    alt: "May Day Spin group photo",
    caption: "May Day Spin",
  },
  {
    id: "photo-may-2025-2",
    src: "/content/photos/may-group-2.jpg",
    alt: "May Day Spin finish line",
    caption: "May Day Spin — finish line",
  },
  {
    id: "photo-apr-2025-1",
    src: "/content/photos/apr-group-1.jpg",
    alt: "Spring Awakening group photo",
    caption: "Spring Awakening",
  },
  {
    id: "photo-apr-2025-2",
    src: "/content/photos/apr-group-2.jpg",
    alt: "Spring Awakening rolling",
    caption: "Spring Awakening — en route",
  },
];
