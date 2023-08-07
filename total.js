
function givewood ( doorWoodQantity, tableWoodQantity, chairWoodQantity) {
    const doorWood = 6;
    const tableWood = 10;
    const chairWood = 15;

    const woodQantity = doorWoodQantity * doorWood;
    const tableQantity = tableWoodQantity * tableWood;
    const chairQantity = chairWoodQantity * chairWood;

    const totalWood = woodQantity + tableQantity + chairQantity;

    return totalWood;
}

const totalWood = givewood(2,3,5);
console.log(totalWood);
