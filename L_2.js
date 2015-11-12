//--------------------- 1 --------------------------
var foo = 1;
function bar() {
	                      //var foo; foo === undefined
    if (!foo) {           //в условии true
        var foo = 10;     //foo = 10;
    }
    
	alert(foo);
}
bar();

//--------------------- 2 --------------------------
/**
 *Выведет 10. При выполнении ф-ции bar(), еще до выполнения всех ее инструкций, сразу объявляется переменная foo
 *без присваивания значения (foo === undefined). Выполняется условие в if (!foo === true),
 *где foo присваивается значение 10. Т.к. alert() выполняется внутри ф-ции bar(), 
 *в области видимости которой foo === 10, выводится именно 10.
 */

//--------------------- 3 --------------------------

var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

/**
 *Выведет 1. При выполнении ф-ции b(), еще до выполнения всех ее инструкций, сразу объявляется function a() как
 *Function Declaration. Потом начинают выполнятся инструкции, интерпретатор ищет a внутри ф-ции b(), находит ее
 *(это наша внутрення ф-ция с именем а), и ей присваивается значение 10, перезаписывая функцию. Внешняя а не меняется, 
 *ее значение так и осталось 1. Т.к. console.log(a) находится вне ф-ции b(), выводится доступная внешняя а со значением 1.
 */

//--------------------- 4 --------------------------
var a = 1;
function b() {
    a = 10;
    return;
    //function a() {}
}
b();
console.log(a);
/** Варианты решения (оптимально первое, исходя из именно этого кода):
 *1. Закомментировать или удалить function a() {} (она ничего не делает, и находится вообще после return)
 *2. В данном случае к внешней а можно обратиться через window.a
 *3. Переименовать function a() {} (например -      function с() {}         )
 *4. Использовать Named Function Expression типа var c = function a() {}
 */

//--------------------- 5 --------------------------
var obj = {};
//Унарные: +, -, !, delete, typeof
obj.number = +'1'; //1
obj.number = -'1'; //-1
obj.number = !true; //false
delete obj.number;
typeof obj;
//Бинарные: +, -, /, *, %, in, instanceof, <, >, <=, >=, ==, !=, ===, !==, &&, ||, побитовые
obj.number = 1 + 1;
obj.number = 2 - 1;
obj.number = 9/2;
obj.number = 3*2;
obj.number = 6%2;
'number' in obj;
obj instanceof Object;
obj.number < 1;
obj.number > -1;
obj.number <= 0;
obj.number >= 0;
obj.number == 0;
obj.number != -1;
obj.number === 0;
obj.number !== -1;
obj && !obj.number;
obj || obj.number;
//Тернарный
return obj.number ? true : false;

//--------------------- 6 --------------------------
var str = ''.concat('Нехай завжди буде сонце, \n',
                    'Нехай завжди буде небо, \n', 
                    'Нехай завжди буде мама, \n', 
                    'Нехай завжди буду я.');
alert(str);

//--------------------- 7 --------------------------
var counter = 9;
for(var i = 0; i < 10; i++){  
    var str = Array(counter + 1).join('*');
    console.log(str);
    counter += 8 - i*2;
}

//--------------------- 8 --------------------------
var seconds = 10;
var start = Date.now();
var stop;

while (true) {
    stop = Date.now();
    if (stop - start >= seconds*1000) {
        alert(seconds + ' сек. прошло!');
        break;
  }
};