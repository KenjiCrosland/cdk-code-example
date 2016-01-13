var chai = require('chai');
var expect = chai.expect;
var cdk = require(__dirname + '/../cdk');
var hello = cdk.hello;

describe('The Hello World function', function(){
  it('should return the string "Hello World"', function(){
    expect(hello()).to.eql('Hello World');
  });
});
