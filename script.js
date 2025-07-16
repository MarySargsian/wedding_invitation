const envelope = document.getElementById("envelope");

envelope.addEventListener("click", () => {
  const music = document.getElementById("bg-music");
  music.play().catch(e => console.log("Autoplay blocked"));

  document.getElementById("stage").classList.add("hidden");
  const opened = document.getElementById("opened-envelope");
  opened.classList.remove("hidden");

  setTimeout(() => {
    opened.classList.add("hidden");
    document.getElementById("letter-container").classList.remove("hidden");
  }, 2500); // Adjust this if your GIF lasts longer/shorter
});
