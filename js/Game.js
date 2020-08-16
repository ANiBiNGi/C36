class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
play(){
  form.hide()
  text("Game Starts", 100, 100)
  Player.getplayerinfo() 
if(allPlayers !== undefined){
  var displayPosition = 120;
  for(var plr in allPlayers){
    if(plr === "player" + player.index){
      fill("red")
    }
    else fill("black")
    displayPosition = displayPosition + 20
    text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 120, displayPosition)
  }
}

if(keyIsDown(UP_ARROW) && player.index !== null){
player.distance = player.distance + 50;
player.update();
}








}
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}