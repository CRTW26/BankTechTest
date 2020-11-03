class Account {
  constructor() {
    this.balance = 0.00;
    this.transactionHistory = [];
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    const transactionType = 'Deposit';
    this.createTransaction(amount, transactionType);
  }

  withdraw(amount) {
    this.balance -= amount;
    const transactionType = 'Withdrawal';
    this.createTransaction(amount, transactionType);
  }

  createTransaction(amount, type) {
    const transaction = {};
    transaction.date = new Date().toLocaleDateString();
    transaction.type = type;
    transaction.amount = amount;
    transaction.balance = this.balance;
    this.addToHistory(transaction);
  }

  addToHistory(transaction) {
    this.transactionHistory.push(transaction);
  }

  getLatestTransaction() {
    const last = this.transactionHistory.pop();
    return last;
  }
}
