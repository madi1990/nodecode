import {createInterface} from 'readline';

const rl = createInterface({
    input: process.stdin, 
    output: process.stdout
});

rl.question('Enter your user ID: ', (userId) => {
    console.log(`User ID: ${userId}`);
    rl.close();
});