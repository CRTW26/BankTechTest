describe('Account', function() {

  beforeEach(function() {
    account = new Account;
  });

  it('has a balance of 0.00', function() {
    expect(account.showBalance()).toEqual(0.00);
  });

  it('can deposit into account', function() {
    account.deposit(10.00);
    expect(account.showBalance()).toEqual(10.00);
  });

  it('can withdraw from the account', function() {
    account.deposit(10.00);
    account.withdraw(5.00);
    expect(account.showBalance()).toEqual(5.00);
  });

  it('calls .createTransaction to store details of transaction when deposit is made', function() {
    spyOn(account, 'createTransaction');
    account.deposit(10.00);
    expect(account.createTransaction).toHaveBeenCalled();
  });

});