$( document ).ready(function() {
        

        $(".artist-all").on("click", ".accordion", function() {
 			$(this).toggleClass("active").next().slideToggle();
 		});
}); 
