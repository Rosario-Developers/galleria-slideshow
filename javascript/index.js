import { paints } from './constants.js';

const paintTitleList = document.getElementsByClassName('paint-title');
const authorList = document.getElementsByClassName('author');
const imageList = document.getElementsByTagName('img');

paints.forEach((paint, index) => {
  const { name, artist, image } = paint;

  paintTitleList[index].innerHTML = name;
  authorList[index].innerHTML = artist;
  imageList[index].src = image;
});