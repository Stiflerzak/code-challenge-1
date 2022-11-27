//function that computes the score of a given student
function Grade_generator(score) {
 
  
    switch(true) {
  case (score <= 100 && score >= 79):
  grade = 'A';
   break;
  case (score <= 78 && score >= 60):
   grade = 'B';
    break;
  case (score <= 59 && score >= 49):
   grade = 'C';
    break;
  case (score <= 48 && score >= 40):
   grade = 'D';
    break;
  case (score <= 39 && score >= 0):
   grade = 'E';
   break;
  
  case (score > 100 && score < 0):
   grade = 'Score is Invalid';
   break;
  default:
  return 'Score is Invalid';
  }
  }
  
  //prompts the user to enter marks scored
  let score = prompt("Enter your Score");
  
  
  //print out the grade 
  console.log(Grade_generator(score));
  
  