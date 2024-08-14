import css from "./search_box.module.css";
import { makeSearchInput } from "../../../shared/input/index.js";

export const makeSearchBox = () => {
  const searchBox = document.createElement("div");
  searchBox.appendChild(makeSearchInput());
  searchBox.className = css.root;
  return searchBox;
};
