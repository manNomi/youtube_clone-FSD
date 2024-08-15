export const asideResizeEvent = (event) => {
  if (innerWidth > 540) {
    event.style = "display:flex;";
  } else {
    event.style = "display:none;";
  }
};
