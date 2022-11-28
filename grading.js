//function that computes the score of a given student
function Grade_generator(score) {
  if(score > 100 || score < 0){
    return `${grade} is invalid!`;
}
else{
    if (score > 79) {
        return  "A";
    }
    else if (score > 59 && score <= 79) {
        return  "B";
    }
    else if (score > 49 && score <= 59){
        return  "C";
    }
    else if (score > 39 && score <= 49){
        return  "D";
    }
    else{
        return  "E";
    }
}

} 
  
  
  let grade = prompt("Enter your Score");
  let score= Grade_generator(grade)
  alert(`You grade: ${score}`);
  
  //print out the grade 
  console.log(Grade_generator(score));
  
  