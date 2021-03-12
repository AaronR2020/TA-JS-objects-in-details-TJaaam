function Question(title,option,correctAnswerIndex){
    let user=Object.create(Question.prototype)
    this.title=title;
    this.option=option;
    this.correctAnswerIndex=correctAnswerIndex;
    return user
}
Question.prototype={
    isAnswerCorrect:function(correctAnswerIndex){
        return correctAnswerIndex==this.correctAnswerIndex?true:false;
    },
    getCorrectAnswer:function(){
        return this.correctAnswerIndex;
    }
}

let fQuestion = Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
firstQuestion.title;

function Questions(title,option,correctAnswerIndex){
    this.title=title;
    this.option=option;
    this.correctAnswerIndex=correctAnswerIndex;
}
Questions.prototype={
    isAnswerCorrect:function(correctAnswerIndex){
        return correctAnswerIndex==this.correctAnswerIndex?true:false;
    },
    getCorrectAnswer:function(){
        return this.correctAnswerIndex;
    }
}
let sQuestion = new Questions(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );

  class QuestionsE{
      constructor(title,option,correctAnswerIndex){
        this.title=title;
        this.option=option;
        this.correctAnswerIndex=correctAnswerIndex;
      }
     isAnswerCorrec(correctAnswerIndex){
        return correctAnswerIndex==this.correctAnswerIndex?true:false;
    }
    getCorrectAnswer(){
        return this.correctAnswerIndex;
    }
  }
  let tQuestion = new QuestionsE(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );