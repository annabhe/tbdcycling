import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/leaderboard", label: "Leaderboard" },
  { to: "/holiday-party", label: "Holiday Party" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close drawer on navigation
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-asphalt/90 backdrop-blur-sm border-b border-white/5">
      {/* Wordmark */}
      <NavLink to="/" className="font-display text-3xl tracking-widest text-signal hover:text-chalk transition-colors duration-200">
        TBD<span className="text-chalk">CYCLING</span>
      </NavLink>

      {/* Desktop links */}
      <nav className="hidden md:flex items-center gap-1">
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `font-mono text-xs tracking-widest uppercase px-4 py-2 rounded-full transition-all duration-200 ${
                isActive ? "bg-signal text-asphalt font-medium" : "text-mist hover:text-chalk"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Hamburger button — mobile only */}
      <button
        onClick={() => setIsOpen((o) => !o)}
        className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        <span className={`block h-px bg-chalk transition-all duration-300 origin-center ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
        <span className={`block h-px bg-chalk transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block h-px bg-chalk transition-all duration-300 origin-center ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 top-[61px] bg-asphalt/70 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div className={`md:hidden fixed top-[69px] right-0 bottom-0 w-64 min-h-[calc(45vh-69px)] bg-[#ccd5ae] border-l border-white/10 z-50 flex flex-col pt-8 px-6 gap-2 transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {NAV_LINKS.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `font-mono text-sm tracking-widest uppercase py-3 border-b border-white/5 transition-colors duration-200 ${
                isActive ? "text-signal" : "text-mist hover:text-asphalt"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}