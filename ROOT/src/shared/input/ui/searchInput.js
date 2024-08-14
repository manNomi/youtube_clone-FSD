import css from "./searchInput.module.css";

export const makeSearchInput = () => {
  const serachInputBox = document.createElement("div");
  serachInputBox.className = css.root;

  const serachInput = document.createElement("input");
  serachInput.placeholder = "검색";
  serachInput.className = css.input;

  serachInputBox.appendChild(serachInput);
  return serachInputBox;
};
