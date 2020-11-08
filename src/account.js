//account for bank
class Account {
  constructor(transaction = Transaction, formatter = StatementFormatter) {
    this.balance = 0.00;
    this.transactionHistory = [];
    this.transaction = transaction;
    this.formatter = formatter;
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
    const statement = this._generateStatement();
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

  _generateStatement() {
    const statementFormatter = new this.formatter();
    const formattedStatement = statementFormatter.formatStatement(this.transactionHistory);
    return formattedStatement;
  }

}
