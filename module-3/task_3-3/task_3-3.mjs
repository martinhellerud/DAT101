"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printTodaysDate() {
  const today = new Date();
  printOut(today.toLocaleDateString("no-NB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
}
printTodaysDate();
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getTodaysDate() {
  const today = new Date();
  printOut(today.toLocaleDateString("no-NB", { weekday: "long", year: "numeric", month: "long", day: "numeric" }));
  return today;
}

function getDaysUntilRelease(today) {
  const releaseDate = new Date(2025, 4, 14);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  return Math.ceil((releaseDate - today) / millisecondsPerDay);
}

const todaysDate = getTodaysDate();
const daysLeft = getDaysUntilRelease(todaysDate);
if (daysLeft > 0) {
  printOut("Det er " + daysLeft + " dager til 2XKO slippes!");
} else {
  printOut("2XKO kom ut 14. mai 2025, det er " + (daysLeft * -1) + " dager siden!");
}
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printCircleInfo(radius) {
  const diameter = radius * 2;
  const circumference = 2 * Math.PI * radius;
  const area = Math.PI * radius * radius;
  printOut("Diameter er " + diameter);
  printOut("Omkrets er " + circumference.toFixed(2));
  printOut("Areal er " + area.toFixed(2));
}
printCircleInfo(5);
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function printRectangleInfo(rectangle) {
  const circumference = 2 * (rectangle.width + rectangle.height);
  const area = rectangle.width * rectangle.height;
  printOut("Rektangel bredde: " + rectangle.width + ", høyde: " + rectangle.height);
  printOut("Omkrets er " + circumference);
  printOut("Areal er " + area);
}
printRectangleInfo({ width: 4, height: 3 });
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function convertTemperature(temperature, temperatureType) {
  let celsius = 0;
  let fahrenheit = 0;
  let kelvin = 0;

  if (temperatureType === "Celsius") {
    celsius = temperature;
    fahrenheit = celsius * 9 / 5 + 32;
    kelvin = celsius + 273.15;
  } else if (temperatureType === "Fahrenheit") {
    fahrenheit = temperature;
    celsius = (fahrenheit - 32) * 5 / 9;
    kelvin = celsius + 273.15;
  } else if (temperatureType === "Kelvin") {
    kelvin = temperature;
    celsius = kelvin - 273.15;
    fahrenheit = celsius * 9 / 5 + 32;
  }

  printOut("Konverter " + temperature + " " + temperatureType);
  printOut("Celsius = " + Math.round(celsius));
  printOut("Fahrenheit = " + Math.round(fahrenheit));
  printOut("Kelvin = " + Math.round(kelvin));
  printOut(newLine);
}
convertTemperature(47, "Celsius");
convertTemperature(100, "Fahrenheit");
convertTemperature(300, "Kelvin");

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function getPriceWithoutVat(grossPrice, vatGroup) {
  const group = vatGroup.toLowerCase();
  let vat = NaN;

  if (group === "normal") {
    vat = 25;
  } else if (group === "food") {
    vat = 15;
  } else if (group === "hotel" || group === "transport" || group === "cinema") {
    vat = 10;
  }

  if (isNaN(vat)) {
    printOut("Unknown VAT group!");
    return NaN;
  }

  return (100 * grossPrice) / (vat + 100);
}

const netPrice1 = getPriceWithoutVat(100, "normal");
printOut("100 er " + netPrice1.toFixed(2) + " uten moms");
const netPrice2 = getPriceWithoutVat(150, "Food");
printOut("150 er " + netPrice2.toFixed(2) + " uten moms");
const netPrice3 = getPriceWithoutVat(50, "CINEMA");
printOut("50 er " + netPrice3.toFixed(2) + " uten moms");
getPriceWithoutVat(200, "goblins");
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function calculateSpeedDistanceTime(speed, distance, time) {
  let missingCount = 0;
  if (speed === undefined) {
    missingCount++;
  }
  if (distance === undefined) {
    missingCount++;
  }
  if (time === undefined) {
    missingCount++;
  }

  if (missingCount > 1) {
    return NaN;
  }

  if (speed === undefined) {
    return distance / time;
  }
  if (distance === undefined) {
    return speed * time;
  }
  return distance / speed;
}

printOut("Fart = " + calculateSpeedDistanceTime(undefined, 120, 2) + " km/t");
printOut("Distanse = " + calculateSpeedDistanceTime(70, undefined, 1.5) + " km");
printOut("Tid = " + calculateSpeedDistanceTime(75, 50, undefined).toFixed(2) + " t");
printOut("Mangler to verdier = " + calculateSpeedDistanceTime(undefined, 50, undefined));
printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function padText(text, maxSize, character, insertBefore) {
  let newText = text;
  while (newText.length < maxSize) {
    if (insertBefore) {
      newText = character + newText;
    } else {
      newText = newText + character;
    }
  }
  return newText;
}

printOut(padText("This is a text", 30, ".", false));
printOut(padText("This is a text", 30, ".", true));
printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function testMathLine(lineNumber) {
  let currentNumber = lineNumber * lineNumber;

  let leftSum = 0;
  for (let i = 0; i < lineNumber + 1; i++) {
    leftSum = leftSum + currentNumber;
    currentNumber++;
  }

  let rightSum = 0;
  for (let i = 0; i < lineNumber; i++) {
    rightSum = rightSum + currentNumber;
    currentNumber++;
  }

  return leftSum === rightSum;
}

let line = 1;
let allLinesOk = true;
while (line <= 200 && allLinesOk) {
  if (!testMathLine(line)) {
    printOut("Linje " + line + " er ikke lik på begge sider!");
    allLinesOk = false;
  }
  line++;
}
if (allLinesOk) {
  printOut("Maths fun!");
}
printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
/* Put your code below here!*/
function factorial(number) {
  if (number <= 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
printOut("factorial(9) er " + factorial(9));
printOut(newLine);
