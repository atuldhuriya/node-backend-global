const { log } = require('console');
const log = require ('./logger.js');
const fs = require('fs');

try{
    const data = fs.readFileSync('./indes.js','utf-8');
    if(data){
        console.log(data);
        log('File Readed Successfully',0);
    }
}catch(error){
    log('Error Occurrd :'+error.message,2);
}