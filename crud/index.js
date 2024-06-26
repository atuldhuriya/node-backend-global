const readline = require('readline');
const query = require('./helper');
const Interface1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
Interface1.question(`Which Type of Operation You want to Perform :`, (option) => {
    let optionValue = option.toLocaleLowerCase();
    const Interfaces = {
        insert: () => {
            Interface1.question(`Enter Id: `, (id) => {
                Interface1.question(`Enter the Name: `, (name) => {
                    Interface1.question(`Enter the Salary: `, (salary) => {
                        if (id == "") {
                            query.insert({
                                name,
                                salary,
                            });
                        } else {
                            query.insert({
                                id,
                                name,
                                salary,
                            });
                        }
                        Interface1.close();
                    });
                });
            });
        },
        select: () => {
            Interface1.question(`Enter the Key Name: `, (keyName) => {
                Interface1.question(`Enter ${keyName} to find the record: `, (value) => {
                    console.log(query.select(keyName, value));
                    Interface1.close();
                });
            });
        }
    };
    if (Interfaces[optionValue]) {
        Interfaces[optionValue]();
    } else {
        console.log('Invalid option selected.');
        Interface1.close();
    }
});