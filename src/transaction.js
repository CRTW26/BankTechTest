class Transaction {
  constructor(amount, type, balance) {
    this.date = new Date().toLocaleDateString();
    this.type = type;
    this.amount = amount.toFixed(2);
    this.balance = balance.toFixed(2);
  }
}