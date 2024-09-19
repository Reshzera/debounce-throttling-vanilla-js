function createTrail(x, y) {
  const trail = document.createElement("div");
  trail.classList.add("trail");
  trail.style.left = `${x - 5}px`; // Centraliza o círculo no ponto do mouse
  trail.style.top = `${y - 5}px`;

  document.body.appendChild(trail);

  // Remove o rastro após a animação (1 segundo)
  setTimeout(() => {
    trail.remove();
  }, 1000);
}

const throttleInput = document.getElementById("throttle");

let throttleTime = 500;
let timeout;

function throttleFunction(x, y) {
  if (timeout) return;
  createTrail(x, y);
  timeout = setTimeout(() => {
    timeout = null;
  }, throttleTime);
}

throttleInput.addEventListener("input", (event) => {
  const number = Number(event.target.value);
  throttleTime = isNaN(number) ? throttleTime : number;
});

document.addEventListener("mousemove", (event) => {
  throttleFunction(event.clientX, event.clientY);
});
