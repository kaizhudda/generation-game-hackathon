// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

!function ($) {

  $(function(){

    var $window = $(window);

    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix();
    }, 100);

    // make code pretty
    window.prettyPrint && prettyPrint();

  });
  
	if (window.location.href.indexOf("theme-sphere.com") == -1) {
		$('.about-online').show();
	}

	$('.nav a,a.moveit').on('click', function(event) {   
        event.preventDefault();
		var target = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);   
return false
});
}(window.jQuery);