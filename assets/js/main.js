
console.log("LEVEL1_1_!");

console.log("start in 3 sec!");
setTimeout(function myFunction() {
    console.log("Lebenszeit verschwendet");
}, 3000);

console.log("SekundenIntervall");

// let date = () => {
//     let date = new Date();
//     console.log(date.toLocaleTimeString());
// }
// date();
// let sec = setInterval(date, 1000);

let counti = 10;

let intervally = setInterval(function myFuncti() {
    console.log(counti);
    counti--;
    if (counti === 0) {
        clearInterval(intervally);
        console.log("stop");
    }
}, 1000);


console.log("LEVEL1_2_!");

let prozOut = document.querySelector('.zeit');


const proZaehl = () => {
    let proz = 100;
    let intervally = setInterval(function myFuncti() {
        prozOut.innerHTML = proz + "%";
        proz--;
        if (proz === 0) {
            clearInterval(intervally);
            prozOut.innerHTML = "0%";
        }
    }, 100);
}