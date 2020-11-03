describe('StatementFormatter', function() {
 
  beforeEach(function() {
    formatter = new StatementFormatter()
  });

  it('formats statement for deposits', function() {
    const transactionHistory = [{date: '02/11/2020', type: 'Deposit', amount: '10.00', balance: '10.00'}];
    expect(formatter.formatStatement(transactionHistory)).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '02/11/2020 || 10.00 || || 10.00',
    ]);
  });

   it('formats statement for withdrawals', function() {
    const transactionHistory = [{date: '02/11/2020', type: 'Withdrawal', amount: '10.00', balance: '10.00'}];
    expect(formatter.formatStatement(transactionHistory)).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '02/11/2020 || || 10.00 || 10.00',
    ]);
  });

   it('formats statement in reverse chronological order', function() {
    const transactionHistory = [
      {date: '01/11/2020', type: 'Deposit', amount: '10.00', balance: '10.00'},
      {date: '02/11/2020', type: 'Deposit', amount: '10.00', balance: '20.00'},
      {date: '03/11/2020', type: 'Withdrawal', amount: '5.00', balance: '15.00'}
    ];
    expect(formatter.formatStatement(transactionHistory)).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '03/11/2020 || || 5.00 || 15.00',
     '02/11/2020 || 10.00 || || 20.00',
     '01/11/2020 || 10.00 || || 10.00'
    ]);
  });

});
