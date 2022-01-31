const url = 'https://www.breakingbadapi.com/api/quotes';
const urlRu =
  'https://raw.githubusercontent.com/rolling-scopes-school/file-storage/random-jokes/quotes.json';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container__jokes');
const jokesText = document.querySelector('.jokes__text');

const getQuotes = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  innerHTML = '';
  showQutes(data);
};

const showQutes = (data) => {
  const randomData = Math.floor(Math.random() * data.length);
  const randomQutes = data[randomData];
  return (jokesText.innerHTML = `
  <div class="text">${randomQutes.quote}</div>
  <div class="author">"${randomQutes.author}"</div>
`);
};

btn.addEventListener('click', (e) => {
  if (e.target) {
    getQuotes(url);
  }
});
