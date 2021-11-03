// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callme) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
  
    if (data === undefined) callme(data);
    if (!error) callme(data);
    
  });
};

module.exports = breedDetailsFromFile;

// CHANGE 1: Moved the console.log into a new function:
// const printOutCatBreed = breed => {
//   console.log('Return Value: ', breed) // => print out details correctly.
// };
// CHANGE 2: we're now passing two arguments into breedDetailsFromFile: breed string and a callback function
// breedDetailsFromFile('Bombay', printOutCatBreed);
