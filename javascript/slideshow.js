import { paints } from "./constants.js";

const paint = document.getElementById("paint");
const paintName = document.getElementById("paint-name");
const paintAuthor = document.getElementById("paint-author");
const year = document.getElementById("year");
const info = document.getElementById("info");
const footerName = document.getElementById("footer-name");
const footerAuthor = document.getElementById("footer-author");

const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let position = 0;

const changeValues = () => {
  paint.src = paints[position].image;
  paintName.innerHTML = paints[position].name;
  paintAuthor.innerHTML = paints[position].artist;
  year.innerHTML = paints[position].year;
  info.innerHTML = paints[position].description;
  footerName.innerHTML = paints[position].name;
  footerAuthor.innerHTML = paints[position].artist;
}

changeValues()

prevButton.addEventListener("click", () => {
  if(position === 0){
    position = paints.length - 1;
  } else {
    position = position - 1;
  }

  changeValues()
});

nextButton.addEventListener("click", () => {
  if(position === paints.length - 1){
    position = 0;
  } else {
    position = position + 1;
  }

  changeValues()
})