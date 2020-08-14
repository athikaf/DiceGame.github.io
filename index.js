var randomNo1= Math.random()*6;
randomNo1= Math.floor(randomNo1)+1;

var randomDiceImg1="dice"+randomNo1+".png";
var randomImgSource="images/"+randomDiceImg1;

var image1=document.querySelector("img")[0];
document.querySelector(".img1").setAttribute("src", randomImgSource);

var randomNo2= Math.random()*6;
randomNo2= Math.floor(randomNo2)+1;

var randomDiceImg2="dice"+randomNo2+".png";
var randomImgSource="images/"+randomDiceImg2;

var image2=document.querySelector("img")[1];
document.querySelector(".img2").setAttribute("src", randomImgSource);

if (randomNo1>randomNo2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNo1<randomNo2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
else if (randomNo1===randomNo2) {
    document.querySelector("h1").innerHTML="Draw!";
}
