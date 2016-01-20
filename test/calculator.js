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

  });

  describe('.subtract', function () {

    it('should subtract two numbers', function () {
      expect(calculator.subtract(2, 0)).to.equal(2);
    });

    it('should subtract three numbers', function () {
      expect(calculator.subtract(2, 1)).to.equal(1);
    });

    it('should subtract four numbers', function () {
      expect(calculator.subtract(2, 2)).to.equal(0);
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
