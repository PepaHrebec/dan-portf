const images = document.querySelectorAll("img");
const full = document.querySelector(".full");
const fullWrap = document.querySelector(".full-wrap");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    (full as HTMLImageElement).src = (e.target as HTMLInputElement).src;
    fullWrap?.classList.add("displ");
  });
});
fullWrap?.addEventListener("click", () => {
  fullWrap.classList.remove("displ");
});
