
// delete the last element from array
const arrayPop = [ 1, 2, 3, 4, 5, 6, 7];
console.log(arrayPop.pop());

// not sorted array -> how to sort array
const notSortArr = [ 345, 765, 123, 657];

notSortArr.sort((a, b) =>  a-b);
console.log(notSortArr)

notSortArr.sort((a, b) =>  a-b);
console.log(notSortArr);


// to filter array. e.x.: show only even numbers
const unfilterArr = [ 345, 566, 998,765, 346, 123, 657, 122];

const filteredArr = unfilterArr.filter((element) => element % 2 === 0);
console.log(filteredArr);

// find
// e.x.: show only even numbers

console.log (unfilterArr.find((element) => element %2 !== 0));

const responce = {
    id: 123,
    names: ['Ana', 'Pavlo', 'Andrii', 'Semen'],
    isActive: true
};

let andrii = responce['names'].find((element, index, arr) => element === 'Andrii')
console.log(andrii);

// includes

const namesAll = ['Ana', 'Pavlo', 'Andrii', 'Semen', 'Andrii', 'Andrii'];
console.log(namesAll.includes('Semen'));

// filter
console.log(namesAll.filter((element) => element === 'Andrii'))

// delete certain element
// task to remove another Andrii from array

function  removeSecondAndrii(){
    const namesArr = ['Ana', 'Pavlo', 'Andrii', 'Semen', 'Andrii', 'Andrii'];
    const person = 'Andrii';
    if(namesArr.includes('Andrii') === false) throw Error('There is no Andrii in a array');
    // (!arr.includes('Andrii')) throw Error('There is no Andrii in a array');

    const  firstIndex = namesArr.indexOf(person);
    const secondIndex = namesArr.indexOf(person, firstIndex +1);

    if(secondIndex != -1) namesArr.splice(secondIndex, 1);
    return namesArr;
}

console.log(removeSecondAndrii());


function removeFirstAndrii(namesAll: string[], person: string){
    const firstIndex = namesAll.indexOf(person);

    if ( firstIndex != -1) namesAll.splice(firstIndex, 1);
    return namesAll;
}

let result = removeFirstAndrii(namesAll, "Andrii");

console.log(result)


