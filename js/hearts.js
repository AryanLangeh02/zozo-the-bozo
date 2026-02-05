(() => {
    const container = document.getElementById("hearts");
    if (!container) return;
  
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;
  
    const heartChars = ["💗", "💖", "💘", "💕", "💓"];
    const count = 18;
  
    function rand(min, max) { return Math.random() * (max - min) + min; }
  
    for (let i = 0; i < count; i++) {
      const h = document.createElement("div");
      h.className = "heart";
      h.textContent = heartChars[(Math.random() * heartChars.length) | 0];
  
      const left = rand(0, 100);
      const size = rand(12, 22);
      const duration = rand(10, 22);
      const delay = rand(0, 10);
      const opacity = rand(0.10, 0.22);
  
      h.style.left = `${left}vw`;
      h.style.fontSize = `${size}px`;
      h.style.animationDuration = `${duration}s`;
      h.style.animationDelay = `${delay}s`;
      h.style.opacity = `${opacity}`;
  
      container.appendChild(h);
    }
  })();
  