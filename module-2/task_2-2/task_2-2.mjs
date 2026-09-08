"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const originalExpr = "2 + 3 * 2 - 4 * 6";
const modifiedExpr = "2 + (3 * (2 - 4)) * 6";
const answer = 2 + (3 * (2 - 4)) * 6
printOut(originalExpr);
printOut(modifiedExpr);
printOut(answer)
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
const meters = 25;
const centimeters = 34;
const millimeters = (meters * 1000) + (centimeters * 10);
const millPrInch = 25.4;
const sumPart2 = millimeters / millPrInch;
printOut("25 meters and 34 centimeters = " + sumPart2.toFixed(2) + " inches");
printOut(newLine);
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
const part3Days = 3, part3Hours = 12, part3Minutes = 14, part3Seconds = 45;
const part3Answer = (part3Days * 24 * 60) + (part3Hours * 60) + part3Minutes + (part3Seconds / 60);
printOut("3 days, 12 hours, 14 minutes and 45 seconds = " + part3Answer + " minutes");
printOut(newLine);

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
const totalMinutes = 6322.52;
let remainder = totalMinutes / (24 * 60);
const days = Math.floor(remainder);
remainder = remainder - days;

remainder = remainder * 24;
const hours = Math.floor(remainder);
remainder = remainder - hours;

remainder = remainder * 60;
const minutes = Math.floor(remainder);
remainder = remainder - minutes;

remainder = remainder * 60;
const seconds = Math.round(remainder);

printOut("6322.52 minutes is: " + days + " Days, " + hours + " Hours, " + minutes + " Minutes, " + seconds + " Seconds");
printOut(newLine);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
const usd = 54;
const nokRate = 76 / 8.6;
const usdRate = 8.6 / 76;
const nokAmount = Math.round(usd * nokRate);
const usdAmount = Math.round(nokAmount * usdRate);
printOut(usd + " USD = " + nokAmount + " NOK");
printOut(nokAmount + " NOK = " + usdAmount + " USD");
printOut(newLine);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
const text = "There is much between heaven and earth that we do not understand.";
printOut(text);
printOut("The text has " + text.length + " characters");
printOut("The character at position 19 is: " + text.charAt(19));
printOut("The substring from 35 and 8 places is: " + text.substring(35, 35 + 8));
printOut("The word \"earth\" starts at pos " + text.indexOf("earth"));
printOut(newLine);

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("5 > 3 is " + (5 > 3));
printOut("7 >= 7 is " + (7 >= 7));
printOut("\"a\" > \"b\" is " + ("a" > "b"));
printOut("\"1\" < \"a\" is " + ("1" < "a"));
printOut("\"2500\" < \"abcd\" is " + ("2500" < "abcd"));
printOut("\"arne\" !== \"thomas\" is " + ("arne" !== "thomas"));
printOut("(2 === 5) is " + (2 === 5));
printOut("(\"abcd\" > \"bcd\") === false is " + (("abcd" > "bcd") === false));
printOut(newLine);

printOut(newLine);

printOut("--- Part 8 ----------------------------------------------------------------------------------------------");
printOut("\"254\" = " + Number("254"));
printOut("\"57.23\" = " + parseFloat("57.23"));
printOut("\"25 kroner\" = " + parseInt("25 kroner"));
printOut(newLine);

printOut(newLine);

printOut("--- Part 9 ----------------------------------------------------------------------------------------------");
const r = Math.ceil(Math.random() * 360);
printOut("Math.ceil(Math.random() * 360) = " + r);
printOut(newLine);

printOut(newLine);

/* Task 10*/
printOut("--- Part 10 ---------------------------------------------------------------------------------------------");
const totalDays = 131;
const weeks = Math.floor(totalDays / 7);
const remainingDays = totalDays % 7;
printOut(totalDays + " days is " + weeks + " weeks and " + remainingDays + " days.");
printOut(newLine);

printOut(newLine);