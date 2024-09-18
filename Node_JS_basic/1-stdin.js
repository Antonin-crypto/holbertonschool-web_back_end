const process = require('process');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.setEncoding('utf8');

// Écouter les données entrantes
process.stdin.on('data', (input) => {
  const name = input.trim();
  console.log(`Your name is: ${name}`);


  if (!process.stdin.isTTY) {

    console.log('This important software is now closing');
  }

  process.exit();
