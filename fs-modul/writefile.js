const fs = require ('fs');
const path = require('path');

const data = `Once Upon a Time in Lucknow \n`;


//mode : w
fs.writeFile('output.txt',data,"utf-8",(error) => {
 if(error == null){
    console.log('File Written Successfully');
 }
})
