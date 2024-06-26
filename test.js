const path = require('path'); //Module

console.log('The filename is',__filename); //Magic constant .
console.log('The directory Name is',__dirname);  //Magic constant for foldername.

console.log('Basename of directory =',path.basename(__dirname));
console.log('Basename of file =',path.basename(__filename));
console.log('Extension of file =',path.extname(__filename));

let newPath = path.join(__dirname,'images/apple.png');
console.log('New Path',newPath);