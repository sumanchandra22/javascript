var x=10;
console.log("Currently in global.");
console.log("x globally = "+x);
var a=function () {
    var x=5;
    console.log("Currently inside the function a which is defined and called globally.");
    console.log("x inside function a = "+x);
    b();
}
function b() {
    var x=15;
    console.log("Currently inside the function b which is defined globally but called inside the function a.");
    console.log("x inside function b = "+x);
}
a();
console.log("Currently in global.");
console.log("x globally = "+x);