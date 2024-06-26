const { error } = require('console');
const fs = require ('fs');
const path = require('path')

const samlpefilePath = path.join(__dirname,'sample.txt');
fs.readFile(samlpefilePath,"utf-8",(error,data)=>{
    if(error == null){
        console.log(data);
      
    }else{
        console.log('Error Reading the file',error);
    }
});

console.log('Program Started');