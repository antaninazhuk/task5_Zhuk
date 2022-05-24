// Task 1

// function isMozartHere(str) {
//     return str.toLowerCase().trim().includes('mozart');
// }

// Task 2

// function showUppercaseFirstLetter(str) {
//     if (!str) return str;

//     return str[0].toUpperCase() + str.slice(1);
// }

// Task 3

// arr = ['Война и мир', 'Идиот', 'Предубеждение и гордость', 'Мастер и Маргарита']
// console.log('Последний элемент:', arr[arr.length - 1]);
// console.log('Предпоследний элемент:', arr[arr.length - 2]);
// console.log('Длина массива:', arr.length);

// Task 4

// let javaScriptTypes = ["number", "null", "undefined", "string"];
// javaScriptTypes.push('bigint', 'object', 'symbol', 'boolean');

// Task 5

// str = "Роман «1984» наряду с такими произведениями, как «Мы» Евгения Замятина (1920), «О дивный новый мир» Олдоса Хаксли (1932) и «451 градус по Фаренгейту» Рэя Брэдбери (1953) считается одним из образцов антиутопии.";
// searchStr = '451 градус по Фаренгейту';
// indexFirstLetterSearchStr = str.indexOf(searchStr);
// lengthSearchStr = searchStr.length;
// result = str.slice(indexFirstLetterSearchStr, indexFirstLetterSearchStr + lengthSearchStr);
// console.log(result);

// Task 6

// function getRandomArbitrary(min, max) {
//     return Math.random() * (max - min) + min;
// }

// x = getRandomArbitrary(1, 100);
// console.log(x);

// Task 7

// str = "Я учу JavaScript очень мало";
// searchStr = 'мало';
// indexFirstLetterRearchStr = str.indexOf(searchStr);
// result = str.slice(0, indexFirstLetterRearchStr) + 'много';
// console.log(result);

// Task 8

// str = 'Дорогой, а вдруг он потеряется?';

// function showResult(element) {
//     if (str.includes(element)) {
//         console.log('Включает');
//     }
// }

// showResult('вдруг');
// showResult('рассвет');

// Task 9

// arr = ['red', 'yellow', 'black', 'blue'];

// arr.shift();
// arr.pop();
// arr.unshift('brown');
// arr.push('pink');

// console.log(arr);