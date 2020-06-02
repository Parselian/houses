'use-strict';

window.addEventListener('DOMContentLoaded', () => {

  const controlVideoplayer = () => {
    const playerWrap = document.querySelector('.video__mediaplayer'),
          player = playerWrap.querySelector('video'),
          playerBtn = playerWrap.querySelector('.video__mediaplayer-playbutton');

    playerWrap.addEventListener('click', e => {
      const target = e.target;

      if (target.matches('.video__mediaplayer-playbutton') && player.paused) {
        player.play();
        playerBtn.style.display = 'none';
        player.style.cursor = 'pointer';
      } else {
        player.pause();
        playerBtn.style.display = 'unset';
        player.style.cursor = 'unset';
      }

      console.dir(player);
    });
  };
  controlVideoplayer();
});