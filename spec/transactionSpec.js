describe('Transaction', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
  });

  it('stores date, amount, type and balance', function() {
    transaction = new Transaction(10.00, 'Deposit', 10.00)
    expect(transaction.date).toEqual('02/11/2020')
    expect(transaction.amount).toEqual('10.00')
    expect(transaction.type).toEqual('Deposit')
    expect(transaction.balance).toEqual('10.00')
  });

});