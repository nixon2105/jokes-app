const url = 'https://type.fit/api/quotes';
const btn = document.querySelector('.btn');
const container = document.querySelector('.container__jokes');
const jokesText = document.querySelector('.jokes__text');

const createTemplate = (data) => {
  // return `
  //         <div class="text">${data.text}</div>
  //         <div class="author">${data.author}</div>
  // `;
};

const getQuotes = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  showQutes(data);
};

// getQuotes(url);

const showQutes = (data) => {
  data.map((el) => {
    // jokesText.innerHTML += createTemplate(el);
    // console.log(el.text);
  });
};

btn.addEventListener('click', (e) => {
  if (e.target) {
    getQuotes(url);
  }
});
