//remember: first logic then design
console.log("hello");
function infoApp(title,options,correctAnswer){
    let obj={}
    //data
    obj.title=title;
    obj.options=options;
    obj.correctAnswer=correctAnswer;
    //operations
    obj.isAnswerCorrect=function(answer){
       return this.correctAnswer==answer? true:false;
    }
    obj.getCorrectAnswer=function(){
        return this.correctAnswer;
    }
    return obj;
}

//questions
let questions=[
 infoApp("what is the capital of Jordan",['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1),
 infoApp("what is the capital of India",['Tashkent',  'Delhi', 'Kuwait City', 'Nairobi'],2)
];

//use map to create block of ui and add to html
let list=document.querySelector('#questionsList');
node=questions.map(i=>{
    p=document.createElement("p");
    p.textContent=i.title;
    return p;
    console.log(i.options);
    console.log(i.correctAnswer);
});
list.append(node);