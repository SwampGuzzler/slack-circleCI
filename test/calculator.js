var calculator = require('../src/calculator');
var expect = require('chai').expect;

describe('Calculator', function () {

  describe('.add', function () {

    it('should add two numbers', function () {
      expect(calculator.add(1, 2)).to.equal(3);
    });

    it('should add three numbers', function () {
      expect(calculator.add(1, 2, 3)).to.equal(6);
    });

    it('should add four numbers', function () {
      expect(calculator.add(1, 2, 3, 4)).to.equal(11);
    });

    it('should add five numbers', function () {
      expect(calculator.add(1, 2, 3, 4, 5)).to.equal(15);
    });

  });

  describe('.multiply', function () {

    it('should multiply two numbers', function () {
      expect(calculator.multiply(4, 2)).to.equal(8);
    });

    it('should multiply two numbers', function () {
      expect(calculator.multiply(3, 2)).to.equal(6);
    });

  });

});
