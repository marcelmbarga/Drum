
// Playing sound upon mouse click
var NumberOfDrums = document.querySelectorAll('.drum').length;

for (var i = 0 ; i < NumberOfDrums ; i++ ){
    document.querySelectorAll('.drum')[i].addEventListener('click',function(){
        // console.log(this.innerHTML)
        var buttonClick = this.innerHTML ;
        buttonEvents(buttonClick);
        buttonAnimation (buttonClick);

        
});
}

// Playing sound upon key press

document.addEventListener('keypress',function(event){
    var key = event.key;
    buttonEvents(key);
    buttonAnimation (key);
})
function buttonEvents(key) {
    switch (key) {
            case "w":
                var tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play();
            break;
            case "a":
                var tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play();
            break;
            case "s":
                var tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play();
            break;
            case "d":
                var tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play();
            break;
            case "j":
                var crash = new Audio('sounds/crash.mp3');
                crash.play();
            break;
            case "k":
                var kick = new Audio('sounds/kick-bass.mp3');
                kick.play();
            break;
            case "l":
                var snare = new Audio('sounds/snare.mp3');
                snare.play();
            break;
        
            default:

};
}

function buttonAnimation (currentkey) {
    var activeButton = document.querySelector('.' + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove('pressed');
    } ,100);
}

// add shadow while event happening
