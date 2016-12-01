var Account = require('./account');

var Bank = function(){

  this.accounts = [];

};

Bank.prototype = {
  numberOfAccounts: function() {
    return this.accounts.length;
  },
  addAccount: function( account ){

    this.accounts.push(account);
  },
  findAccount: function( accountName ) {

    var foundAccount = this.accounts.find( function( account ) {

      var found = account.name === accountName;
      return found;
    });

    return foundAccount;
  },
  findLargestAccount: function(){
    var largestAccount = this.accounts.reduce(function(largestAccount, account){

      if (account.balance > largestAccount.balance){
        return account;
      }
      return largestAccount;
    })
    return largestAccount;
  },
  totalAccountBalances: function(){
    var total = 0;

    this.accounts.forEach(function(account){
      total += account.balance;
    });
    return total;
  }

};

module.exports = Bank;
