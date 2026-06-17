export function GlobalStyles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500&display=swap');

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

      html { scroll-behavior: smooth; }
      * { box-sizing: border-box; }

      /* Lenis smooth scroll — required wiring */
      html.lenis, html.lenis body { height: auto; }
      .lenis.lenis-smooth { scroll-behavior: auto !important; }
      .lenis.lenis-smooth [data-lenis-prevent] { overscroll-behavior: contain; }
      .lenis.lenis-stopped { overflow: hidden; }
      .lenis.lenis-smooth iframe { pointer-events: none; }

      ::selection {
        background: rgba(200,139,90,0.25);
        color: #F3EFE7;
      }

      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: #0D0F12; }
      ::-webkit-scrollbar-thumb { background: rgba(156,163,175,0.2); border-radius: 2px; }
    `}</style>
  );
}
