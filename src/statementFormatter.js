class StatementFormatter {
  constructor() {
    this.formattedStatement;
  }
  
  formatStatement(transactionHistory) {
    const statementArray = ['date  ||  credit  ||  debit ||  balance'];
    for (let i = transactionHistory.length - 1; i >= 0; i--) {
      if (transactionHistory[i].type === 'Deposit') {
        statementArray.push(this._formatDeposit(transactionHistory[i]));
      } else {
        statementArray.push(this._formatWithdrawal(transactionHistory[i]));
      }
    }
    this.formattedStatement = statementArray;
    return statementArray;
  }

  // helpers 

  _formatDeposit(deposit) {
    const formattedTransaction = `${deposit.date} || ${deposit.amount} || || ${deposit.balance}`; 
    return formattedTransaction;
  }

  _formatWithdrawal(withdrawal) {
    const formattedTransaction = `${withdrawal.date} || || ${withdrawal.amount} || ${withdrawal.balance}`;
    return formattedTransaction;
  }

}