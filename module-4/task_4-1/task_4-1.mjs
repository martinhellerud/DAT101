"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kreditkonto",
  Pension: "Pensionskonto"
};

class TAccount {
  #type;
  #balance = 0;
  #withdrawCount = 0;
  #currencyType = CurrencyTypes.NOK;

  constructor(aType) {
    this.#type = aType;
  }

  toString() {
    return this.#type;
  }

  setType(aType) {
    printOut("Account is changed from " + this.#type + " to " + aType);
    this.#type = aType;
    this.#withdrawCount = 0;
  }

  getBalance() {
    return this.#balance;
  }

  #currencyConvert(aType) {
    return CurrencyTypes.NOK.value / this.#currencyType.value * aType.value;
  }

  setCurrencyType(aType) {
    if (aType === this.#currencyType) {
      return;
    }
    printOut("The account currency has changed from " + this.#currencyType.name + " to " + aType.name);
    this.#balance = this.#balance * this.#currencyConvert(aType);
    this.#currencyType = aType;
    printOut("New balance is " + this.#balance.toFixed(2) + this.#currencyType.denomination);
  }

  deposit(aAmount, aType) {
    let currency = aType;
    if (currency === undefined) {
      currency = CurrencyTypes.NOK;
    }
    this.#balance = this.#balance + aAmount / this.#currencyConvert(currency);
    this.#withdrawCount = 0;
    printOut("Deposit of " + aAmount.toFixed(2) + " " + currency.name + ", new balance is " + this.#balance.toFixed(2) + this.#currencyType.denomination);
  }

  withdraw(aAmount, aType) {
    switch (this.#type) {
      case AccountType.Pension:
        printOut("You can't withdraw from a " + this.#type + "!");
        return;
      case AccountType.Saving:
        if (this.#withdrawCount >= 3) {
          printOut("You can't withdraw from a " + this.#type + " more than three times!");
          return;
        }
        break;
    }

    let currency = aType;
    if (currency === undefined) {
      currency = CurrencyTypes.NOK;
    }
    this.#balance = this.#balance - aAmount / this.#currencyConvert(currency);
    // Removes tiny leftover decimals so the balance shows 0.00 and not -0.00
    if (this.#balance > -0.001 && this.#balance < 0.001) {
      this.#balance = 0;
    }
    this.#withdrawCount++;
    printOut("Withdrawal of " + aAmount.toFixed(2) + " " + currency.name + ", new balance is " + this.#balance.toFixed(2) + this.#currencyType.denomination);
  }
}


printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut(AccountType.Normal + ", " + AccountType.Saving + ", " + AccountType.Credit + ", " + AccountType.Pension);
printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
const myAccount = new TAccount(AccountType.Normal);
printOut("myAccount = " + myAccount.toString());
myAccount.setType(AccountType.Saving);
printOut("myAccount = " + myAccount.toString());
printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance().toFixed(2));
printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.setType(AccountType.Pension);
myAccount.withdraw(10);
myAccount.setType(AccountType.Saving);
myAccount.withdraw(10);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(150);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.setCurrencyType(CurrencyTypes.SEK);
myAccount.setCurrencyType(CurrencyTypes.USD);
myAccount.setCurrencyType(CurrencyTypes.NOK);
printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
myAccount.deposit(12, CurrencyTypes.USD);
myAccount.withdraw(10, CurrencyTypes.GBP);
myAccount.setCurrencyType(CurrencyTypes.CAD);
myAccount.setCurrencyType(CurrencyTypes.INR);
const restInSek = myAccount.getBalance() / CurrencyTypes.INR.value * CurrencyTypes.SEK.value;
myAccount.withdraw(restInSek, CurrencyTypes.SEK);
printOut(newLine);
