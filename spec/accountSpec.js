describe('Account', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
    account = new Account(TransactionDouble, FormatterDouble);
  });

  it('has a balance of 0.00', function() {
    expect(account.showBalance()).toEqual('0.00');
  });

  it('can deposit into account', function() {
    account.deposit(10.00);
    expect(account.showBalance()).toEqual('10.00');
  });

  it('can withdraw from the account', function() {
    account.deposit(10.00);
    account.withdraw(5.00);
    expect(account.showBalance()).toBe('5.00');
  });

  it('calls .createTransaction to store details of transaction when deposit is made', function() {
    spyOn(account, '_createTransaction');
    account.deposit(10.00);
    expect(account._createTransaction).toHaveBeenCalled();
  });

  it('stores a history of previous transactions', function() {
    spyOn(account, '_generateStatement')
    account.deposit(10.00);
    expect(account.transactionHistory.length).toEqual(1);
  });
  
  it('prints formatted statement to console', function() {
    account.deposit(10.00);
    expect(account.printStatement()).toEqual('02/11/2020 || || 10.00 || 10.00');
  });

  // Testing for invalid input

  it('throws error if deposit amount is not a number', function() {
    expect(account.deposit('hello')).toEqual('Invalid input');
  });

   it('throws error if withdrawal amount is not a number', function() {
    expect(account.withdraw('hello')).toEqual('Invalid input');
  });

});