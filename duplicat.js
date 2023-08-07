
const names = [ 'saikat', 'antu', 'shrabon', 'shakil', 'antu', 'antor', 'shrabon', 'joy', 'shimul', 'saikat', 'sojib', 
'shakil', 'antor', 'joy', 'antu', 'saikat', 'sojib', 'sojib', 'niloy', 'antu', 'antu'];

function removeDuplicet (names) {
    let uniqe = [];
    for ( let i = 0; i < names.length ; i++) {
        let name = names[i];
        if ( uniqe.includes(name) === false) {
            uniqe.push(name);
        }
    
    }
    return uniqe;
}

const duplicate = removeDuplicet(names);
console.log(duplicate);