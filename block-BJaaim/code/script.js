window.onload=function(){

class Question{
    constructor(title,option,answer){
        this.title=title;
        this.option=option;
        this.answer=this.option[answer];//enter in number
}
isCorrect(){
    answer=document.querySelector('input[name="q"]:checked').value;
    if(answer!=""){
        return answer==this.answer;
    }
    else{
        alert("Choose a answer");
        return "";
    }
}
getCorrectAnswer(){
       
    document.querySelector(".answer-notif").innerHTML= `
    ${
        this.answer
    }`
}
createUI(){
    //add question and its options
    document.querySelector(".question-location").innerHTML=`${this.title}`;
    document.querySelector("#question1").innerHTML=`${this.option[0]}`;
    document.querySelector("#question2").innerHTML=`${this.option[1]}`;
    document.querySelector("#question3").innerHTML=`${this.option[2]}`;
    document.querySelector("#question4").innerHTML=`${this.option[3]}`;
}
}

 
class Quiz{
    //basically focus on view
    constructor(arr){
    this.stack=arr;//all questions
    this.activeIndex=0;
    this.score=0;
    }
    nextQuestion(){
        this.activeIndex++;
        this.createUI();
    }
    createUI(){
        if(this.activeIndex<this.stack.length){
            let a=this.stack[this.activeIndex]
            a.createUI();
            
        }
        else{
          alert("Youve completed the quiz");
          document.querySelector(".question-location").innerHTML=`${this.score}`;
          document.querySelector(".question-location").innerHTML=`Quiz Completed`;
        }
    }
    updateScore(){
        this.score++;
    }
}

var arr=[
    new Question("Capital of India",["Japan","Delhi","Goa","Dubai"],1),
     new Question("Capital of Dubai",["AbuDabi","India","Goa","Japan"],1),
     new Question("Capital of Suol",["Japan","Xi-uike","Goa","Dubai"],1)
 ];

 //init first set of questions.
 let b=new Quiz(arr)
 console.log(b);
 b.createUI();

document.querySelector(".ans").addEventListener("click",function(){
    
})
}
