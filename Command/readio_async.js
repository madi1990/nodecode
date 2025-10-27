import { createInterface } from 'readline/promises';

const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const answer = await rl.question('Enter your user ID: ');
console.log(`User ID: ${answer}`);
rl.close();