/*
  bgImage.js 파일은 저장된 bg/~.jpg 파일을 무작위로 로딩하여 배경화면을 교체합니다.
*/

const body = document.querySelector("body");

const IMG_NUMBER = 5;

function getImage(imgNumber) {
  const image = new Image();
  image.src = `bg/${imgNumber + 1}.jpg`;
  image.classList.add("bg");
  body.appendChild(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  getImage(randomNumber);
} init();