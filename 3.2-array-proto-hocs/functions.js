console.clear()

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()]

function getNames() {
    let weaponName = [];
    const findName = weapons.map(item => weaponName.push(item.name));
    return weaponName;
}  

function getCountReliableWeapons(durability) {
    let weaponDurabilityCount = 0;
    const findDurability = weapons.some(function(item) {
        if (item.durability > durability) {
            weaponDurabilityCount++;
        }
    }
    )
    return weaponDurabilityCount
}

function hasReliableWeapons(durability) {
    if (getCountReliableWeapons(durability)) {
        return true;
    }
    return false;
}

function getReliableWeaponsNames(durability) {
    let durableWeaponList = [];
    const weaponList = weapons.some(function (item) {
        if (item.durability > durability) {
            durableWeaponList.push(item.name);
        }
    }
    )
    return durableWeaponList;
}

function getTotalDamage() {
    let weaponAttackSum = 0;
    const findAttack = weapons.map(item => weaponAttackSum += item.attack);
    return weaponAttackSum;
}

//Дополнительно
const numberArrey = [1, 4];
const summ = 50;
function getSumm(a, b) {
    let sumArrey = [];
    let numberArreyItemSum = 0;
    numberArrey.find(function (item) {
        if (numberArreyItemSum < summ) {
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
function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}


function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); 
    return args.reduce((sum, arg) => {
      return sum += arg;
    }, 0);
  }

function compareArrays(arr1, arr2) {
    return arr1.every(i => arr2.indexOf(i) != -1) && arr2.every(i => arr1.indexOf(i) != -1);  
}

function memorize(sum, limit) {
    for(let i = 0; i < limit; i++) {
      return sum;
    }
    }

 

    






