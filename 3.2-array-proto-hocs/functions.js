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
    return arr2.every(i => arr1.length === arr2.length && arr1.includes(i) === arr2.includes(i)) && arr1.every(i => arr1.length === arr2.length && arr1.includes(i) === arr2.includes(i))
}

function memorize(sum, limit) {
    let memory = [];
        return function mSum(...args) {
            const mem = memory.find(function (item) {
                if (compareArrays(item.args, Array.from(mSum.arguments))) {
                  console.log(item.result);
                  return item.result;
                }
            })
            if (mem === undefined) {
                sum(...args);
                memory.push({ args: Array.from(mSum.arguments), result: sum(...args) });
                if (memory.length > limit) {
                    memory.splice(limit, 1);
                }
            }
    }
}