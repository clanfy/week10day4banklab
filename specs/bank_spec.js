var assert = require('assert');
var Bank = require('../bank');
var Account = require('../account');

describe( "Bank", function() {

  var myEmptyBank = null;
  var cookiesAccount = null;
  var matthewsAccount = null;
  var marksAccount = null;
  var terrysAccount = null;
  var myPopulatedBank = null;

  beforeEach(function(){
    myEmptyBank = new Bank();
    myPopulatedBank = new Bank();

    cookiesAccount = new Account( "Cookie", 123456, "business" );
    matthewsAccount = new Account( "Matthew", 5000, "pleasure" );
    marksAccount = new Account( "Mark", 12.50, "savings" );
    terrysAccount = new Account( "Terry", 134.76, "pleasure" );

    myPopulatedBank.addAccount( cookiesAccount );
    myPopulatedBank.addAccount( matthewsAccount );
    myPopulatedBank.addAccount( marksAccount );
    myPopulatedBank.addAccount( terrysAccount );
  });

  it( "should have no accounts at start", function() {
    assert.equal( 0, myEmptyBank.accounts.length );
  });

  it("should have numberOfAccounts equal zero at start", function(){
    assert.equal( 0, myEmptyBank.numberOfAccounts() );
  });

  it("should increase numberOfAccounts when account added", function() {
    myEmptyBank.addAccount( "Matthew", 5000, "savings" );
    assert.equal( 1, myEmptyBank.numberOfAccounts() );
  });

  it("should find account by name", function(){
    var foundAccount = myPopulatedBank.findAccount( "Matthew" );
    assert.equal( matthewsAccount, foundAccount );
  });

  it("should return cookiesAccount from findLargestAccount()", function() {
    var largestAccount = myPopulatedBank.findLargestAccount();
    assert.equal( cookiesAccount, largestAccount );
  });

});
