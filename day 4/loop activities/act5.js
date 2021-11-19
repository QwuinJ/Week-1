// Create a variable, generate a random number between 1 and 30 six times, for each number generated check if it is divisible by 7 or not

let x = 0;
let nlist = [];

while (x<6) {
    x++;
    nlist.push(Math.floor(Math.random() * 29 + 1));
}

for (element of nlist) {
    let n = (element%7);
    if (n == 0) {
        console.log(`${element} is divisible by seven`);
    } else {
        console.log(`${element} is not divisible by seven`);
    }
}
