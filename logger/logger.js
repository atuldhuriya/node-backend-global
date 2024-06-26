const fs = require('fs');
const path = require('path');

function log(message= '',level=0){
    let timeStamp = new Date().toISOString();
    let LEVEL_ENUM ={
        0 : "INFO",
        1 : "WARNING",
        2 : "CRITICAL",
    }

    let level_value = LEVEL_ENUM[level];
    let data = `Logger written on${timeStamp} Level : [${level_value}]
    Message : ${message} \n`;
    fs.appendFile('error.log',data,"utf-8",(error) => {
        if(error == null){
           console.log('File Written Successfully');
        }
       });
}

module.exports = log;