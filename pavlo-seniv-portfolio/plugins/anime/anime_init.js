function runAnimtion() {
  let numberOne = document.querySelector("#about-me__number-1");
  let numberTwo = document.querySelector("#about-me__number-2");

  anime({
    targets: numberOne,
    textContent: [0, 1],
    round: 1,
    easing: "linear",
    duration: 1000,
  });

  anime({
    targets: numberTwo,
    textContent: [0, 7],
    round: 1,
    easing: "linear",
    duration: 2000,
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.7) {
        runAnimtion();
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.7,
  }
);

observer.observe(document.querySelector(".about-me"));