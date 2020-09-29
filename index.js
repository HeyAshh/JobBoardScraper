const Sheet = require('./sheet')
const fetch = require('node-fetch');

(async function() {
  const sheet = new Sheet();
  await sheet.load();

  const res = await fetch('https://jobs.github.com/positions.json?description=python&location=new+york');
  const json = await res.json();

  console.log({json});
})()