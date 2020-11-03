describe('Transaction', function() {

  it('stores date, amount, type and balance', function() {
    transaction = new Transaction(10.00, 'Deposit', 10.00, '03/11/2020')
    expect(transaction.date).toEqual('03/11/2020')
    expect(transaction.amount).toEqual('10.00')
    expect(transaction.type).toEqual('Deposit')
    expect(transaction.balance).toEqual('10.00')
  });

});