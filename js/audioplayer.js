document.addEventListener("DOMContentLoaded", () => {
  const audioElements = document.querySelectorAll('audio');
  audioElements.forEach((audio) => {
    // Hide the original audio element
    audio.style.display = 'none';

    // Create custom player elements
    const playerContainer = document.createElement('div');
    playerContainer.className = 'custom-audio-player';
    if (audio.id) { playerContainer.id = audio.id; }
    if (audio.className) { playerContainer.className += ' ' + audio.className; }

    const playPauseBtn = document.createElement('button');
    playPauseBtn.className = 'play-pause-btn';
    playPauseBtn.innerHTML = '&#9654;'; // Play symbol (▶)

    const seekBar = document.createElement('div');
    seekBar.className = 'seek-bar';

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
      playPauseBtn.innerHTML = '&#10074;&#10074;'; // Pause symbol (⏸)
    });

    // Update button state when the audio is paused
    audio.addEventListener('pause', () => {
      playPauseBtn.innerHTML = '&#9654;'; // Play symbol (▶)
    });

    // Update progress bar as the audio plays
    audio.addEventListener('timeupdate', () => {
      seekInput.value = audio.currentTime;
      progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });

    // Seek functionality
    seekInput.addEventListener('input', (e) => {
      audio.currentTime = e.target.value;
    });

    // Sync seek bar width with the input range
    seekInput.addEventListener('input', () => {
      progressBar.style.width = `${(audio.currentTime / audio.duration) * 100}%`;
    });
  });
});
