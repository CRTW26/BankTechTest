describe('Account', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
    account = new Account(transactionDouble);
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
    account.deposit(10.00);
    expect(account.transactionHistory.length).toEqual(1);
  });
  
  it('prints formatted statement to console', function() {
    spyOn(console, 'log')
    account.deposit(10.00);
    account.deposit(10.00);
    account.printStatement();
    expect(console.log).toHaveBeenCalled();
  });

  // Testing for invalid input

  it('throws error if deposit amount is not a number', function() {
    expect(account.deposit('hello')).toEqual('Invalid input');
  });

   it('throws error if withdrawal amount is not a number', function() {
    expect(account.withdraw('hello')).toEqual('Invalid input');
  });

});