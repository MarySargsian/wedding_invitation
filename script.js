document.addEventListener("DOMContentLoaded", () => {
  const stage = document.getElementById("stage");
  const opened = document.getElementById("opened");
  const letter = document.getElementById("letter");

  // Entire stage (envelope) is clickable
  stage.addEventListener("click", () => {
    // Hide closed envelope
    stage.classList.add("hidden");

    // Show opened envelope GIF
    opened.classList.remove("hidden");

    // Wait for GIF duration, then show the letter
    setTimeout(() => {
      opened.classList.add("hidden");
      letter.classList.remove("hidden");

      // Scroll to top of letter section
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 3000); // Adjust duration to match your gif
  });
});
