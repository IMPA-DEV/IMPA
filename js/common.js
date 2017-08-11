$(function() {

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
            $( "#popup-form" ).slideUp( "slow", function() { });
            $( "#popup-thanks" ).slideDown( "slow", function() { });
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


    $('.close-button').click(function(){
        //$('#popup-form,#popup-thanks').hide();
        //$( "#popup-form,#popup-thanks,#popup-sucdetails" ).slideUp( "slow", function() { });
        $('#popup-form .popup,#popup-thanks .popup,#popup-sucdetails .popup').animateCss('zoomOut');
        $('#popup-form,#popup-thanks,#popup-sucdetails').fadeOut("500");
        setTimeout(function(){
            $('#popup-form .popup,#popup-thanks .popup,#popup-sucdetails .popup').removeClass('zoomOut');
        }, 500);



    });

    $('a[href="#free"]').click(function(){
        //jQuery("#popup-form").show();
        $('#popup-sucdetails').hide();
        $('#popup-form').fadeIn("500");
        $('#popup-form .popup').animateCss('zoomIn');


    });

    $('a[href="#succ-details"]').click(function(){
        $('#popup-sucdetails').fadeIn("500");
        $('#popup-sucdetails .popup').animateCss('zoomIn');
    });

    $('#navigation').click(function () {
       /* $(".nav").slideToggle({
            start: function () {
                $(this).css({
                    display: "flex"
                })
            }
        });*/
        $( ".nav" ).slideToggle( "slow", function() { });
        $( ".top-line" ).toggleClass('closed').toggleClass("open");



    });

	if($( window ).width()<993) {
        $('.reviews-row,.blocks').slick({
            infinite: true,
            arrows:false,
            dots: true
        });
    }
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});
