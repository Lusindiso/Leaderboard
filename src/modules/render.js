const render = (list) => {
  const score = document.querySelector('.scores__list');
  score.innerHTML = '';
  list.forEach((element) => {
    score.innerHTML += `<li class="scores__list--item">${element.user}: ${element.score}</li>`;
  });
};

export default render;