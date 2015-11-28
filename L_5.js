//------------------------- 1 -------------------------

Array.prototype.getMaxSubarray = function(lng) { //lng - нужная длина подмассива;
                                                 //Изначально написал метод с
                                                 //передачей аргумента, но чат
                                                 //в скайпе помог понять что 
                                                 //это немного не то что нужно.
                                                 //Метод переписал, но возможность
                                                 //передачи аргумента оставил
  var tempArray = this.slice();
  var maxSum = 0;
  var subarray;

  if (!arguments.length) { //при вызове метода без аргументов

    for (var i = 0; i < this.length; i++) { //перебор стартового значения

      for (var j = 1; j <= this.length - i; j++) { //перебор стека его правых соседей

        var arr = tempArray.splice(i, j);

        var sum = arr.reduce(function(summa, current) {
          return summa + current;
        });

        tempArray = this.slice();

        if (maxSum < sum) {
          maxSum = sum;
          subarray = arr;
        }

      }

    }

  } else { //с передачей аргумента - длины нужного подмасива

    if (isNaN(lng)) throw new Error('Subarray length must be an integer');
    if (lng > this.length) throw new Error('Subarray length too big');
    if (lng <= 0) throw new Error('Subarray length too small');

    for (var i = 0; i <= tempArray.length - lng; i++) {

      var arr = tempArray.splice(i, lng);

      var sum = arr.reduce(function(sum, current) {
        return sum + current;
      });

      tempArray = this.slice();

      if (maxSum < sum) {
        maxSum = sum;
        subarray = arr;
      }

    }

    if (!subarray) throw new Error('Subarray with ' + lng + ' digits not found');

  }

  return subarray;

}

var array = [20, 6, 7, 3, 8, 2, 3, 30, -30, 100, 'str', 56, 12, -32, 1000];

console.log(array.getMaxSubarray());
console.log(array.getMaxSubarray(3));
console.log(array.getMaxSubarray(6));
console.log(array.getMaxSubarray(20));
console.log(array.getMaxSubarray(-1));
console.log(array.getMaxSubarray('string'));




//------------------------- 2 -------------------------

function sumBigNums(a, b) { // аргументы - числа в строковом представлении

  function toNum(el) {
    return +el;
  }  

  var result = [];

  var arrA = a.split('').map(toNum); //конвертируем строки в числовые массивы
  var arrB = b.split('').map(toNum);

  var shorter = (arrA.length < arrB.length) ? arrA : arrB;

  while (arrA.length != arrB.length) { //выравниваем длину массивов 
    shorter.unshift(0);
  }

  var extraNum = 0;

  for (var i = arrA.length - 1; i >= 0; i--) {

    var sum = arrA[i] + arrB[i] + extraNum; //суммирование в столбик

    if (sum >= 10) {
      sum -= 10;
      extraNum = 1;
    } else {
      extraNum = 0;
    }

    result.unshift(sum);

  }

  if (extraNum === 1) result.unshift(extraNum);

  return result.join('');

}

//var maxInt = Number.MAX_SAFE_INTEGER;

var strA = '7779007199254740991'; // '777' + maxInt
var strB = '69007199254740991'; // '6' + maxInt

var numA = 7779007199254740991;
var numB = 69007199254740991;

sumBigNums(strA, strB); //"7848014398509481982"
numA + numB;             //7848014398509482000




//------------------------- 3 -------------------------

function getDiff(arr1, arr2) {

  var a = arr1.slice();
  var b = arr2.slice();
  var element;

  for (var i = 0; i < a.length; i++) { //убираем повторения из второго массива

    element = b.indexOf(a[i]);

    if (element != -1) {
      a.splice(i, 1);
      b.splice(element, 1);
    }

  }

  for (var j = 0; j < a.length; j++) { //убираем повторения из первого массива

    element = a.indexOf(b[j]);

    if (element != -1) {
      a.splice(element, 1);
      b.splice(j, 1);
    }

  }

  return a.concat(b);

}

var a = [2, 4, 6, 7, false, 'string', 11, 4];
var b = [2, 3, 6, 'string', 8, 11, 3];

getDiff(a, b); //[4, 7, false, 4, 3, 8, 3]
