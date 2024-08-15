const resizeValue = 790;
export const asideResizeEvent = (aside) => {
  if (window.innerWidth > resizeValue) {
    aside.style.display = "flex";
  } else {
    aside.style.display = "none";
  }
};
export const mainResizeEvent = (main, css) => {
  if (window.innerWidth > resizeValue) {
    main.classList.remove(css.none);
  } else {
    main.classList.add(css.none);
  }
};

const resizeSearchValue = 500;
export const searchBarResizeEvent = (search) => {
  if (window.innerWidth > resizeSearchValue) {
    search.style.display = "flex";
  } else {
    search.style.display = "none";
  }
};
