class TransactionDouble {
  constructor(amount, type, balance) {
    this.date = new Date().toLocaleDateString();
    this.type = type;
    this.amount = amount.toFixed(2);
    this.balance = balance.toFixed(2);
  }
}

class FormatterDouble {
  formatStatement(transactionHistory){
    return '02/11/2020 || || 10.00 || 10.00'; 
  }
}