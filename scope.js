var t=35;
console.log("Currently variable (t) is in global.");
console.log("Value of variable (t) globally = "+t);
var a=function () {
    var t=5;
    console.log("Currently variable (t) is inside the function (a) which is defined and called globally.");
    console.log("Value of variable (t) inside the function (a) = "+t);
    b();
}
function b() {
    var t=15;
    console.log("Currently variable (t) is inside the function (b)  which is defined globally but called inside the function (a).");
    console.log("Value of variable (t) defined locally inside the function (b) = "+t);
}
a();
console.log("Currently variable (t) is in global.");
console.log("Value of variable (t) globally = "+t);
