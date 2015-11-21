function Calculator() {
  
  var cache = {
  sum: {},
  mul: {},
  div: {},
  sub: {}
  };
  
  var argsInStr;
  
  this.sum = function (a, b) {
    argsInStr = Array.prototype.join.call(arguments, ', ');
    
    var result = cache.sum[argsInStr];
    
    if (result === undefined) {
      result = cache.sum[argsInStr] = a + b;
    }
    
    return result;
  }
  
  this.mul = function (a, b) {
    
    argsInStr = Array.prototype.join.call(arguments, ', ');
    
    var result = cache.mul[argsInStr];
    
    if (result === undefined) {
      result = cache.mul[argsInStr] = a * b;
    }
    
    return result;
  }
  
  this.div = function (a, b) {
    argsInStr = Array.prototype.join.call(arguments, ', ');
    
    var result = cache.div[argsInStr];
    
    if (result === undefined) {
      result = cache.div[argsInStr] = a / b;
    }
    
    return result;
  }
  
  this.sub = function (a, b) {
    argsInStr = Array.prototype.join.call(arguments, ', ');
    
    var result = cache.sub[argsInStr];
    
    if (result === undefined) {
      result = cache.sub[argsInStr] = a - b;
    }
    
    return result;
  }
  
  this.getCache = function() {
    return cache;
  }
  
}

var calc = new Calculator();

console.log(calc.mul(3, 4));
console.log(calc.sub(2, 4));
console.log(calc.getCache());