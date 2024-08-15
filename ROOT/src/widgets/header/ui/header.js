import css from "./header.module.css";
import { makeLogo } from "../../logo/index.js";
import { makeSearchContainer } from "../../search_container/index.js";
import { makeIconList } from "../../header_icon_list/index.js";

const iconData = {
  setting: {
    resource: "../public/image/header/setting.svg",
  },
  alert: {
    resource: "../public/image/header/alert.svg",
  },
  camera: {
    resource: "../public/image/header/camera.svg",
  },
  mic: {
    resource: "../public/image/header/mic.svg",
  },
  search: { resource: "../public/image/header/search.svg" },
  logo: { resource: "../public/image/header/logo.svg" },
};

export const makeHeader = () => {
  const header = document.createElement("header");
  header.className = css.root;
  header.appendChild(makeLogo({ ...iconData }));
  header.appendChild(makeSearchContainer({ ...iconData }));
  header.appendChild(makeIconList({ ...iconData }));

  return header;
};
