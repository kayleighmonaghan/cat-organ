function playSound(event) {
    const audio = document.querySelector(`audio[data-key='${event.key}']`);
    const key = document.querySelector(`.key[data-key='${event.key}']`);
    if(!audio) return; // stops function from running if key with no audio element is pressed
    audio.currentTime = 0; // stops waiting for sound to end before next can begin
    audio.play();
    key.classList.add('playing'); 
}

function removeTransition(event) {
    if(event.propertyName !== 'transform') return; // ignores transitions not called 'transform'
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);