class Account {
  constructor(transaction = Transaction) {
    this.balance = 0.00;
    this.transactionHistory = [];
    this.transaction = transaction;
  }

  showBalance() {
    return this.balance.toFixed(2);
  }

  deposit(amount) {
    this.balance += amount;
    const transactionType = 'Deposit';
    this.createTransaction(amount, transactionType, this.balance);
  }

  withdraw(amount) {
    this.balance -= amount;
    const transactionType = 'Withdrawal';
    this.createTransaction(amount, transactionType, this.balance);
  }

  createTransaction(amount, type, balance) {
    const transaction = new this.transaction(amount, type, balance)
    this._addToHistory(transaction);
  }

  getLatestTransaction() {
    const last = this.transactionHistory.pop();
    return last;
  }

  printStatement() {
    let statement = this._formatStatement();
    for (let i = 0; i < statement.length; i++) {
      console.log(statement[i]);
    }
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
