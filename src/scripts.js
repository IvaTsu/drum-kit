const $this = document;
const btnName = $this.getElementById('btn-name');

$this.onkeydown = function(event) {
    const key = event.key;
    onBtnPressed(key);
};

const playSound = (soundId) => {
    const audio = $this.getElementById(soundId);
    audio.currentTime = 0; // reset the audio
    audio.play();
}

const defineBtn = (key) => key.toString().toUpperCase();

const displayBtn = (btn) => btnName.innerHTML = btn;

const onBtnPressed = (btn) => {
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