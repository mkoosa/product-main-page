//mobile navigation

import {
  closeImg,
  hamburger,
  nav,
  header,
  navigationTxt,
} from "./elements.esm.js";
const openCloseNav = () => {
  header.classList.contains("active")
    ? header.classList.remove("active")
    : header.classList.add("active");
};

closeImg.addEventListener("click", openCloseNav);
hamburger.addEventListener("click", openCloseNav);

//navigation hover effect

navigationTxt.forEach((el) => {
  el.addEventListener("mouseover", () => el.parentNode.classList.add("active"));
  el.addEventListener("mouseout", () =>
    el.parentNode.classList.remove("active")
  );
});
