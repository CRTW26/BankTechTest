# Bank Tech Test

## How to use

- Clone this repository
- Run: `npm install` in the terminal.
- Open the SpecRunner file in your browser and open the console.
- Interact with the program. Use the commands below as a guide:

```
const account = new Account;
account.deposit(1000.00);
account.withdraw(500.00);
account.printStatement();
```

## How to run tests

Run the command:

```
open SpecRunner.html
```

A browser window will open displaying the tests.  
To view test coverage, run the following command from inside the directory:

```
npm test
```

This program uses Jasmine for testing and Karma for test coverage.

## Requirements

- You should be able to interact with your code via a REPL like IRB or the JavaScript console. (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

## Acceptance Criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
     'date  ||  credit  ||  debit ||  balance',
     '14/01/2012 || || 500.00 || 2500.00',
     '13/01/2012 || 2000.00 || || 3000.00',
     '10/01/2012 || 1000.00 || || 1000.00
```
