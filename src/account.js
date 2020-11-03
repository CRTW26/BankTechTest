class Account {

  constructor() {
    this.balance = 0.00;
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
    this.createTransaction();
  }

  withdraw(amount) {
    this.balance -= amount;
    this.createTransaction();
  }

  createTransaction() {

  };

}