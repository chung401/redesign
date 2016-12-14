      
      /* HOME PAGE  */


      /* LINE 1 */


$(document).ready(function() {
	var phrases = [

	"<div id='click_devour'> <span class='blue'>Devour</span> <span class='red'>Me</span></div>", 
	"<div id='click_gun'> <span class='red'>Towards</span> <span class='green'>His</span> <span class='blue'> Gun</span></div>", 
	
	];

	document.getElementById("line1").innerHTML = phrases [Math.floor(Math.random() * phrases.length)];

	$("#click_devour").click(function() {
		$("#devour_me").fadeIn();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#click_gun").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").fadeIn();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#line1").delay(500).fadeIn("slow");

});

      /* LINE 2 */


$(document).ready(function() {
	var phrases = [

	"<div id='click_sleeplessly'> <span class='green'>Sleep</span><span class='blue'>less</span><span class='red'>ly</span></div>", 
	"<div id='click_tralala'> <span class='red'>Tra</span><span class='green'>la</span><span class='blue'>la</span></div>", 
	
	];

	document.getElementById("line2").innerHTML = phrases [Math.floor(Math.random() * phrases.length)];

	$("#click_sleeplessly").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").hide();
		$("#sleeplessly").fadeIn();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#click_tralala").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").fadeIn();
		$("html, body").animate({ scrollTop: 0 }, 0);
	});

	$("#line2").delay(1000).fadeIn("slow");

});

      /* LINE 3 */


$(document).ready(function() {
	var phrases = [

	"<div id='click_estocada'> <span class='blue'>Esto</span><span class='green'>cada</span></div>", 
	"<div id='click_three_points'> <span class='blue'>Three</span> <span class='red'>Points</span></div>", 
	
	];

	document.getElementById("line3").innerHTML = phrases [Math.floor(Math.random() * phrases.length)];

	$("#click_estocada").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#three_points").hide();
		$("#estocada").fadeIn();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);
	});

	$("#click_three_points").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").fadeIn();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#line3").delay(1500).fadeIn("slow");

});

      /* LINE 4 */


$(document).ready(function() {
	var phrases = [

	"<div id='click_love_you_so'> <span class='red'>Love</span> <span class='green'>You</span> <span class='blue'>so</span></div>", 
	"<div id='click_M_O_N'> <span class='red'>M</span>-<span class='green'>O</span>-<span class='blue'>N</span></div>", 
	
	];

	document.getElementById("line4").innerHTML = phrases [Math.floor(Math.random() * phrases.length)];

	$("#click_love_you_so").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").fadeIn("slow");
		$("#M_O_N").hide();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#click_M_O_N").click(function() {
		$("#devour_me").hide();
		$("#love_you_so").hide();
		$("#M_O_N").fadeIn();
		$("#estocada").hide();
		$("#three_points").hide();
		$("#towards_his_gun").hide();
		$("#sleeplessly").hide();
		$("#tralala").hide();
		$("html, body").animate({ scrollTop: 0 }, 0);

	});

	$("#line4").delay(2000).fadeIn("slow");

});



            /* ABOUT PAGE  */


