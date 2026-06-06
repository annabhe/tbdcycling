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

// ── Featured poster ───────────────────────────────────────
// Set this to the `id` of whichever poster should be
// displayed large at the top of the home page.

export const featuredPosterId = "jun-06-2026";

// ── Posters ──────────────────────────────────────────────
// Each poster appears in the grid. 

export const POSTERS = [
  {
    id: "jun-06-2026",
    src: "/content/posters/2026-06-06.jpg",
    title: "Eden Pickleball Ride",
    date: "June 06, 2026",
    alt: "",
  },
  {
    id: "may-30-2026",
    src: "/content/posters/2026-05-30.png",
    title: "Hillwood Estates Ride",
    date: "May 30, 2026",
    alt: "",
  },
  {
    id: "may-16-2026",
    src: "/content/posters/2026-05-16.png",
    title: "Alexandria Coffee Ride",
    date: "May 16, 2026",
    alt: "Alexandria coffee ride poster",
  },
  {
    id: "may-02-2026",
    src: "/content/posters/2026-05-02.png",
    title: "Vienna Coffee Ride",
    date: "May 02, 2026",
    alt: "Vienna Coffee Ride poster",
  },

];

// ── Group photos ─────────────────────────────────────────
// Ride group photos shown in the Instagram-style grid
// alongside the posters.

export const PHOTOS = [
  // {
  //   id: "photo-may-16-2026",
  //   src: "/content/photos/2026-05-16.png",
  //   alt: "Alexandria MGM group photo",
  //   caption: "Alexandria MGM",
  // },
  // {
  //   id: "photo-may-02-2026",
  //   src: "/content/photos/2026-05-02.png",
  //   alt: "Vienna Coffee Ride Photo",
  //   caption: "Vienna Coffee Ride",
  // }
];
