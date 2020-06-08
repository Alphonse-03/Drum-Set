var l=document.querySelectorAll(".song").length;
for(var i=0;i<l;i++)
{
    document.querySelectorAll(".song")[i].addEventListener("click", function()
    {
        makeSound(this.innerHTML);
         animation(this.innerHTML);
    });
}
document.addEventListener("keypress", function(event)   
{
   makeSound(event.key);
   animation(event.key);
});

function makeSound(choice)
{
    switch (choice)
     {
        case "a": var a = new Audio("sounds/tom-1.mp3");
                a.play();
            
            break;
    
       
      case "s": var s = new Audio("sounds/tom-2.mp3");
       s.play();
        break;


        case "d": var d = new Audio("sounds/tom-3.mp3");
       d.play();
        break;


        case "f": var a = new Audio("sounds/tom-4.mp3");
       a.play();
        break;


        case "g": var a = new Audio("sounds/snare.mp3");
       a.play();
       break;


       case "h": var a = new Audio("sounds/crash.mp3");
       a.play();
        break;


        case "j": var a = new Audio("sounds/kick-bass.mp3");
       a.play();
        break;
        default:
            break;
    
    }
}
function animation(choice)
{
    var activeButton = document.querySelector("." + choice);

    activeButton.classList.add("pressed");
  
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
