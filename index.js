var noOfDrumButtons=document.querySelectorAll(".drum").length;//here we are using calss name instead of tag name for specify.
for(var i=0 ; i<noOfDrumButtons ; i++){
  document.querySelectorAll("button")[i].addEventListener("click",clickhandle);
}

function clickhandle(){
  var button = this.innerHTML;
  makeSound(button);
  buttonAnimation(button);
}

document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

function makeSound(key){
switch (key) {
  case "a":
    var drum1 = new Audio("sounds/tom-1.mp3");
    drum1.play();
    break;
  case "s":
    var drum2 = new Audio("sounds/tom-2.mp3");
    drum2.play();
    break;
  case "d":
    var drum3 = new Audio("sounds/tom-3.mp3");
    drum3.play();
    break;

  case "f":
    var drum4 = new Audio("sounds/tom-4.mp3");
    drum4.play();
    break;

  case "j":
    var drum5 = new Audio("sounds/snare.mp3");
    drum5.play();
    break;

  case "k":
    var drum6 = new Audio("sounds/kick-bass.mp3");
    drum6.play();
    break;

  case "l":
    var drum7 = new Audio("sounds/crash.mp3");
    drum7.play();
    break;

  default:
    console.log(button);

}

}

function buttonAnimation(currentKey){
 var activeButton = document.querySelector("." + currentKey);//shows which key we want to apply animation like .a,.s, etc serching for a class using query selsctor..
 activeButton.classList.add("pressed");//adding a class pressed to it.now when event happened , this function will execute and pressed class will happend and animation will apply to it.
// here the problem is once we press the key it will show animation of second and it should retain its natural nature back(without animation)
  setTimeout(function(){
    activeButton.classList.remove("pressed")
  },100);

}
