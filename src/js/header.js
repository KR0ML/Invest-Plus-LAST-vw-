$(document).ready(function(){
	$("#menu").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top-85;
		$('body,html').animate({scrollTop: top}, 700);
	});
});

$(document).ready(function(){
	$("#more").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top-85;
		$('body,html').animate({scrollTop: top}, 700);
	});
});