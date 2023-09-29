const images = document.querySelectorAll("img");
const foot = document.querySelector(".foot");
const footWrap = document.querySelector(".foot-wrap");
images.forEach((image) => {
  image.addEventListener("click", (e) => {
    (foot as HTMLImageElement).src = (e.target as HTMLInputElement).src;
    footWrap?.classList.add("displ");
  });
});
footWrap?.addEventListener("click", () => {
  footWrap.classList.remove("displ");
});
