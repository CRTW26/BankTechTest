describe('Account', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
    account = new Account;
  });

  it('has a balance of 0.00', function() {
    expect(account.showBalance()).toEqual('0.00');
  });

  it('can deposit into account', function() {
    createDeposit();
    expect(account.showBalance()).toEqual('10.00');
  });

  it('can withdraw from the account', function() {
    createDeposit();
    account.withdraw(5.00);
    expect(account.showBalance()).toBe('5.00');
  });

  it('calls .createTransaction to store details of transaction when deposit is made', function() {
    spyOn(account, 'createTransaction');
    createDeposit();
    expect(account.createTransaction).toHaveBeenCalled();
  });

  it('stores a history of previous transactions', function() {
    createDeposit();
    expect(account.transactionHistory.length).toEqual(1);
  });

  it('returns formatted output when printing statement with deposit', function() {
    createDeposit();
    expect(account._formatStatement()).toEqual([
      'date  ||  credit  ||  debit ||  balance',
      '02/11/2020 || 10.00 || || 10.00'
    ]);
  });

  it('returns formatted output when printing statement with withdrawals', function() {
    account.withdraw(10.00);
    expect(account._formatStatement()).toEqual([
      'date  ||  credit  ||  debit ||  balance',
      '02/11/2020 || || 10.00 || -10.00'
    ]);
  });

  it('formats statement in reverse chronological order', function() {
    createDeposit();
    createDeposit();
    account.withdraw(5.00);
    expect(account._formatStatement()).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '02/11/2020 || || 5.00 || 15.00',
     '02/11/2020 || 10.00 || || 20.00',
     '02/11/2020 || 10.00 || || 10.00'
    ]);
  });

});