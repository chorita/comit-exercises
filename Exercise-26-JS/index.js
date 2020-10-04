"use strict"

function showNumbers() {
    let i = 0
    for (i = 0; i <=100; i++) {
        if ( i % 2 == 0) {
        console.log(i);
}
    }
}
showNumbers();



let userName = "Carlos"
let age = 35
let phoneNumber = 111-222-3333
let street = "Smith"
let postalCode = "AAA-0000"
let married = true
function showUser() {
    let message = 'Hello, ' +userName +age+ phoneNumber +street +postalCode +married 
    alert(message);
}
showUser();



let evenNumbers = function() {
    let a = 0
    for (a = 0; a <=100; a++) {
        if ( a % 2 == 0) {
            console.log(a)
}
    }
}
for ( let numberOfTimes = 1; numberOfTimes <= 2; numberOfTimes++);
evenNumbers();



let number = +prompt("Enter the number of terms", " ");
let n1=0;
let n2=1;
let nextTerm;
console.log(`Fibonacci Series:`);
function fibonacci(){
for(let i=0; i<=number; i++) {
    console.log(n1);
    nextTerm = n1+n2;
    n1=n2;
    n2=nextTerm;
}
}
fibonacci();



let showName = function(name) {
    let banner = "";
    for (
        let numberOfSigns =0;
        numberOfSigns <= name.lenght + 6;
        numberOfSigns++
    ) {
        banner += "==";
    }
console.log(banner);
console.log(`== ${name} ==`);
console.log(banner);
};
for ( let numberOfTimes = 1; numberOfTimes <= 2; numberOfTimes++);
showName("Carlos");
showName("Horita");