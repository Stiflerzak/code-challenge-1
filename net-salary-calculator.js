//declaration of variable that accepts the bs
let basicsalary= prompt("Enter your basic salary")
let nssf= prompt("Enter deducted nssf amount")
let nhif=prompt("Enter deducted nhif ")
let gross_salary= parseInt(basicsalary) + parseInt(nssf) +parseInt(nhif)
let tax= gross_salary*0.20
let net_salary= gross_salary-tax

document.write(`Your Net Income is: ${net_salary}`)
//This function computes the nhif contribution based on salary paid
function nhif(salary){
    //if else statement that evaluates based on salary condition
if (salary<6000 && salary >0) {
    return 150;
} else if (salary<8000 && salary>6000){
    return 300;
}else if(salary<12000 && salary >8000){
    return 400;
}else if(salary<15000 && salary >12000){
    return 500;
}
else if(salary<20000 && salary >15000){
    return 600;
}
else if(salary<25000 && salary >20000){
    return 750;
}
else if(salary<30000 && salary >25000){
    return 850;
}
else if(salary<35000 && salary >30000){
    return 900;
    
}else if(salary<40000 && salary >35000){
    return 950;
}
}

//function that computes nssf
function nssf(salary){
let nssf_contribution= salary*0.06
}