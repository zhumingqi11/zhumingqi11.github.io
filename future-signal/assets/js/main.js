$(document).ready(function(){
    console.log("I'm ready!");

    $('.research-item').click(function(){
    	$(this).toggleClass('large');
    });

    $('.nav-item').click(function(){
    	$('.nav-item').removeClass('active');
    	$(this).addClass('active');
    });

    $('.btn-all').click(function(){
        $('.research-item').removeClass('hide');
    });

    var hideAll = function(){
        $('.research-item').addClass('hide');
    };

    $('.btn-ai').click(function( ){
    	hideAll();
    	$('.ai').removeClass('hide');

    });

    $('.btn-tracking').click(function(){
    	hideAll();
    	$('.tracking').removeClass('hide');
    });
    $('.btn-brain').click(function(){
    	hideAll();
    	$('.brain').removeClass('hide');
    });
     $('.btn-neurons').click(function(){
    	hideAll();
    	$('.neurons').removeClass('hide');
    });
      $('.btn-machine').click(function(){
    	hideAll();
    	$('.machine').removeClass('hide');
    });
     $('.btn-robot').click(function(){
    	hideAll();
    	$('.robot').removeClass('hide');
    });
     $('.btn-cosmos').click(function(){
    	hideAll();
    	$('.cosmos').removeClass('hide');
    });
     $('.btn-superintelligence').click(function(){
    	hideAll();
    	$('.superintelligence').removeClass('hide');
    });
     $('.btn-humanity').click(function(){
    	hideAll();
    	$('.humanity').removeClass('hide');
    });
     $('.btn-apocalypse').click(function(){
    	hideAll();
    	$('.apocalypse').removeClass('hide');
    });a



    
});