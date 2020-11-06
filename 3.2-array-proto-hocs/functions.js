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
const numberArrey = [1, 4];
const summ = 50;
function getSumm(a, b) {
    let sumArrey = [];
    let numberArreyItemSum = 0;
    a.find(function (item) {
        if (numberArreyItemSum < b) {
            numberArreyItemSum += item;
            sumArrey.push(item);   
        }
    }
    )
    if (numberArreyItemSum < summ) {
        return numberArrey.length;
    } else {
        return sumArrey.length;
    }   
}


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
    return arr1.length === arr2.length && arr1.every(i => arr1.includes(i) === arr2.includes(i)) && arr2.every(i => arr1.includes(i) === arr2.includes(i));  
} 
console.log(compareArrays([8, 1, 2], [8, 1, 2, 3, 3, 3, 3]));
console.log(compareArrays([8, 1, 2, 3], [8, 1, 2, 3]));


function memorize(func, limit) {
    return function func2(...args) {
        let memory = [];
            const mem = memory.find(function (item) {
                if (compareArrays(item.args, Array.from(func2.arguments))) {
                  console.log(item.result);
                  return item.result;
                }
            })
        if (mem === undefined) {
            const fn = func(...args);
             memory.push({ args: args, result: fn });
                if (memory.length > limit) {
                    memory.splice(limit, 1);   
            }
            console.log(memory)
            return fn;
            }       
    }
}
const func2 = memorize(sum, 5);
console.log(func2(4, 4));
console.log(func2(4, 4));