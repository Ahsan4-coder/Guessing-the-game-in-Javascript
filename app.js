var num = +prompt("enter your choosen number you have only 5 attempts")

var guess = Math.floor((Math.random() * 10) + 1);

for (i = 1; i < 10; i++){ 
 if (num === guess){
    alert("you guessed the number " + num + ", is correct")
    alert("congratulations you win this game by " + i + " times attempts" )
    break
 }
 
 else if (i >= 5){
     alert("game over you loss")
     break
    }
    
else if (num === +" "){
        alert("please enter number")
        break
    }
else {
    num = +prompt('Please try again... </br>'  + "attemped No." + i )
 }
 
}
