// if num % 3 log fizz
// if num % 5 log buzz
// if both log fizz buzz
// else log num

const fizzbuzz = (num) => {
    if ((num % 3 == 0) && (num % 5 == 0)){
        return "fizzbuzz";
    }
    else if (num % 3 == 0){
        return "fizz";
    }
    else if (num % 5 == 0){
        return "buzz";
    }
    else{
        return `${num}`;
    }
};

console.log(fizzbuzz(14));