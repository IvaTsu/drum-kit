const $this = document;
const btnName = $this.getElementById('btn-name');
const btnCode = $this.getElementById('btn-code');

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

const displayBtn = (keyCode, key) => {
    btnName.innerHTML = key;
    btnCode.innerHTML = keyCode;
};

const onBtnPressed = (keyCode, key) => {
    const btnName = defineBtn(key);
    switch (keyCode) {
        case 81: // 'Q' button
            displayBtn(keyCode, btnName);
            playSound('boom-audio');
            break;
        case 87: // 'W' button
            displayBtn(keyCode, btnName);
            playSound('clap-audio');
        case 69: // 'E' button
            displayBtn(keyCode, btnName);
            playSound('hihat-audio');
        case 82: // 'R' button
            displayBtn(keyCode, btnName);
            playSound('kick-audio');
        case 84: // 'T' button
            displayBtn(keyCode, btnName);
            playSound('openhat-audio');
        case 89: // 'Y' button
            displayBtn(keyCode, btnName);
            playSound('ride-audio');
        case 85: // 'U' button
            displayBtn(keyCode, btnName);
            playSound('share-audio');
        case 73: // 'I' button
            displayBtn(keyCode, btnName);
            playSound('tink-audio');
        case 79: // 'O' button
            displayBtn(keyCode, btnName);
            playSound('tom-audio');
        default:
            break;
    }
}