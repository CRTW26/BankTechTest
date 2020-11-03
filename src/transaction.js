class Transaction {
  constructor(amount, type, balance, date) {
    this.date = date;
    this.type = type;
    this.amount = amount.toFixed(2);
    this.balance = balance.toFixed(2);
  }
}