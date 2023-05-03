var RPSgame ={
    Playoptions:['R','P','S'],
    wins : 0,
    loses :0 ,
    ties : 0,
    UserInp :'',
    computerInp:'',

    Prompt:function(){
        var userchoice = window.prompt('Enter R/S/P');

        if(!userchoice){
            return;
        }

        this.UserInp=userchoice.toUpperCase();
        console.log("user input",this.UserInp);
        window.alert('user chose : '+this.UserInp);
        this.generatecompinput();
    },

    generatecompinput:function(){
         var randominp=Math.floor(Math.random()*this.Playoptions.length);
         this.computerInp=this.Playoptions[randominp];
         console.log("computer choice",this.computerInp);
         window.alert('computer chose : '+this.computerInp);
         this.results();
    },

    results:function(){
      if(this.UserInp === this.computerInp){
        this.ties++;
        window.alert("Its a Tie");
      }
       else if((this.UserInp==='R' && this.computerInp==='P') ||
          (this.UserInp==='S' && this.computerInp==='R') || 
          (this.UserInp==='P' && this.computerInp==='S')){

            this.loses++;
            window.alert("computer wins");
          }  
        else{
            this.wins++;
        window.alert("U won");
        }

     window.alert('wins:'+this.wins +
                   '\n loses:'+this.loses +
                   '\n ties:' +this.ties);
                   this.replay();
    },

    replay:function(){
var playagain =window.confirm('wanna play again?');
if(playagain){
    this.play();
}
    },

    play:function(){
        this.Prompt();
    },

};



