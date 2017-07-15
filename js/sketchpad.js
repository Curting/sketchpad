$(document).ready(function() {
	makeSquares(16);

	// New Gridsize
	$("#newSize").click(function() {
		newGrid();
		var squareNum = prompt("Please enter new number of squares per row:")
		makeSquares(squareNum);
		$("button").removeClass("active");
		$(".helpText").css("opacity", 1)
	});

	// Clear
		$("#clearBoard").on('click', function() {
			clear()
		});

	// Solid Color
	$("#solidColor").on('click', function() {
		$("button").removeClass("active");
		$(this).addClass("active");

		$(".helpText").css("opacity", 0)

		var randomColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
		$(".square").on('mouseenter', function() {
			$(this).css("background-color", randomColor);
		});
	});
	

	// Greyscale Color
	$("#greyColor").on('click', function() {
		$(this).toggleClass("active-grey");

		$(".helpText").css("opacity", 0)

		$(".square").toggleClass("greyscale");

		if ($("#greyColor").html() == "Go Grey-Scale") {
			$("#greyColor").html("Back to Color");
		} else {
			$("#greyColor").html("Go Grey-Scale");
		};

		$(".square").on('mouseenter', function() {
			var currentOpacity = $(this).css("opacity");
			// $(this).css("opacity", currentOpacity += 0.1);
		});
	});


	// Rainbow Color
	$("#rainbowColor").on('click', function() {
		$("button").removeClass("active");
		$(this).addClass("active");

		$(".helpText").css("opacity", 0)

		$(".square").on('mouseenter', function() {
			var randomColor = 'rgb(' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ',' + Math.round(Math.random()*255) + ')';
			$(this).css('background-color', randomColor);
		});
	});

});



function makeSquares(n) {
	for (var i = 0; i < n*n; i++) {
		$(".wrapper").append("<div class='square'></div>"); 
	};
	$(".square").css("height", 800 / n);
	$(".square").css("width", 800 / n);
};


function newGrid() {
	$(".square").remove();
}

function clear() {
	$(".square").css("background-color", "#FFFFFF")
}
