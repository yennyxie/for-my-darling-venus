const passwordInput = document.getElementById("password");
const nicknameInput = document.getElementById("nickname");
const music = document.getElementById("music");
const playBtn = document.getElementById("play-music");

// PASSWORD
passwordInput.addEventListener("input", () => {
  if (passwordInput.value === "0922") {
    document.getElementById("lock-screen").classList.add("hidden");
    document.getElementById("envelope-screen").classList.remove("hidden");
  }
});

// NICKNAME
nicknameInput.addEventListener("input", () => {
  if (nicknameInput.value.toLowerCase() === "collie") {
    document.getElementById("envelope-screen").classList.add("hidden");
    document.getElementById("letter-screen").classList.remove("hidden");
  }
});

// MUSIC BOX
playBtn.addEventListener("click", () => {
  music.play();
});
