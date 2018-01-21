'use strict'
let userName=['Ilya', 'Vlad', 'Anna', 'Anastasia','Natalia', 'Olga', 'Stas'];

//es6

function changeName(array) {
    for (let name of array){
        console.log('Name: ' + name);
    }
}

changeName(userName);

function isPresent(names, targetName) {
    let result = targetName + ' is absent';

    for (let name of names){
        if (name === targetName) {
            result = name + ' is present';
            break;
        }
    }
    console.log(result);
}

let findName='Ilya';
isPresent(userName, findName);

const products = [
    {
        title:'iPhone',
        price: 1000
    },
    {
        title: 'Mac',
        price: 2000
    },
    {
        title: 'Samsung s8',
        price: 800
    }
];

function printObjects(array) {
    for (let element of array){
        console.log(element);
    }
}

printObjects(products);

function calcTotal(array) {
    let sum=0;
    for (let element of array){
        sum+=element.price;
    }
    return sum;
}

console.log(calcTotal(products));

function findMax(array) {
    if (array.length || array instanceof Array){
        return 0;
    }
    let max=array[0].price; /*ошибка если массив пустой*/
    for (let element of array){
        if (element.price > max) {
            max=element.price;
        }
    }
    return max;
}

console.log(findMax(products));