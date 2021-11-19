let num = 9

if (num % 3 == 0 || num % 5 == 0){
    console.log(`${num} is divisible by 3 or 5`);
}
else{
    console.log(`${num} is not divisible by 3 or 5`);
}

// updated to use switch case
num = 37

switch(Math.floor(num%5) && Math.floor(num%3)) {
    case 0:
        console.log(`${num} is divisible by 3 or 5`);
        break;
    default:
        console.log(`${num} is not divisible by 3 or 5`);
}