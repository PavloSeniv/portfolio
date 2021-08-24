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
      if (entry.intersectionRatio >= 0.4) {
        runAnimtion();
        observer.disconnect();
      }
      if (entry.isIntersecting){
        runAnimtion();
        observer.disconnect();
      }
    });
  },
  {
    threshold: 0.4,
  }
);

observer.observe(document.querySelector(".about-me"));

let progresSkillsHtml = document.querySelector("#progres__html");
let progresSkillsCss = document.querySelector("#progres__css");
let progresSkillsJs = document.querySelector("#progres__js");

var animateProgresHtml = anime({
  targets: progresSkillsHtml,
  value: 70,
  easing: "linear",
  autoplay: false,
  round: 1,
});

var animateProgresCss = anime({
  targets: progresSkillsCss,
  value: 60,
  easing: "linear",
  autoplay: false,
  round: 1,
});

var animateProgresJs = anime({
  targets: progresSkillsJs,
  value: 40,
  easing: "linear",
  autoplay: false,
  round: 1,
});

/* Запуск анімації по кліку на кнопку*/
document
  .querySelector("#spoiler-skills__button-1")
  .addEventListener("click", function (e) {
    e.preventDefault();
    animateProgresHtml.restart();
    animateProgresCss.restart();
    animateProgresJs.restart();
  });

let progresSkillsFigma = document.querySelector("#progres__figma");
let progresSkillsPsd = document.querySelector("#progres__psd");

var animateProgresFigma = anime({
  targets: progresSkillsFigma,
  value: 65,
  easing: "linear",
  autoplay: false,
  round: 1,
});

var animateProgresPsd = anime({
  targets: progresSkillsPsd,
  value: 30,
  easing: "linear",
  autoplay: false,
  round: 1,
});

/* Запуск анімації по кліку на кнопку*/
document
  .querySelector("#spoiler-skills__button-2")
  .addEventListener("click", function (e) {
    e.preventDefault();
    animateProgresFigma.restart();
    animateProgresPsd.restart();
  });

let progresSkillsPhp = document.querySelector("#progres__php");
let progresSkillsModeJs = document.querySelector("#progres__node-js");

var animateProgresPhp = anime({
  targets: progresSkillsPhp,
  value: 30,
  easing: "linear",
  autoplay: false,
  round: 1,
});

var animateProgresNodeJs = anime({
  targets: progresSkillsModeJs,
  value: 10,
  easing: "linear",
  autoplay: false,
  round: 1,
});

/* Запуск анімації по кліку на кнопку*/
document
  .querySelector("#spoiler-skills__button-3")
  .addEventListener("click", function (e) {
    e.preventDefault();
    animateProgresPhp.restart();
    animateProgresNodeJs.restart();
  });
