// Create a program to check all numbers between 1+20 and whether they are prime numbers or not

function isPrime(num) {
    if (num < 2) return false
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

for (let i = 0; i <=20; i++) {
    if(isPrime(i)) {
        console.log(`${i} is a prime number.`);
    }
}
