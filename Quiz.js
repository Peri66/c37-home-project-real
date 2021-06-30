class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    
    //this.question.hide();
    //this.option1.hide();
    //this.option2.hide();
    //this.option3.hide();
    //this.option4.hide();

    //write code to change the background color here
    background("yellow");
   


    //write code to show a heading for showing the result of Quiz
    this.title1 = createElement('h1')
    this.title1.html("Results Of The Quiz")
    this.title1.position(350,0)

    //call getContestantInfo( ) here
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
      text("*NOTE: contestants who answered correctly are highlighted in green colour",130,230)
    }

    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestants[plr].answer){
      fill("green")}
      else{
      fill("red")}
    }
    
  }

}
