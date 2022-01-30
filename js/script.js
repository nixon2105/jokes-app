const URL = 'https://type.fit/api/quotes';

const getQuotes = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data);
};

getQuotes();
