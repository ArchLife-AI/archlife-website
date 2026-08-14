import { useEffect, useRef } from "react";

export function AtmosphericCanvas() {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const nodesRef = useRef([]);
  const mouseRef = useRef({ x: -999, y: -999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    nodesRef.current = Array.from({ length: 55 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.08,
      vy: (Math.random() - 0.5) * 0.08,
      r: Math.random() * 0.9 + 0.3,
      base: Math.random() * 0.12 + 0.04,
    }));

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const nodes = nodesRef.current;

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;
        n.x = Math.max(0, Math.min(width, n.x));
        n.y = Math.max(0, Math.min(height, n.y));
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const ni = nodes[i],
            nj = nodes[j];
          const dist = Math.hypot(ni.x - nj.x, ni.y - nj.y);
          if (dist < 180) {
            const op = (1 - dist / 180) * 0.045;
            ctx.strokeStyle = `rgba(200,139,90,${op})`;
            ctx.lineWidth = 0.35;
            ctx.beginPath();
            ctx.moveTo(ni.x, ni.y);
            ctx.lineTo(nj.x, nj.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const distMouse = Math.hypot(n.x - mx, n.y - my);
        const cursorInfluence =
          distMouse < 160 ? (1 - distMouse / 160) * 0.65 : 0;
        const brightness = n.base + cursorInfluence;

        if (cursorInfluence > 0.08) {
          const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, 32);
          glow.addColorStop(0, `rgba(200,139,90,${cursorInfluence * 0.18})`);
          glow.addColorStop(1, "rgba(200,139,90,0)");
          ctx.fillStyle = glow;
          ctx.beginPath();
          ctx.arc(n.x, n.y, 32, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.fillStyle = `rgba(200,165,110,${brightness})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r + cursorInfluence * 0.8, 0, Math.PI * 2);
        ctx.fill();
      }

      if (mx > 0) {
        const cursorGrad = ctx.createRadialGradient(mx, my, 0, mx, my, 100);
        cursorGrad.addColorStop(0, "rgba(200,139,90,0.03)");
        cursorGrad.addColorStop(1, "rgba(200,139,90,0)");
        ctx.fillStyle = cursorGrad;
        ctx.beginPath();
        ctx.arc(mx, my, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <>
      {/* ── Bruegel's Landscape with the Fall of Icarus — tapestry layer ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <img
          src="/icarus.webp"
          alt=""
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.2) saturate(0.75) sepia(0.15)",
            opacity: 1,
          }}
        />
        {/* Warm lower-horizon glow — the sea where Icarus fell */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "45%",
            background:
              "linear-gradient(to top, rgba(155,94,69,0.07) 0%, transparent 100%)",
          }}
        />
      </div>

      {/* ── Drifting constellation canvas ── */}
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          opacity: 0.75,
        }}
      />
    </>
  );
}
