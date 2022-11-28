//this function accepts speed argument and computes it.
function Speed_detector(speed) {
  if(grade > 100 && grade < 0){
    return `${grade} is invalid!`;
}
else{
    if (grade > 79) {
        return  "A";
    }
    else if (grade > 59 && grade <= 79) {
        return  "B";
    }
    else if (grade > 49 && grade <= 59){
        return  "C";
    }
    else if (grade > 39 && grade <= 49){
        return  "D";
    }
    else{
        return  "E";
    }
}

} 
  //switch case to determine demerit for each speed range
  //   switch(true) {
  // case (speed >=1 && speed <= 70):
  // demerit = 'OK';
  //  break;
  // case (speed <= 75 && speed > 70):
  //  demerit = 'One point added';
  //   break;
  // case (speed <= 80 && speed >75):
  //  demerit = 'two points added';
  //   break;
  // case (speed <= 85 && speed > 80):
  //  demerit = 'three points added';
  //   break;
  // case (speed <= 90 && speed > 85):
  //  demerit = 'four points added';
  //  break;
  //  case (speed <= 95 && speed > 90):
  //  demerit = 'five points added';
  //  break;
  //  case (speed <= 100 && speed > 95):
  //  demerit = 'six points added';
  //  break;
  //  case (speed <= 105 && speed > 100):
  //  demerit = 'seven points added';
  //  break;
  //  case (speed <= 110 && speed > 105):
  //  demerit = 'eight points added';
  //  break;
  //  case (speed <= 115 && speed > 110):
  //  demerit = 'nine points added';
  //  break;
  //  case (speed <= 120 && speed > 115):
  //  demerit = 'ten points added';
  //  break;
  //  case (speed <= 125 && speed > 120):
  //  demerit = 'eleven points added';
  //  break;
  
  // case (speed >= 125):
  //  demerit = 'License suspended';
  //  break;
  // default:
  // return 'License suspended';
  // }
  // }
  
  //prompts the user to enter speed
  let speed = prompt("Enter your Speed");
  
  
  //print out the demerit 
  console.log(Speed_detector(speed));
  