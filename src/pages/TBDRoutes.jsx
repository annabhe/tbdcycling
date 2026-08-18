import { TBDROUTES } from "../content/routes.js";

export default function TBDRoutes() {
  if (!TBDROUTES?.length) return null;
  console.log(TBDROUTES);
  return (
    <>
      <div className="pt-16 pb-8 px-6 max-w-6xl mx-auto" />

      <h1 style={{ marginBottom: "0.5rem" }}>Frequent Routes</h1>

      <ul style={{ listStyleType: "disc", paddingLeft: "1.25rem", marginTop: "0.5rem" }}>
        {TBDROUTES.map((r, i) => (
          <li key={i} style={{ marginBottom: "0.75rem" }}>
            <h2 style={{ margin: "0 0 0.25rem 0" }}>
              <a
                href={r.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--chalk)", textDecoration: "underline" }}
              >
                {r.name || "Unnamed route"}
              </a>
            </h2>

            <ul style={{ listStyleType: "circle", paddingLeft: "1rem", margin: 0 }}>
              <li>Starting point: {r.start || "—"}</li>
              <li>Total mileage: {r.miles || "—"}</li>
              <li>Coffee stop: {r.coffee || "—"}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
}
