export const inputFocus = (event, css) => {
  event.target.parentElement.classList.add(css.root_focusOn);
  event.target.parentElement.parentElement.classList.add(css.outline_focusOn);
  event.target.parentElement.parentElement.parentElement
    .querySelector("img")
    .classList.add(css.img_focusOn);
};
export const inputBlur = (event, css) => {
  event.target.parentElement.classList.remove(css.root_focusOn);
  event.target.parentElement.parentElement.classList.remove(
    css.outline_focusOn
  );
  event.target.parentElement.parentElement.parentElement
    .querySelector("img")
    .classList.remove(css.img_focusOn);
};
