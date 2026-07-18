export function Fog() {
  return (
    <div
      className="fog pointer-events-none fixed inset-0 z-[-1] overflow-hidden"
      aria-hidden="true"
    >
      <div className="fog-layer fog-layer--one" />
      <div className="fog-layer fog-layer--two" />
      <div className="fog-layer fog-layer--three" />
    </div>
  );
}
