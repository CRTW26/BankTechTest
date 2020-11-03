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

});