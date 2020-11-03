describe('Account', function() {

  it('has a balance of 0.00', function() {
    account = new Account;
    expect(account.showBalance()).toEqual(0.00);
  });

  it('can deposit into account', function() {
    account = new Account;
    account.deposit(10.00);
    expect(account.showBalance()).toEqual(10.00);
  });

});