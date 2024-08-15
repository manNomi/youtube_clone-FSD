import { makeSearchInput } from "../../../shared/input/index.js";
import css from "./search_box.module.css";

import { inputFocus, inputBlur } from "./focus_event.js";

export const makeSearchBox = (srcURL) => {
  const searchOutline = document.createElement("div");
  searchOutline.className = css.outline;
  const searchBox = document.createElement("div");
  searchBox.className = css.root;

  const searchLogo = document.createElement("img");
  searchLogo.className = css.img;
  searchLogo.src = srcURL;

  const searchInput = makeSearchInput();
  searchInput.addEventListener("focus", inputFocus);
  searchInput.addEventListener("blur", inputBlur);

  searchBox.appendChild(searchInput);
  searchOutline.appendChild(searchBox);
  searchOutline.appendChild(searchLogo);

  return searchOutline;
};
