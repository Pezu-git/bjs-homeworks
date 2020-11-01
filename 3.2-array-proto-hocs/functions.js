console.clear()

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()]

function getNames() {
    let weaponName = [];
    const findName = weapons.find(function(item) {
        weaponName.push(item.name)
    }
    )
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
    const findAttack = weapons.find(function (item) {
        weaponAttackSum += item.attack;
    }
    )
    return weaponAttackSum;
}

//Дополнительно
const numberArrey = [1, 4];
const sum = 50;
function getSumm(a, b) {
    let sumArrey = [];
    let numberArreyItemSum = 0;
    numberArrey.find(function (item) {
        if (numberArreyItemSum < sum) {
            numberArreyItemSum += item;
            sumArrey.push(item);   
        }
    }
    )
    if (numberArreyItemSum < sum) {
        return numberArrey.length;
    } else {
        return sumArrey.length;
    }   
}
console.log(getSumm(numberArrey, sum))



    






