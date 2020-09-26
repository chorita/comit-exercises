"use strict";

let hour = prompt("Enter the current hour (out of 0-23)");

if (hour < 0 || hour > 23){
    alert("That their input is incorrect");
}
else if (hour < 8 || hour >= 18) {
    alert("hour is outside of office hours");
}
else if  (hour >= 8 && hour < 18) {
    alert("we are open");
};