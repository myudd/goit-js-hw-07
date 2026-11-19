const btn = document.querySelector('.change-color'),
  body = document.querySelector('body'),
  color = document.querySelector('.color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btn.addEventListener('click', () => {
  let newBg = getRandomHexColor();
  body.style.backgroundColor = newBg;
  color.textContent = newBg;
})