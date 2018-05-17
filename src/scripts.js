var $this = document;
var btnName = $this.getElementById('btn-name');

$this.onkeydown = function(event) {
    var key = event.key;
    console.log(key);
    var btnString = key.toString().toUpperCase();
    btnName.innerHTML = btnString;
    switch (btnString) {
        case 'Q': 
            var sound = document.getElementById("boom-audio");
            sound.play();
            break;
        default:
            break;
    } 

};