describe('Account', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
    account = new Account;
  });

  it('has a balance of 0.00', function() {
    expect(account.showBalance()).toEqual(0.00);
  });

  it('can deposit into account', function() {
    createDeposit();
    expect(account.showBalance()).toEqual(10.00);
  });

  it('can withdraw from the account', function() {
    createDeposit();
    account.withdraw(5.00);
    expect(account.showBalance()).toEqual(5.00);
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

  it('transaction object stores: date, amount, type and balance', function() {
    createDeposit();
    expect(account.getLatestTransaction()).toEqual({
      date: '02/11/2020',
      type: 'Deposit',
      amount: 10.00,
      balance: 10.00
    });
  });

});