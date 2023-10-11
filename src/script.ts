const images = document.querySelectorAll("img");
const full = document.querySelector(".full");
const fullWrap = document.querySelector(".full-wrap");
const closeBtn = document.querySelector(".close");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    (full as HTMLImageElement).src = (e.target as HTMLInputElement).src;
    fullWrap?.classList.add("displ");
  });
});
closeBtn?.addEventListener("click", () => {
  fullWrap?.classList.remove("displ");
});
