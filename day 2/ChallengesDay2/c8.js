// create two variables called num1 and num2

// let num1 = 0;
// let num2 = 0;

function numCheck(num1, num2) {
    x = num1 + num2;
    if (x%2 == 0) {
        console.log(`${x}`);
    } else {
        y = (num1*num2);
        console.log(`${y}`);
    }
}

numCheck(5,6);