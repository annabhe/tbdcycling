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

export const featuredPosterId = "jun-13-2026";

// ── Posters ──────────────────────────────────────────────
// Each poster appears in the grid. 

export const POSTERS = [
  {
    id: "jun-13-2026",
    src: "content/posters/2026-06-13.jpg",
    title: "CCT-RCP Loop",
    date: "June 13, 2026",
    alt: "",
  },
  {
    id: "jun-06-2026",
    src: "content/posters/2026-06-06.jpg",
    title: "TBD Sports Expansion: Pickleball Ride",
    date: "June 06, 2026",
    alt: "",
  },
  {
    id: "may-30-2026",
    src: "content/posters/2026-05-30.png",
    title: "Flower Power Ride",
    date: "May 30, 2026",
    alt: "",
  },
  {
    id: "may-16-2026",
    src: "content/posters/2026-05-16.png",
    title: "Is this bike AI?",
    date: "May 16, 2026",
    alt: "Alexandria coffee ride poster",
  },
  {
    id: "may-02-2026",
    src: "content/posters/2026-05-02.png",
    title: "Vienna Coffee Ride",
    date: "May 02, 2026",
    alt: "Vienna Coffee Ride poster",
  },
  {
    id: "04-25-2026",
    src: "content/posters/2026-04-25.png",
    title: "Josh's Bootleg",
    date: "April 25, 2026",
    alt: "Ride poster",
  },
  {
    id: "04-18-2026",
    src: "content/posters/2026-04-18.png",
    title: "Eggstravaganza and Egglection Ride",
    date: "April 18, 2026",
    alt: "Ride poster",
  },
  {
    id: "04-11-2026",
    src: "content/posters/2026-04-11.png",
    title: "Long Ride with Looooong Train Crossing",
    date: "April 11, 2026",
    alt: "Ride poster",
  },
  {
    id: "04-04-2026",
    src: "content/posters/2026-04-04.png",
    title: "Eden Center Ride",
    date: "April 04, 2026",
    alt: "Ride poster",
  },
  {
    id: "03-28-2026",
    src: "content/posters/2026-03-28.png",
    title: "Cherry Blossom Ride",
    date: "March 28, 2026",
    alt: "Ride poster",
  },
  {
    id: "03-21-2026",
    src: "content/posters/2026-03-21.png",
    title: "Cinnamon Roll Ride",
    date: "March 21, 2026",
    alt: "Ride poster",
  },
  {
    id: "03-14-2026",
    src: "content/posters/2026-03-14.png",
    title: "3.141592653589793238462643383279504197",
    date: "March 14, 2026",
    alt: "Ride poster",
  },
  {
    id: "03-07-2026",
    src: "content/posters/2026-03-07.png",
    title: "What is your favourite chicken dish?",
    date: "March 07, 2026",
    alt: "Ride poster",
  },
  {
    id: "02-28-2026",
    src: "content/posters/2026-02-28.png",
    title: "ART-Sligo-RCP",
    date: "February 28, 2026",
    alt: "Ride poster",
  },
  {
    id: "02-21-2026",
    src: "content/posters/2026-02-21.png",
    title: "HBD Anna: Military Rd Gift Ride",
    date: "February 21, 2026",
    alt: "Ride poster",
  },
  {
    id: "02-14-2026",
    src: "content/posters/2026-02-14.png",
    title: "RIde of Love <3",
    date: "February 14, 2026",
    alt: "Ride poster",
  },
  {
    id: "01-24-2026",
    src: "content/posters/2026-01-24.png",
    title: "Very Cold Ride",
    date: "January 24, 2026",
    alt: "Ride poster",
  },
  {
    id: "01-17-2026",
    src: "content/posters/2026-01-17.png",
    title: "ART-MBT Vigilante Ride",
    date: "January 17, 2026",
    alt: "Ride poster",
  },
  {
    id: "01-11-2026",
    src: "content/posters/2026-01-11.png",
    title: "CCT-RCP Loop",
    date: "January 11, 2026",
    alt: "Ride poster",
  },
  {
    id: "01-03-2026",
    src: "content/posters/2026-01-03.png",
    title: "New Year New TBD",
    date: "January 03, 2026",
    alt: "Ride poster",
  },


];

export const UPCOMING_RIDES = [
  { id: "jun-20-2026", date: "June 20, 2026", name: "ART Vigilante Ride" },
  { id: "jun-27-2026", date: "June 27, 2026", name: "TBD" },
  { id: "jul-04-2026", date: "July 04, 2026", name: "Harper's Ferry Overnighter" },
  { id: "jul-11-2026", date: "July 11, 2026", name: "Berry Picking Poolesville Farm Ride" },
  { id: "jul-18-2026", date: "July 18, 2026", name: "Fort Washington Ride" },
  { id: "jul-25-2026", date: "July 25, 2026", name: "Shenandoah MassSky Loop" },
  { id: "aug-01-2026", date: "August 01, 2026", name: "ART / Kenilworth Ride" },
  { id: "aug-08-2026", date: "August 08, 2026", name: "Ultimate TBD Century" },
  { id: "aug-15-2026", date: "August 15, 2026", name: "TBD" },
]

// ── Group photos ─────────────────────────────────────────
// Ride group photos shown in the Instagram-style grid
// alongside the posters.

export const PHOTOS = [
  // {
  //   id: "photo-may-16-2026",
  //   src: "content/photos/2026-05-16.png",
  //   alt: "Alexandria MGM group photo",
  //   caption: "Alexandria MGM",
  // },
  // {
  //   id: "photo-may-02-2026",
  //   src: "content/photos/2026-05-02.png",
  //   alt: "Vienna Coffee Ride Photo",
  //   caption: "Vienna Coffee Ride",
  // }
];
