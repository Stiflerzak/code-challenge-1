//Declaration of variables
let speedLimit = 70;
let pointcount = 0;
//This prompts user to key in the speed for computation.
let speed = prompt("Enter Your speed");

//if statement that computes the condition of speed. If condition is true, "okay" alert is displayed.
if(speed <= 70) {
    alert("Speed is OK")
}
else{
    pointcount = Math.floor((speed - speedLimit) / 5);
    //ternary expression to determine the points
    let output = pointcount > 12 ? "License suspended": "Pointcount = "+pointcount
    alert(output);

}