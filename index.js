var len=document.querySelectorAll(".drum").length;

for(var i=0;i<len;i++){
document.querySelectorAll(".drum")[i].addEventListener("click",function() {    //anonymous
  var pick=this.innerHTML;

  styling(pick);

  switch(pick){
    case 'w':
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
     break;
    case 'a':
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;
    case 's':
     var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;
    case 'd':
     var tom4=new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;
     case 'j':
     var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;
    case 'k':
     var snare=new Audio("sounds/snare.mp3");
     snare.play();
     break;
  default:
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
  }
}
  );
}

document.addEventListener("keypress",function(event){
  styling(event.key);
  switch(event.key){
    case 'w':
     var audio=new Audio("sounds/tom-1.mp3");
     audio.play();
     break;
    case 'a':
     var tom2=new Audio("sounds/tom-2.mp3");
     tom2.play();
     break;
    case 's':
     var tom3=new Audio("sounds/tom-3.mp3");
     tom3.play();
     break;
    case 'd':
     var tom4=new Audio("sounds/tom-4.mp3");
     tom4.play();
     break;
     case 'j':
     var kick=new Audio("sounds/kick-bass.mp3");
     kick.play();
     break;
    case 'k':
     var snare=new Audio("sounds/snare.mp3");
     snare.play();
     break;
    case 'l':
     var crash=new Audio("sounds/crash.mp3");
     crash.play();
     break;
    default:
  }
})

function styling(currentkey){
  var k=document.querySelector("."+currentkey);
  k.classList.add("pressed");

  setTimeout(function(){k.classList.remove("pressed")},300);
}
