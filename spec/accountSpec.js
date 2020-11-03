describe('Account', function() {

  it('has a balance of 0.00', function() {
    account = new Account;
    expect(account.showBalance()).toEqual(0.00);
  });

});