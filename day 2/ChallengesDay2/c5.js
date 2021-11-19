const time = 1800
const placeOfWork = "the office"
const townOfHome = "home"

// create if statement logs where someone is at times of day

function checkPlace(){
    console.log(`It is ${time}`)
    if (time > 900 && time < 1700){
        console.log(`I am at ${placeOfWork}`);
    }
    
    else if (time > 1700 || time < 900){
        console.log(`I am at ${townOfHome}`);
    }
}

checkPlace();