class Account {
  constructor() {
    this.balance = 0.00;
    this.transactionHistory = [];
  }

  showBalance() {
    return this.balance.toFixed(2);
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
    transaction.amount = amount.toFixed(2);
    transaction.balance = this.balance.toFixed(2);
    this.addToHistory(transaction);
  }

  addToHistory(transaction) {
    this.transactionHistory.push(transaction);
  }

  getLatestTransaction() {
    const last = this.transactionHistory.pop();
    return last;
  }

  formatStatement() {
    const output = ['date  ||  credit  ||  debit ||  balance'];
    for (let i = this.transactionHistory.length - 1; i >= 0; i--) {
      if (this.transactionHistory[i].type === 'Deposit') {
        const formattedTransaction = `${this.transactionHistory[i].date} || ${this.transactionHistory[i].amount} || || ${this.transactionHistory[i].balance}`;
        output.push(formattedTransaction);
      } else {
        const formattedTransaction = `${this.transactionHistory[i].date} || || ${this.transactionHistory[i].amount} || ${this.transactionHistory[i].balance}`;
        output.push(formattedTransaction);
      }
    }
    return output;
  }
}
