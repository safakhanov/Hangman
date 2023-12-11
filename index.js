
const game ={
 wins: 0,
 losses: 0,
 guesses_left: 9,
 guessed: [],
 comp_choice: "",

 randomChoice: function () {
   const min =97;
   const max =123;

   const asciiNumber = Math.round(Math.random() *(max-min)+min);

   this.comp_choice = String.fromCharCode(asciiNumber);

 },

guessesSoFar: function(herf){
    if(!this.guessed.includes(herf) ){
        this.guessed.push(herf);
    }

},
muqayise : function(herf){
 if(herf === this.comp_choice){
    this.wins++;
    this.restart();

 }else if(this.guesses_left>0){
    this.guesses_left--;
    this.guessesSoFar(herf);  

 }else{
    this.losses++;
    this.restart();
 }
},

restart: function(){
    this.guesses_left = 9;
    this.guessed =[];
    this.randomChoice();

},

 refreshVision: function () {
    document.querySelector('#wins').innerHTML =this.wins;
    document.querySelector('#losses').innerHTML =this.losses;
    document.querySelector('#guesses_left').innerHTML =this.guesses_left;
    document.querySelector('#guessed').innerHTML =this.guessed.join(", ");

    }
}
game.restart();

window.addEventListener('keyup',function(e){
    game.muqayise(e.key);
    game.refreshVision();
});