function random(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
};

setTimeout(function() {
	document.querySelector('progress').value = random(10, 100);
}, 1000);