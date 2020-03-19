/*
 * Helper script to get difficulties of words by scraping dictionary.com
 * Requries Node v7 with the --harmony-async-await flag.
 * The script consumes words.json and produces dictionary.json and notFound.txt
 */

const fs = require('fs');
const axios = require('axios');
const cheerio = require('cheerio');
// const Papa = require('papaparse');
const csv = require('csv-parser');
const notFound = {};

const getDifficulty = word => {

  const url = `http://www.dictionary.com/browse/${word}`;

  return axios.get(url)
    .then(res => res.data)
    .then(html => {
      const $ = cheerio.load(html);
      const difficulty = $('#difficulty-box').attr('data-difficulty');
      return difficulty;
    });

}

const delay = () => new Promise((resolve, reject) => {
  setTimeout(resolve, 500);
})

const readFile = file => new Promise((resolve, reject) => {
  fs.readFile(file,"utf8", (err ,data) => {
    if(err) { 
      console.log(err);  
      reject(err);
    }
    resolve(data);
  })
})

const writeFile = (file, data) => new Promise((resolve, reject) => {
  fs.writeFile(file, data, (err) => {
    if (err) reject(err);
    resolve('File saved');
  });
})

const readCSVFile = file => new Promise((resolve, reject) => {
  const results = [];
  fs.createReadStream(file)
    .pipe(csv({ separator: '\t' }))
    .on('data', (data) => results.push(data))
    .on('error', (err) => { reject(err) })
    .on('end', () => {
      resolve(results);
    })
})

async function init() {
  const words = await readCSVFile('words.csv');
  
  // console.log(data);
  // const dictionary = Papa.parse(data);
  // const dictionary = JSON.parse(data);
  const dictionaryWithDifficulty = {};

  // const words = Object.keys(data);
  // data.forEach(w => console.log(w));

  for(word of words) {
    console.log(word);
    try {
      // const difficulty = await getDifficulty(word.word);
      // console.log({ word, difficulty });
      dictionaryWithDifficulty[word['word']] = { definition: word['definition'], source: "Vocab" }
      // await delay();
    }
    catch(err) {
      console.log(`Could not find word ${word}`);
      notFound[word] = true;

      // // Add default difficulty
      // dictionaryWithDifficulty[word] = { definition: dictionary[word], difficulty: 50 }
    }
  }

  console.log('Writing data...');
  await writeFile('dictionary.json', JSON.stringify(dictionaryWithDifficulty, null, 2));
  await writeFile('notFound.txt', Object.keys(notFound));
}

init();
