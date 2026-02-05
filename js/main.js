const noBtn = document.getElementById("noBtn");

function moveButton() {
  const padding = 16;
  const maxX = window.innerWidth - noBtn.offsetWidth - padding;
  const maxY = window.innerHeight - noBtn.offsetHeight - padding;

  const x = Math.max(padding, Math.floor(Math.random() * maxX));
  const y = Math.max(padding, Math.floor(Math.random() * maxY));

  noBtn.style.position = "fixed";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveButton);
noBtn.addEventListener("click", moveButton);
