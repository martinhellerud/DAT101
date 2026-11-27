"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let countUp = "";
let countDown = "";
for (let i = 1, j = 10; i <= 10; i++, j--) {
  countUp = countUp + i;
  countDown = countDown + j;
  if (i < 10) {
    countUp = countUp + ",";
    countDown = countDown + ",";
  }
}
printOut(countUp);
printOut(countDown);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const secretNumber = 45;
let guess = Math.ceil(Math.random() * 60);
while (guess !== secretNumber) {
  guess = Math.ceil(Math.random() * 60);
}
printOut("Tallet er " + guess);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const bigSecretNumber = 456738;
let numberOfGuesses = 1;
const startTime = Date.now();
let bigGuess = Math.ceil(Math.random() * 1000000);
while (bigGuess !== bigSecretNumber) {
  bigGuess = Math.ceil(Math.random() * 1000000);
  numberOfGuesses++;
}
const endTime = Date.now();
printOut("Tallet er " + bigGuess);
printOut("Datamaskinen brukte " + numberOfGuesses + " runder");
printOut("Og det tok " + (endTime - startTime) + " millisekunder.");
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
let primeNumbers = "";
for (let number = 2; number < 200; number++) {
  let divisor = 2;
  let isPrime = true;
  while (divisor < number) {
    if (number % divisor === 0) {
      isPrime = false;
    }
    divisor++;
  }
  if (isPrime) {
    if (primeNumbers === "") {
      primeNumbers = "" + number;
    } else {
      primeNumbers = primeNumbers + "," + number;
    }
  }
}
printOut(primeNumbers);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
for (let row = 1; row <= 7; row++) {
  let rowText = "";
  for (let column = 1; column <= 9; column++) {
    rowText = rowText + "K" + column + "R" + row + " ";
  }
  printOut(rowText);
}
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const maxScore = 236;
for (let student = 1; student <= 5; student++) {
  const score = Math.ceil(Math.random() * maxScore);
  const percent = Math.round((score / maxScore) * 100);
  let grade = "";
  if (percent >= 89) {
    grade = "A";
  } else if (percent >= 77) {
    grade = "B";
  } else if (percent >= 65) {
    grade = "C";
  } else if (percent >= 53) {
    grade = "D";
  } else if (percent >= 41) {
    grade = "E";
  } else {
    grade = "F";
  }
  printOut("Kandidat " + student + " fikk " + score + " poeng. Som er " + percent + "%, og gir karakter " + grade);
}
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function matchString(aString, aNumber) {
  let count = 0;
  for (let i = 0; i < aString.length; i++) {
    if (Number(aString.charAt(i)) === aNumber) {
      count++;
    }
  }
  return count;
}

let throws = 0;
let foundStraight = false;
let foundThreePairs = false;
let foundTower = false;
let foundYahtzee = false;

do {
  const d1 = Math.ceil(Math.random() * 6);
  const d2 = Math.ceil(Math.random() * 6);
  const d3 = Math.ceil(Math.random() * 6);
  const d4 = Math.ceil(Math.random() * 6);
  const d5 = Math.ceil(Math.random() * 6);
  const d6 = Math.ceil(Math.random() * 6);
  throws++;

  const diceString = "" + d1 + d2 + d3 + d4 + d5 + d6;
  const diceText = d1 + "," + d2 + "," + d3 + "," + d4 + "," + d5 + "," + d6;

  const c1 = matchString(diceString, 1);
  const c2 = matchString(diceString, 2);
  const c3 = matchString(diceString, 3);
  const c4 = matchString(diceString, 4);
  const c5 = matchString(diceString, 5);
  const c6 = matchString(diceString, 6);
  const countString = "" + c1 + c2 + c3 + c4 + c5 + c6;

  if (!foundStraight && matchString(countString, 1) === 6) {
    foundStraight = true;
    printOut(diceText);
    printOut("Full straight");
    printOut("På " + throws + " kast!");
    printOut(newLine);
  }

  if (!foundThreePairs && matchString(countString, 2) === 3) {
    foundThreePairs = true;
    printOut(diceText);
    printOut("3 par");
    printOut("På " + throws + " kast!");
    printOut(newLine);
  }

  if (!foundTower && matchString(countString, 4) === 1 && matchString(countString, 2) === 1) {
    foundTower = true;
    printOut(diceText);
    printOut("Tårn");
    printOut("På " + throws + " kast!");
    printOut(newLine);
  }

  if (!foundYahtzee && matchString(countString, 6) === 1) {
    foundYahtzee = true;
    printOut(diceText);
    printOut("Yatzy!");
    printOut("På " + throws + " kast!");
    printOut(newLine);
  }
} while (!foundStraight || !foundThreePairs || !foundTower || !foundYahtzee);
printOut(newLine);
