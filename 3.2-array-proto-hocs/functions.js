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

// function getReliableWeaponsNames() {

// }
    






