document.getElementById("open-btn").addEventListener("click", () => {
  // Start music
  const music = document.getElementById("bg-music");
  music.play().catch(e => {
    console.log("Autoplay failed:", e);
  });

  // Hide envelope stage
  document.getElementById("stage").classList.add("hidden");

  // Show opened envelope gif
  const opened = document.getElementById("opened-envelope");
  opened.classList.remove("hidden");

  // After GIF shows for 2.5s, show the sliding letter
  setTimeout(() => {
    opened.classList.add("hidden");
    document.getElementById("letter-container").classList.remove("hidden");
  }, 2500);
});
