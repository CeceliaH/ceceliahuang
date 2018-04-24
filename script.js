$(document).ready(function(){

$(".projectnav-item").click(function(){ //jQuery Function #1

	let buttonName = $(this).text(); //jQuery Function #2
	let buttonActive = $(this).hasClass("active"); //jQuery Function #3
	let condition = !buttonActive;

	if (condition == true) {
			$(this).addClass("active"); //jQuery Function #4
			$(this).removeClass("inactive"); //jQuery Function #5
			$("." + buttonName).show(); //jQuery Function #6

	} else {
			$(this).addClass("inactive");
			$(this).removeClass("active");
			$("." + buttonName).hide(); //jQuery Function #7
		}

})





})