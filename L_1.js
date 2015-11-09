var obj = {
    firstValue: 10
};
typeof obj === 'object';

var arr = [1, 'some_text'];
typeof arr === 'object'; //Array.isArray(arr) === true;

var str = '17';
typeof str === 'string';

var number = 17;
typeof number === 'number';

var func = function(a, b) {
    return a + b;
}
typeof func === 'function';

var numberToString = number.toString(); // String(number) || number + '' 
var stringToNumber = +str; // Number(str) || parseInt(number)

str == number; //true
str === number; //false
+str == number; //true

/**
 *простой способ шифровки/расшифровки - методом toString() с известной разрядностью шифруем,
 *parseInt()'ом расшифровываем. Если разрядность будем знать только мы - исходное число можно будет только предполагать
 */

var secretNumber = 4815162342;
var radix = 36; // разрядность знаем только мы

var encryptedNum = secretNumber.toString(radix);
var decryptedNum = parseInt(encryptedNum, radix);

decryptedNum === secretNumber;