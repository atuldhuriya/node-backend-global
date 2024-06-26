const { error } = require('console');
const fs = require ('fs');
const path = require('path')

console.log('Program Started');

const FILES = {
    CURRENT : 'readFileSync.js',
    SAMPLE : 'sample.txt',
}

const samlpefilePath = path.join(__dirname,FILES.CURRENT);
const data =  fs.readFileSync(samlpefilePath,"utf-8");
console.log(data);

console.log('Program Ended');