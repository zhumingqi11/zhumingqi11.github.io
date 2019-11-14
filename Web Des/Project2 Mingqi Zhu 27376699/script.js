$(document).ready(function() {

	// create variable for data info
	$bl = bodylanguage;

	// retrieve info
	$($bl).each(function(index, value){
		$name = $bl[index].Name;
		$image = $bl[index].Image;

		// create a container for each item in the array
		$('.flex').append('<div class="body-item"><img src="image/' + $image + '"><h4 class="description">' + $name + '</h4></div>');
	});

	$m = meows;

	$($m).each(function(index,html){
		$meow = $m[index].Meow;
		$d = $m[index].Description;
        

		$('#tab-3').append('<button class="accordion">' + $meow +'</button>');
		$('#tab-3').append('<div class="panel"><p>' + $d +'</p></div>');

	});

	// script for tabs
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	});

	(function($){
		var allPenels = $('.body > .body-item').hide();

		$('.body > dt > .nav-item').click(function(){
			$this = $(this);
			$target = $this.parent().next();

			if(!$target.hasClass('active')){
				allPenels.removeClass('active').slideUp();
				$target.addClass('active').slideDown();
			}
			return false;
		});
	});

	// script for accordian
	var accordions = document.querySelectorAll("button.accordion");
	for (var i = 0; i < accordions.length; i++) {
		accordions[i].onclick = function(){
			this.classList.toggle("active");
			this.nextElementSibling.classList.toggle("show");
		};
	};

});