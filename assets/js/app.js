function meow() {
var meowSound = $("#meow")[0];
$(".coder img:hover")
	.mouseenter(function() {
		meowSound.pause();
		meowSound.play();
	});
}