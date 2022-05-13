import postData from './modules/postData.js';
import render from './modules/render.js';
import './styles/main.scss';

const user = document.querySelector('.user');
const number = document.querySelector('.number');
const form = document.querySelector('.form');
const refresh = document.querySelector('.refresh');

const getData = async () => {
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/33eQSLsXyeWdO7B0sgm8/scores/');
  const data = await res.json();
  render(data.result);
};

getData();

form.onsubmit = (e) => {
  e.preventDefault();
  postData(user.value, number.value);
};

refresh.onclick = () => {
  getData();
};
