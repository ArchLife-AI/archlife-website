export function GlobalStyles() {
  return (
    <style>{`
      @keyframes breathe {
        0%, 100% { opacity: 0.85; }
        50% { opacity: 1; }
      }
      @keyframes driftUp {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-6px); }
      }
      @keyframes fadeSlowIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulseGlow {
        0%, 100% { box-shadow: 0 0 0 0 rgba(200,139,90,0); }
        50% { box-shadow: 0 0 24px 4px rgba(200,139,90,0.08); }
      }
      @keyframes arcDrop {
        0% { transform: translateY(-12px); opacity: 0; }
        100% { transform: translateY(0); opacity: 1; }
      }
    `}</style>
  );
}