describe('Acceptance Criteria', function() {

  beforeEach(function() {
    let today = new Date(2020, 10, 02);
    jasmine.clock().mockDate(today);
  });

  it('meets the acceptance criteria', function() {
    account = new Account();
    account.deposit(1000.00, '10/01/2012');
    account.deposit(2000.00, '13/01/2012');
    account.withdraw(500.00, '14/01/2012');
    expect(account.printStatement()).toEqual([
     'date  ||  credit  ||  debit ||  balance',
     '14/01/2012 || || 500.00 || 2500.00',
     '13/01/2012 || 2000.00 || || 3000.00',
     '10/01/2012 || 1000.00 || || 1000.00'
    ]);
  });
});