const url = 'https://www.breakingbadapi.com/api/quotes';
const urlRu = './db/db.json';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container__jokes');
const jokesText = document.querySelector('.jokes__text');
const btnEN = document.querySelector('.btn__en');
const btnRU = document.querySelector('.btn__ru');
const btnContainer = document.querySelector('.language-container');

const getQuotes = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  innerHTML = '';
  showQutes(data);
};

const showQutes = (data) => {
  const randomData = Math.floor(Math.random() * data.length);
  const randomQutes = data[randomData];
  const { quote, author } = randomQutes;
  return (jokesText.innerHTML = `
    <div class="text">${quote}</div>
    <div class="author">"${author}"</div>
  `);
};

const addActiveBtn = (e) => {
  btnContainer
    .querySelectorAll('.btn-language')
    .forEach((el) => el.classList.remove('active'));
  e.target.classList.add('active');
};

const audio = new Audio();
const playAudio = () => {
  audio.src = './assets/audio/click.mp3';
  audio.play();
};

btn.addEventListener('click', (e) => {
  if (e.target && btnEN.classList.contains('active')) {
    getQuotes(url);
  } else if (e.target && btnRU.classList.contains('active')) {
    getQuotes(urlRu);
  }
});

btn.addEventListener('click', playAudio);

btnContainer.addEventListener('click', addActiveBtn);
