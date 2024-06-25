'use strict';

/*
Создайте функцию deepCount, которая будет считать количество 
всех элементов в массиве, включая и вложенные массивы. 
Учтите, что сам вложенный массив тоже входит в счет. 
*/

function deepCount(arr) {
	if (typeof arr != 'object') {
		return 0;
	} else {
		for (let i of arr) {
			if (typeof i == 'object') {
				return arr.length + +deepCount(i);
			}
		}
		return arr.length;
	}
}

console.log(deepCount([1, 5, 3]));
console.log(deepCount(['1', 5, '3', ['10']]));
console.log(deepCount([[[[[[[[[]]]]]]]]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
console.log(deepCount([]));
