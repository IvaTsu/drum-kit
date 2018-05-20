const $this = document;
const btnName = $this.getElementById('btn-name');
const btnCode = $this.getElementById('btn-code');
const audioName = $this.getElementById('audio-name');

$this.onkeydown = function(event) {
    const keyCode = event.keyCode;
    console.log(keyCode);
    const key = event.key;
    onBtnPressed(keyCode, key);
};

const playSound = (soundId) => {
    const audio = $this.getElementById(soundId);
    audio.currentTime = 0; // reset the audio
    audio.play();
}

const defineBtn = (key) => key.toString().toUpperCase();

const displayBtn = (keyCode, key, audio) => {
    btnName.innerHTML = key;
    btnCode.innerHTML = keyCode;
    audioName.innerHTML = audio;
};

const onBtnPressed = (keyCode, key) => {
    const btnName = defineBtn(key);
    switch (keyCode) {
        case 81: // 'Q' button
            displayBtn(keyCode, btnName, 'boom');
            playSound('boom-audio');
            break;
        case 87: // 'W' button
            displayBtn(keyCode, btnName, 'clap');
            playSound('clap-audio');
            break;
        case 69: // 'E' button
            displayBtn(keyCode, btnName, 'hihat');
            playSound('hihat-audio');
            break;
        case 82: // 'R' button
            displayBtn(keyCode, btnName, 'kick');
            playSound('kick-audio');
            break;
        case 84: // 'T' button
            displayBtn(keyCode, btnName, 'openhat');
            playSound('openhat-audio');
            break;
        case 89: // 'Y' button
            displayBtn(keyCode, btnName, 'ride');
            playSound('ride-audio');
            break;
        case 85: // 'U' button
            displayBtn(keyCode, btnName, 'snare');
            playSound('snare-audio');
            break;
        case 73: // 'I' button
            displayBtn(keyCode, btnName, 'tink');
            playSound('tink-audio');
            break;
        case 79: // 'O' button
            displayBtn(keyCode, btnName, 'tom');
            playSound('tom-audio');
            break;
        default:
            break;
    }
}