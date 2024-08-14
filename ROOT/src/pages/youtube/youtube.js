import { makeAside } from "../../widgets/aside/index.js";
import { makeMain } from "../../widgets/main/index.js";
import { makeHeader } from "../../widgets/header/index.js";
import { getData } from "./youtubeData.js";

export const youtube = () => {
  if (typeof window !== "undefined") {
    const rootTag = document.getElementById("root");
    rootTag.appendChild(makeHeader());

    rootTag.appendChild(makeMain([...getData()]));

    rootTag.appendChild(makeAside());
  }
};
