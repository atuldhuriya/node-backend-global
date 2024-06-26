const fs = require('fs');
const log = require('../logger/logger');
const filePath =  "./data.json";
const FILE_HELPER = {
    readFile : function(){
        //Reading of the file in r mode
        try{
            const data = fs.readFileSync(filePath,"utf-8");
            if(data){
                log('File Readed Succesfully',0);
                return data;
            }
        }catch(error){
            log('Error Occurred : '+error.message,2);
        }
    },
    writeFile : function(data){
        if(!data){
            log(`${data} is mendatory`,1);
        }
    //writing of the file in a mode
try{
    fs.writeFileSync(filePath,data,"utf-8");
        log('File Written Succesfully',0);
}catch(error){
            log('Error Occurred : '+error.message,2);
    }
    }
}
const DATA = {
    insert : function(data){
        let ExistingData = FILE_HELPER.readFile();
        let parseData = ExistingData && JSON.parse(ExistingData) ? JSON.parse(ExistingData) : [];
        let newID = parseData.length ? Number(parseData[parseData.length-1].id)+1  : 1;
        let Object = {
            id : newID,
            ...data
        }
        parseData.push(Object)
        FILE_HELPER.writeFile(JSON.stringify(parseData,null,2));
    },
    select :function(key="",uniqueKey=""){
        if(uniqueKey == "" && key==""){
            let ExistingData = FILE_HELPER.readFile();
            let parseData = ExistingData && JSON.parse(ExistingData) ? JSON.parse(ExistingData) : [];
            return parseData;
        }
        let ExistingData = FILE_HELPER.readFile();
        let parseData = ExistingData && JSON.parse(ExistingData) ? JSON.parse(ExistingData) : [];
        for(let i=0;i<parseData.length;i++){
            if(parseData[i][key] == uniqueKey){
                return parseData[i];
            }
        }
        return {};
    }
}
module.exports = DATA;