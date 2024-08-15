import css from "./search_btn.module.css";
export const makeSearchBtn = (imgURL) => {
  const searchBtn = document.createElement("button");
  searchBtn.className = css.root;
  const searchImg = document.createElement("img");
  searchImg.src = imgURL;
  searchImg.className = css.img;

  searchBtn.appendChild(searchImg);
  return searchBtn;
};
