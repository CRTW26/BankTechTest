class Account {
  constructor(transaction = Transaction) {
    this.balance = 0.00;
    this.transactionHistory = [];
    this.transaction = transaction;
  }

  showBalance() {
    return this.balance.toFixed(2);
  }

  deposit(amount, date = new Date().toLocaleDateString()) {
    if (typeof(amount) != 'number') return 'Invalid input';
    this.balance += amount;
    const transactionType = 'Deposit';
    this.createTransaction(amount, transactionType, this.balance, date);
  }

  withdraw(amount, date = new Date().toLocaleDateString()) {
    if (typeof(amount) != 'number') return 'Invalid input';
    this.balance -= amount;
    const transactionType = 'Withdrawal';
    this.createTransaction(amount, transactionType, this.balance, date);
  }

  createTransaction(amount, type, balance, date) {
    const transaction = new this.transaction(amount, type, balance, date);
    this._addToHistory(transaction);
  }

  getLatestTransaction() {
    const last = this.transactionHistory.pop();
    return last;
  }

  printStatement() {
    const statement = this._formatStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(statement[i]);
    }
    return statement;
  }

  // helper methods

  _addToHistory(transaction) {
    this.transactionHistory.push(transaction);
  }

  _formatStatement() {
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
