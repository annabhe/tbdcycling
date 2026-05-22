import { useEffect, useCallback } from "react";

export default function Modal({ item, onClose }) {
  // Close on Escape
  const handleKey = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  if (!item) return null;

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-asphalt/95 backdrop-blur-md p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-signal hover:text-asphalt text-chalk transition-all duration-200 z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        aria-label="Close"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Image container — stop propagation so clicking image doesn't close */}
      <div
        className="relative max-w-full max-h-full flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.alt}
          className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl"
        />
        {item.caption && (
          <p className="font-mono text-xs tracking-widest text-mist uppercase">
            {item.caption}
          </p>
        )}
      </div>
    </div>
  );
}
