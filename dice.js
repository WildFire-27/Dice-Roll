//IMAGE-1
var randomNUM= Math.floor(Math.random()*6)+1; // 1-6 numbers
var imagesRandome = "images/" + "dice" + randomNUM +".png";//path + images + numbers 
document.querySelectorAll(".img1")[0].setAttribute("src",imagesRandome);


//IMAGE-2
var randomNUMO = Math.floor(Math.random()*6)+1;
var imagesRandomeO="images/" + "dice" + randomNUMO + ".png";
document.querySelectorAll(".img2")[0].setAttribute("src",imagesRandomeO);


  if(randomNUM===randomNUMO){
    document.querySelector("h1").innerHTML="Its a tie Match!!!"
  }

  else if(randomNUM< randomNUMO){
    document.querySelector("h1").innerHTML="Player 2 WON!!!"
  }
  else{
    document.querySelector("h1").innerHTML="Player 1 WON!!!"
  }
