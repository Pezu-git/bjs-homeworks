'use strict'
console.clear()

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()]

function getNames() {
    return weapons.map(item => item.name);
}

function getCountReliableWeapons(durability) {
    return weapons.filter(item => item.durability > durability).length;
}
function hasReliableWeapons(durability) {
    return weapons.some(item => item.durability > durability);
    }

function getReliableWeaponsNames(durability) {
    const findWeapon = weapons.filter(item => item.durability > durability);
    return findWeapon.map(item => item.name);  
}

function getTotalDamage() {
    return weapons.reduce((sumAttack, item) => {
        return sumAttack += item.attack
    }, 0);  
}

//Дополнительно
// function getSumm(a, num) {
//     let count = 0;
//     const f = a.reduce((ItemSum, arg) => {
//         count++;
//         return ItemSum += arg;
//     }, 0);
//     if (f = num) {
//         return count;
//     } else {
//         return a.length;
//     }
// }
    

//Задание 2

function sleep(milliseconds) {
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
	sleep(100);
	return args.reduce((sum, arg) => {
        return sum += arg;
    }, 0);
}
function compareArrays(arr1, arr2) {
	return arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
} 

function memorize(func, limit) {
	let memory = [];
	return function (...args) {
		const memorySearch = memory.find(function (item) {
			return compareArrays(item.args, args);
		})
		if (memorySearch !== undefined) {
			return memorySearch.result;
		} else {
			let funcResult = func(...args);
			memory.push({ args: args, result: funcResult });
			if (memory.length > limit) {
                memory.splice(limit, 1);
            }
            return funcResult;
        }
    }
}