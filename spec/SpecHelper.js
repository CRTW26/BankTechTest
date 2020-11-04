class transactionDouble {
  constructor(amount, type, balance) {
    this.date = new Date().toLocaleDateString();
    this.type = type;
    this.amount = amount.toFixed(2);
    this.balance = balance.toFixed(2);
  }
}

class formatterDouble {
  formatStatement(transactionHistory){
    return { balance: '10.00' }; //returning something more like actual output
  }
}