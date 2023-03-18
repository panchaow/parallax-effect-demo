import "./style.css";

import "normalize.css";

const layer_1 = document.querySelector("#layer-1") as HTMLElement;
const layer_2 = document.querySelector("#layer-2") as HTMLElement;
const layer_3 = document.querySelector("#layer-3") as HTMLElement;
const layer_4 = document.querySelector("#layer-4") as HTMLElement;
const layer_5 = document.querySelector("#layer-5") as HTMLElement;

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;

  if (scrolled > window.innerWidth * 0.6) {
    return;
  }

  layer_1.style.top = `${scrolled * 0.9}px`;
  layer_2.style.top = `${scrolled * 0.7}px`;
  layer_3.style.top = `${scrolled * 0.5}px`;
  layer_4.style.top = `${scrolled * 0.2}px`;
  layer_5.style.top = `${scrolled * 0}px`;
});
