document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope");
  const opened = document.getElementById("opened");
  const letter = document.getElementById("letter");

  envelope.addEventListener("click", () => {
    envelope.classList.add("hidden");
    opened.classList.remove("hidden");

    // Show letter after 2.5 seconds (adjust to match your GIF length)
    setTimeout(() => {
      opened.classList.add("hidden");
      letter.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 2500);
  });
});
