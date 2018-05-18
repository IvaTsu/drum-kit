const $this = document;
const btnName = $this.getElementById('btn-name');
const btnCode = $this.getElementById('btn-code');

$this.onkeydown = function(event) {
    const keyCode = event.keyCode;
    const key = event.key;
    onBtnPressed(keyCode, key);
};

const playSound = (soundId) => {
    const audio = $this.getElementById(soundId);
    audio.currentTime = 0; // reset the audio
    audio.play();
}

const defineBtn = (key) => key.toString().toUpperCase();

const displayBtn = (keyCode, key) => {
    btnName.innerHTML = key;
    btnCode.innerHTML = keyCode;
};

const onBtnPressed = (keyCode, key) => {
    const btnName = defineBtn(key);
    switch (keyCode) {
        case 81:
            displayBtn(keyCode, btnName);
            playSound('boom-audio');
            break;
        case 87:
            displayBtn(keyCode, btnName);
            playSound('clap-audio');
        default:
            break;
    }
}