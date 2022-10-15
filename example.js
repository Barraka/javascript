const fetch = require('node-fetch');
const cheerio = require('cheerio');

const getReddit = async () => {
  // get html text from reddit
//   const response = await fetch('https://reddit.com/', {
  const response = await fetch('./example.txt', {
    method: 'GET',
    headers: {
        "Content-Type": "application/text"
      },
    mode:'cors',
    // credentials: 'same-origin', 
    credentials: 'include',
    redirect: 'follow',
    referrerPolicy: 'same-origin',
    
});
  // using await to ensure that the promise resolves
  const body = await response.text();

  // parse the html text and extract titles
  const $ = cheerio.load(body);
  const titleList = [];
    
  // using CSS selector  
  $('._eYtD2XCVieq6emjKBH3m').each((i, title) => {
    const titleNode = $(title);
    const titleText = titleNode.text();
    
    titleList.push(titleText);
  });

  console.log(titleList);
};

getReddit();