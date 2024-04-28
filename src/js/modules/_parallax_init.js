export function parallaxInit(params) {
  var mainSceneAuto = document.getElementById("man-scene");
  var parallax = new Parallax(mainSceneAuto, {
    hoverOnly: true,
    relativeInput: true,
  });
}
