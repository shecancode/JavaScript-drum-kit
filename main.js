
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log(audio);
  if(!audio) return; //stops function from running
  audio.currentTime = 0; //rewind to start
  audio.play();
  key.classList.add('playing')
  
};

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remoove('playing');
}
const keys = document.querySelectorAll('.key');
keys.forEach(key =>  key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);