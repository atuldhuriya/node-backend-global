const readline = require('readline');

//2. create Interface 
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
//3. create Interface 
r1.question('Enter Your Name :',(name)=>{
    r1.question('Enter Your Email :',(email)=>{
        r1.question('Enter Your Mobile :',(mobile)=>{
          console.log(`Name =${name} Email =${email} Mobile =${mobile}`);
          r1.close();
        });
    });
});
