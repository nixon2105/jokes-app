const url = 'https://www.breakingbadapi.com/api/quotes';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container__jokes');
const jokesText = document.querySelector('.jokes__text');

const createTemplate = (data) => {
  return `
          <div class="text">${data.quote}</div>
          <div class="author">${data.author}</div>
  `;
};

const getQuotes = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  // console.log(data);
  showQutes(data);
  // console.log(shuffle(data));
};

// getQuotes(url);

const showQutes = (data) => {
  const randomData = Math.floor(Math.random() * data.length);
  const randomQutes = data[randomData];
  console.log(randomQutes);
  // randomQutes.map((el) => {
  //   // jokesText.innerHTML += createTemplate(el);
  //   console.log(el.quote);
  // });
};

btn.addEventListener('click', (e) => {
  if (e.target) {
    getQuotes(url);
  }
});
