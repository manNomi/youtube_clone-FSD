export const asideResizeEvent = (aside) => {
  if (window.innerWidth > 790) {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }
};
