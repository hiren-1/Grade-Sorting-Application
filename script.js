var names = [];
var grades = [];
var exam1Values = [];
var exam2Values = [];
var exam3Values = [];
var exam1Avg = 0;
var exam2Avg = 0;
var exam3Avg = 0;


console.log("\n ******Full Gradebook Printout***********\n")
//print all the students, their grade, and their exam marks
for(let i=0; i<6; i++){
  let name = window.prompt("Enter student number " +  [i + 1] + "'s name");

    names.push( name );
  
  let grade = window.prompt("Enter grade of student (10 to 12)");

    grades.push( grade );
  
  let exam1 = window.prompt("Enter exam 1 mark for ");
    
    exam1Values.push ( exam1 );

  let exam2 = window.prompt("Enter exam 2 mark for ");
    
    exam2Values.push ( exam2 );

  let exam3 = window.prompt("Enter exam 3 mark for");

    exam3Values.push ( exam3 );

    console.log("Name:", names[i], "Grade:", grades[i], exam1Values[i], exam2Values[i], exam3Values[i]);
    
}

console.log("\n ******Updated Exam3 Marks***********\n");
//printing updated marks

 for (var i = 0; i<6; i++){

    console.log("Name:", names[i], "Grade:", grades[i], exam1Values[i], exam2Values[i], Number(exam3Values[i]) + 5 );
 
 }


console.log("\n******Filtered Print - Grade 10s and 11s***********\n")
//printing out the grade 10s& 11s


for(var i=0; i<6; i++){
  
  if(Number(grades[i]) === 11 ||Number(grades[i]) === 10){
      
    console.log("Name:", names[i], "Grade:", grades[i]);
  
  }
}


console.log("\n  *****Filtered Print - Exam 1 failures********\n")
//printing out students who failed exam 1

//display name and grade of failed tests

for (var i=0; i<6; i++){
  if (Number(exam1Values[i] ) < 50){ 

  console.log("Name:", names[i], "Exam 1 mark:", exam1Values[1]);

  }
}


console.log("\n  *****Class Averages - Final 20%*********** \n")
//print out each student's average grade

//Add all exams together respective to tests

for (var i=0; i<6; i++){
  exam1Avg = exam1Avg + Number(exam1Values[i]);
}
for (var i=0; i<6; i++){
  exam2Avg = exam2Avg + Number(exam2Values[i]);
}
for (var i=0; i<6; i++){
  exam3Avg = exam3Avg + Number(exam3Values[i]);
}

//Determines exam averages between everyone
exam1Avg = exam1Avg / 6 
exam2Avg = exam2Avg / 6
exam3Avg = exam3Avg / 6


//Round and display avg
console.log("Exam 1 average;", Math.round(exam1Avg * 100) / 100);
console.log("Exam 2 average;", Math.round(exam2Avg * 100) / 100);
console.log("Exam 3 average;", Math.round(exam3Avg * 100) / 100);

