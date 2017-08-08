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
			alert("Thank you!");
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
        $( "#popup-form,#popup-thanks,#popup-sucdetails" ).slideUp( "slow", function() { });
    });

    $('a[href="#free"]').click(function(){
        //jQuery("#popup-form").show();
        $( "#popup-form" ).slideDown( "slow", function() { });
    });

    $('a[href="#succ-details"]').click(function(){
        $( "#popup-sucdetails" ).slideDown( "slow", function() { });
    });

});
