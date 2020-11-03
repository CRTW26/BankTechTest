class Account {

  constructor() {
    this.balance = 0.00;
  }

  showBalance() {
    return this.balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }

}