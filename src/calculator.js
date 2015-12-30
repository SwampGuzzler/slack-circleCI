module.exports = {

  add: function add (a, b) {
    return Array.prototype.slice.call(arguments).reduce(function (a, b) { return a + b; });
  },

  multiply: function multiply (a, b) {
    return a * b;
  }

};
