const fs = require ('fs');
const path = require('path')



// meta data - Synchronously.
try{
    const info = fs.statSync('sample.txt');
    console.log('Information :',info);

}catch(error){
    console.log('error Occured',error.message);
}
 
// const info = fs.statSync('sample.txt'); //meta data.
// console.log(info);


// meta data - Asynchronously.
fs.stat('sample.txt',(error,info)=>{
    if(error == null){
        console.log('Information :',info);
    }else{
        console.log('error Occured',error);
    }
});