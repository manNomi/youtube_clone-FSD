export const asideResizeEvent = (aside) => {
  if (window.innerWidth > 790) {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }
};
export const mainResizeEvent = (main, css) => {
  if (window.innerWidth > 790) {
    main.classList.remove(css.none);
  } else {
    main.classList.add(css.none);
  }
};
