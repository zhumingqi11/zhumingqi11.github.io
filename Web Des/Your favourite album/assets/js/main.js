$(document).ready(function () {
	

	
 
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

   	$('.modal-container').hide();
	  $('.info-container').hide();
	

    $('.img-container').click(function(){


      $number = $(this).attr('data-id');
      
      //data to var album
      $album = data[$number];
      //var for each secton
      $name = $album.name;
      $ct = $album.country;
      $g = $album.grene;
      $info = $album.info;
      $spotify = $album.spotify;
      $img = $album.images;

      $('.music').append('<div class="musicplayer"><iframe class="pop-content" src="https://open.spotify.com/embed/album/'+ $spotify + '"&view=coverart width="100%" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>');
      
      $('.name').text($name);
      $('.grene').text($g);
      $('.country').text($ct);
      $('.para').text($info);
      $('.pic').append('<img class="pics img-responsive-height" src="assets/images/'+ $img +'">');

	 // open window
		$('.modal-container').show();
		$('.info-container').show();
		});

	// click outside info box to close window
	$('.modal-container').click(function(){ 
		$('.modal-container').hide(); 
		$('.info-container').hide();
		$('.musicplayer').remove();
		$('.pics').remove();

		
	});




});


