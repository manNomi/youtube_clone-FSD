import css from "./search.module.css";
import { makeSearchBox } from "../../search_box/index.js";
import { makeSearchBtn } from "../../search_btn/index.js";

export const makeSearchContainer = (imgOBJ) => {
  const { search } = imgOBJ;
  const searchContainer = document.createElement("div");
  searchContainer.className = css.root;

  searchContainer.appendChild(makeSearchBox(search.resource));
  searchContainer.appendChild(makeSearchBtn(search.resource));

  return searchContainer;
};
