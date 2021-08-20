let progress = document.querySelector("#progress");

let battery = {
  progress: "0%",
};

let icon = anime({
  targets: ".segment",
  width: 20,
  duration: 300,
  delay: anime.stagger(500),
  endDelay: 500,
  easing: "linear",
  loop: true,
});

let label = anime({
  targets: battery,
  progress: "100%",
  duration: 30000,
  easing: "linear",
  round: 1,
  update: function () {
    progress.innerHTML = battery.progress;
  },
  complete: function () {
    icon.pause();
    icon.seek(icon.duration);
  },
});
