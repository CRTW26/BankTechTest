describe('Acceptance Criteria', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
  });

  it('meets the acceptance criteria', function() {
    account = new Account();
    account.deposit(1000.00);
    account.deposit(2000.00);
    account.withdraw(500.00);
    expect(account.printStatement()).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '02/11/2020 || || 500.00 || 2500.00',
     '02/11/2020 || 2000.00 || || 3000.00',
     '02/11/2020 || 1000.00 || || 1000.00'
    ]);
  });
});