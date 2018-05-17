var $this = document;
var btnName = $this.getElementById('btn-name');

$this.onkeydown = function(event) {
    var key = event.key;
    onBtnPressed(key);
};

function playSound(soundId) {
    document.getElementById(soundId).play();
}

function defineBtn(key) {
    return key.toString().toUpperCase();
}

function displayBtn(btn) {
    btnName.innerHTML = btn;
}

function onBtnPressed(btn) {
    console.log(btn);
    var btnName = defineBtn(btn);
    displayBtn(btnName);
    switch (btnName) {
        case 'Q': 
            playSound('boom-audio');
            break;
        default:
            break;
    }
}