const myBtn =document.getElementById("myBtn");
const q1answer= document.getElementById("oq4");
const q2answer= document.getElementById("oq6");
const q3answer=document.getElementById("oq11");
const myStart=document.getElementById("myStart");
let answer1= document.getElementById("correctAnswer");
let answer2=document.getElementById("correctAnswer2");
let answer3=document.getElementById("correctAnswer3"); 



const myReset= document.getElementById("myRESET");
class answerStatus{
    static score= 0;
          
      static scoreUpdate(){
          this.score++;
         
    }
    static scorereset(){
        this.score=0;
        this.scoreDisplay();
    }
    static scoreDisplay(){
        document.getElementById("user-score").innerHTML = `Your score is: ${this.score}`;
    }

    
}
let submittedonceq1=false;
let submittedonceq2=false;
let submittedonceq3=false;

answerStatus.scoreDisplay();

myStart.addEventListener("click", function(){
  document.getElementById("question-container").style.display="block";
   answerStatus.scorereset();
 submittedonceq1=false;
 submittedonceq2=false;
 submittedonceq3=false;

});

myBtn.addEventListener("click", function(){
   
 if(q1answer.checked && !submittedonceq1){
   submittedonceq1=true;
    answer1.textContent = `Correct Answer!`;
    answerStatus.scoreUpdate();
    answerStatus.scoreDisplay();
}
 else if(!q1answer.checked && !submittedonceq1){
    answer1.textContent= "Already selected!";
 }
 else{
    answer1.textContent= `Correct Answer: New York (NYC)`;
 }
    answerStatus.scoreDisplay();
 if(q2answer.checked && !submittedonceq2){
   submittedonceq2=true;
    answer2.textContent = `Correct Answer!`;
    answerStatus.scoreUpdate();
    answerStatus.scoreDisplay();
 
 }  
     
 else if(!q2answer.checked && !submittedonceq2){
    answer2.textContent= "Already selected!";
 }
 else{
    answer2.textContent= `Correct Answer: 2`;
 }
   answerStatus.scoreDisplay();
 if(q3answer.checked && !submittedonceq3){
   submittedonceq3=true;
    answer3.textContent = `Correct Answer!`;
    answerStatus.scoreUpdate();
    answerStatus.scoreDisplay();
    
 }

 else if(!q3answer.checked && !submittedonceq3){
    answer3.textContent= "Already selected!";
 }
 else{
    answer3.textContent= `Correct Answer: String`;
 }
   
});


myReset.addEventListener("click",function(){
 answerStatus.scorereset();
   q1answer.checked=false;
   q2answer.checked=false;
   q3answer.checked=false;
   document.getElementById("oq1").checked=false;
   document.getElementById("oq3").checked=false;
   document.getElementById("oq5").checked=false;
   document.getElementById("oq7").checked=false;
   document.getElementById("oq8").checked=false;
   document.getElementById("oq9").checked=false;
   document.getElementById("oq10").checked=false;
   document.getElementById("oq12").checked=false;
   

   submittedonceq1=false;
   submittedonceq2=false;
   submittedonceq3=false;
   
   
   
   

   
   answer1.textContent=" ";
   answer2.textContent=" ";
   answer3.textContent=" ";
});