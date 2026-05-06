function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r}, ${g}, ${b})`;
}

let lastHeight = 0;

window.addEventListener("scroll", () => {
  // jab bottom ke paas pahucho
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 5
  ) {
    // page height increase (infinite scroll feel)
    document.body.style.height = document.body.offsetHeight + 500 + "px";

    // 🎨 background change
    document.body.style.background = getRandomColor();
  }
});