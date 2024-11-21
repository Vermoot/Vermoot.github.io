document.addEventListener("DOMContentLoaded", () => {

  const randomPlayer = document.getElementById("random-player");
  // randomplayer width 300px
  randomPlayer.style.width = "300px";
  // const randomPlayerTitle = document.getElementById("random-player-title");

  randomPlayer.classList.add("floating");
  // list of eligible files to get
  const files = [
    "assets/audio/Battle Loop.ogg",
    "assets/audio/Charging station Loop.ogg",
    "assets/audio/Dark Loop.ogg",
    "assets/audio/Duduk thing.mp3",
    "assets/audio/Fish.wav",
    "assets/audio/GWJ Londolan.mp3",
    "assets/audio/Main loop.ogg",
    "assets/audio/Quirky orchestral Twigs.mp3",
    "assets/audio/Rena Laine.mp3",
    "assets/audio/VGM Lo-Fi Party.mp3"
  ];

  const rerollBtn = document.createElement('button');
  rerollBtn.className = 'reroll-btn';
  // rerollBtn.innerHTML = '🔁︎';
  rerollBtn.innerHTML = "<img src='assets/svg/dice.svg' alt='Reroll' />";
  randomPlayer.insertBefore(rerollBtn, randomPlayer.children[0]);

  rerollBtn.addEventListener("click", () => {
  });

  const playPauseBtn = randomPlayer.querySelector(".play-pause-btn");
  playPauseBtn.addEventListener("click", () => {
    if (!randomPlayer.player.src) {
      rerollBtn.click();
    }
  });

  randomPlayer.player.addEventListener("loadeddata", () => {
    // wait for 0.5s
    randomPlayer.player.currentTime = Math.random() * (randomPlayer.player.duration * 0.6 - randomPlayer.player.duration * 0.2) + randomPlayer.player.duration * 0.2;
    randomPlayer.player.play();

    // randomPlayerTitle.textContent = randomPlayer.player.src.split("/").pop().split(".")[0];
  });


  const fallDownAnim = [
      { transform: "translateY(0px) rotate(0deg)", offset: 0 },
      { transform: "translateY(40px) rotate(10deg)", offset: 0.49 },
      { transform: "translateY(-40px) rotate(0deg)", offset: 0.50 },
      { transform: "translateY(0px) rotate(0deg)", offset: 1 }
  ];

  const shakeAnim = [ // replicate shake above
      { transform: "translate(1px, 1px) rotate(0deg)", offset: 0 },
      { transform: "translate(-1px, -2px) rotate(-1deg)", offset: 0.1 },
      { transform: "translate(-3px, 0px) rotate(1deg)", offset: 0.2 },
      { transform: "translate(3px, 2px) rotate(0deg)", offset: 0.3 },
      { transform: "translate(1px, -1px) rotate(1deg)", offset: 0.4 },
      { transform: "translate(-1px, 2px) rotate(-1deg)", offset: 0.5 },
      { transform: "translate(-3px, 1px) rotate(0deg)", offset: 0.6 },
      { transform: "translate(3px, 1px) rotate(-1deg)", offset: 0.7 },
      { transform: "translate(-1px, -1px) rotate(1deg)", offset: 0.8 },
  ]

  const shakeAnim2 = [ // shorter shake
      { transform: "translate(1px, 1px) rotate(0deg)", offset: 0 },
      { transform: "translate(-1px, -2px) rotate(-1deg)", offset: 0.2 },
      { transform: "translate(1px, 2px) rotate(0deg)", offset: 0.4 },
      { transform: "translate(-1px, -1px) rotate(1deg)", offset: 0.6 },
      { transform: "translate(1px, 1px) rotate(0deg)", offset: 0.8 },
  ]

  // randomPlayer.querySelector(".seek-bar").animate( fallDownAnim,
  //   { duration: 300, iterations: 1, direction: "alternate" }
  // );
  const seekbar = randomPlayer.querySelector(".seek-bar");
  rerollBtn.addEventListener("click", () => {
    randomPlayer.animate( shakeAnim, { duration: 200, iterations: 2, direction: "alternate" });
    rerollBtn.animate( shakeAnim, { duration: 200, iterations: 2, direction: "reverse" });
    setTimeout(() => seekbar.animate( fallDownAnim, { duration: 300, iterations: 1, direction: "alternate" }), 300);
    setTimeout(() => {

      const randomFile = files[Math.floor(Math.random() * files.length)];
      if (randomPlayer.player.src === randomFile) {
        rerollBtn.click();
      }
      randomPlayer.player.src = randomFile;
    }, 450);
  })
});
