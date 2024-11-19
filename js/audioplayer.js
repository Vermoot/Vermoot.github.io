document.addEventListener("DOMContentLoaded", () => {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach((audio) => {
    // Hide the original audio element
    audio.style.display = 'none';

    // Create custom player elements
    const playerContainer = document.createElement('div');
    playerContainer.player = audio;
    playerContainer.className = 'custom-audio-player';
    if (audio.id) { playerContainer.id = audio.id; }
    if (audio.className) { playerContainer.className += ' ' + audio.className; }

    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'play-pause-btn';
    playPauseBtn.innerHTML = "<img src='assets/svg/play.svg' alt='Play' />";

    const seekBar = document.createElement('div');
    seekBar.className = 'seek-bar';
    seekBar.id = 'seek-bar';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress';

    const seekInput = document.createElement('input');
    seekInput.type = 'range';
    seekInput.min = '0';
    seekInput.value = '0';

    seekBar.appendChild(progressBar);
    seekBar.appendChild(seekInput);

    playerContainer.appendChild(playPauseBtn);
    playerContainer.appendChild(seekBar);
    audio.parentNode.insertBefore(playerContainer, audio);

    // Update seek bar max value when metadata is loaded
    audio.addEventListener('loadedmetadata', () => {
      seekInput.max = audio.duration;
    });

    // Play/pause functionality
    playPauseBtn.addEventListener('click', () => {
      if (audio.paused) {
        audioElements.forEach((a) => a.pause());
        audio.play();
      } else {
        audio.pause();
      }
    });

    // Update button state when the audio starts playing
    audio.addEventListener('play', () => {
      // playPauseBtn.innerHTML = '⏸'; // Pause symbol (⏸)
      playPauseBtn.innerHTML = "<img src='assets/svg/pause.svg' alt='Pause' />";
    });

    // Update button state when the audio is paused
    audio.addEventListener('pause', () => {
      // playPauseBtn.innerHTML = '&#9654;'; // Play symbol (▶)
      playPauseBtn.innerHTML = "<img src='assets/svg/play.svg' alt='Play' />";
    });

    // Update progress bar as the audio plays
    audio.addEventListener('timeupdate', () => {
      seekInput.value = audio.currentTime;
      progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });

    // Seek functionality
    seekInput.addEventListener('input', (e) => {
      audio.currentTime = e.target.value;
      progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });
  });
});
