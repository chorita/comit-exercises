"use strict";

//Add all the numbers bettwen 0 and 1000 using for statement
  let x=0;
let sum = 0;
for (x = 0; x < 1000; x++) {
    sum += x;
    if (sum > 400) { break; }
  }
  console.log(sum);
  console.log(x);


  // While - Show numbers from 0 to 10
let i = 0;
while (i <= 10) {
console.log(i);
i++
}

//Do While - Show numbers from 0 to 10
let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 10);

//For - Show numbers from 0 to 10
for (let b = 0; b <= 10; b++) { 
    console.log(b);
}

// While - Show numbers from 100 to 0
let c = 100;
while (c >= 0) { 
console.log(c);
c--;
}

// Do While - Show numbers from 100 to 0
let d = 100;
do {
  console.log(d);
  d--;
} while (d >= 0);

// For - Show numbers from 100 to 0
for (let e = 100; e >= 0; e--) { 
    console.log(e);
}

// For - Show even numbers between 0 and 100
for (let f = 0; f <= 100; f++) {
    if (f % 2 == 0) {
    console.log(f);
    }
  }

//While - Show even numbers between 0 and 100
let g = 0;
while (g <= 100) {
if (g % 2 == 0) {
console.log(g)}
g++;
}

//Do While - Show even numbers between 0 and 100
let h = 0;
if (h <= 100){
do {
  console.log(h);
  h++;
}while (h % 2 == 0)}

//Produce the following output
for(let lineNumber = 1; lineNumber <+ 13; lineNumber++) {
    let stars = "";
    for(let starCount = 1; starCount <= lineNumber; starCount++) {
        stars = stars + "*";
    }
    console.log(stars)}