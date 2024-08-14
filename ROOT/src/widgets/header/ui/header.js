import css from "./header.module.css";
import { makeLogo } from "../../logo/index.js";
import { makeHeaderIcon } from "../../header_icon/index.js";
import { makeSearchBox } from "../../search_box/index.js";

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
  header.appendChild(makeSearchBox());
  header.appendChild(makeHeaderIcon(iconData.mic.resource));
  header.appendChild(makeHeaderIcon(iconData.camera.resource));
  header.appendChild(makeHeaderIcon(iconData.alert.resource));

  return header;
};
