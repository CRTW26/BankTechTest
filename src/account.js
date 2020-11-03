class Account {

  constructor() {
    this.balance = 0.00;
    this.transactionHistory= [];
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    let transactionType = 'Deposit';
    this.createTransaction(amount, transactionType);
  }

  withdraw(amount) {
    this.balance -= amount;
    let transactionType= 'Withdrawal';
    this.createTransaction(amount, transactionType);
  }

  createTransaction(amount, type) {
    let transaction = {};
    transaction['date'] = new Date().toLocaleDateString();
    transaction['type'] = type;
    transaction['amount'] = amount;
    transaction['balance'] = this.balance;
    this.transactionHistory.push(transaction);
  }

  getLatestTransaction() {
    let last = this.transactionHistory.pop()
    return last;
  }

}