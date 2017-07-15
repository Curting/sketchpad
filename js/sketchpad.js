$(document).ready(function() {
	makeSquares();

	$("#clear").click(function() {
		clear();
		var squareNum = prompt("Please enter new number of squares per row:")
		makeSquares(squareNum);
	});
});

function makeSquares(n = 16) {
	for (var i = 0; i < n*n; i++) {
		$(".wrapper").append("<div class='square'></div>"); 
	};
	$(".square").css("height", 800 / n);
	$(".square").css("width", 800 / n);

	$(".square").hover(function() {
		$(this).addClass("color");
	});
};

function clear() {
	$(".square").remove();
}