const { ERRORS } = require("../constants");

// Class Account Singleton
module.exports = class Account {
  static account = new this();
  amount = 0;
  transactions = [];
  constructor() {
    return this.constructor.account;
  }
  print() {
    return this.transactions;
  }
  withdraw(amount) {
    if (this.amount - amount > 0) {
      this.amount = this.amount - amount;
      this.transactions = [
        ...this.transactions,
        {
          withdraw: -amount,
          time: new Date().toISOString(),
          balance: this.amount.toFixed(2),
        },
      ];
      return { newBalance: this.amount };
    }
    return { error: ERRORS.INSUFF_BALANCE };
  }
  deposit(amount) {
    if (amount > 0) {
      this.amount = this.amount + amount;
      this.transactions = [
        ...this.transactions,
        {
          retrive: amount,
          time: new Date().toISOString(),
          balance: this.amount.toFixed(2),
        },
      ];
      return { newBalance: this.amount };
    }
    return { error: ERRORS.NEGATIVE_AMOUNT };
  }
};
