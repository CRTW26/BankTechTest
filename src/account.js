class Account {
  constructor(transaction = Transaction) {
    this.balance = 0.00;
    this.transactionHistory = [];
    this.transaction = transaction;
  }

  showBalance() {
    return this.balance.toFixed(2);
  }

  deposit(amount, date = this._formatDate()) {
    if (this._isInvalidInput(amount)) return 'Invalid input';
    this.balance += amount;
    const transactionType = 'Deposit';
    this._createTransaction(amount, transactionType, this.balance, date);
  }

  withdraw(amount, date = this._formatDate()) {
    if (this._isInvalidInput(amount)) return 'Invalid input';
    this.balance -= amount;
    const transactionType = 'Withdrawal';
    this._createTransaction(amount, transactionType, this.balance, date);
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

  _createTransaction(amount, type, balance, date) {
   const transaction = new this.transaction(amount, type, balance, date);
   this._addToHistory(transaction);
  }

  _formatDate() {
    new Date().toLocaleDateString();
  }

  _isInvalidInput(amount) {
    return typeof(amount) != 'number';
  }

  _formatStatement() {
    const output = ['date  ||  credit  ||  debit ||  balance'];
    for (let i = this.transactionHistory.length - 1; i >= 0; i--) {
      if (this.transactionHistory[i].type === 'Deposit') {
        output.push(this._formatDeposit(this.transactionHistory[i]));
      } else {
        output.push(this._formatWithdrawal(this.transactionHistory[i]));
      }
    }
    return output;
  }

  _formatDeposit(deposit) {
    const formattedTransaction = `${deposit.date} || ${deposit.amount} || || ${deposit.balance}`; 
    return formattedTransaction;
  }

  _formatWithdrawal(withdrawal) {
    const formattedTransaction = `${withdrawal.date} || || ${withdrawal.amount} || ${withdrawal.balance}`;
    return formattedTransaction;
  }
}
