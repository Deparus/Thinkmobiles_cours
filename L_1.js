var obj = {
	firstValue: 10
};
typeof obj === "object";

var arr = [1, "some_text"];
typeof arr === "object"; //Array.isArray(arr) === true;

var str = "17";
typeof str === "string";

var number = 17;
typeof number === "number";

var func = function(a, b) {
	return a+b;
}
typeof func === "function";

var numberToString = number.toString(); // String(number) || number + "" 
var stringToNumber = +str; // Number(str) || parseInt(number)

str == number; //true
str === number; //false
+str == number; //true

