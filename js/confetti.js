// Lightweight confetti (no dependencies)
(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);
  
    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "9999",
    });
  
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    function resize() {
      canvas.width = Math.floor(window.innerWidth * dpr);
      canvas.height = Math.floor(window.innerHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    window.addEventListener("resize", resize);
    resize();
  
    const colors = ["#ff4d7d", "#ff7aa2", "#ffd1dc", "#ffffff", "#ffb703"];
    const pieces = [];
    const gravity = 0.12;
    const drag = 0.995;
  
    function rand(min, max) { return Math.random() * (max - min) + min; }
  
    function burst(count = 180) {
      const cx = window.innerWidth / 2;
      const cy = Math.min(220, window.innerHeight * 0.25);
  
      for (let i = 0; i < count; i++) {
        pieces.push({
          x: cx + rand(-40, 40),
          y: cy + rand(-20, 20),
          vx: rand(-6, 6),
          vy: rand(-10, -2),
          w: rand(6, 12),
          h: rand(8, 16),
          r: rand(0, Math.PI),
          vr: rand(-0.2, 0.2),
          color: colors[(Math.random() * colors.length) | 0],
          life: rand(180, 320),
        });
      }
    }
  
    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  
      for (let i = pieces.length - 1; i >= 0; i--) {
        const p = pieces[i];
        p.vx *= drag;
        p.vy = p.vy * drag + gravity;
        p.x += p.vx;
        p.y += p.vy;
        p.r += p.vr;
        p.life -= 1;
  
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
  
        if (p.life <= 0 || p.y > window.innerHeight + 40) pieces.splice(i, 1);
      }
  
      // Stop when done (clean)
      if (pieces.length > 0) requestAnimationFrame(draw);
      else canvas.remove();
    }
  
    burst();
    requestAnimationFrame(draw);
  })();
  