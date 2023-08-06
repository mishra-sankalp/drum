for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function()
  {
    var buttonInnerHTML=this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);

  });
  document.addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
  });
}
function makeSound(buttonsound)
{
  switch (buttonsound) {
    case "m":
          var tom1=new Audio("sounds/tom-1.mp3");
          tom1.play();
      break;
    case "u":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
          var tom3=new Audio("sounds/tom-3.mp3");
          tom3.play();
      break;
      case "i":
            var tom4=new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;
        case "c":
              var snare=new Audio("sounds/snare.mp3");
              snare.play();
          break;
          case "a":
               var crash=new Audio("sounds/crash.mp3");
               crash.play();
            break;
            case "l":
                  var kick=new Audio("sounds/kick-bass.mp3");
                  kick.play();
              break;
  }
}
function buttonAnimation(pp){
var activeButton=document.querySelector("."+pp);
  activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100)
}
