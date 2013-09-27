$(document).ready(function() {

	// Datepicker

	$('.selectDate').datepicker({ dateFormat: 'DD, M dd'}).val($.datepicker.formatDate('DD, M dd', new Date()));

    // Form Actions

    $.fn.savedChanges = function(){
		$(this).html('<i class="icon-ok"></i> Changes Saved').css('background-color','#1bb9b5');
	};

    function btnOriginal(){
    	var btnOrig = $('.btn-save');
    	btnOrig.html('Save Changes').css('background-color','#0069a0');
    }

	$('.btn-save').click(function(){
		$(this).savedChanges();
	});

	$('form').on('input', btnOriginal);
	$('select, checkbox, radio, .selectDate').change(btnOriginal);

	// Smooth Scroll

	$('a[href^="#"]').bind('click.smoothscroll',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	        $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - -0
	    }, 500, 'swing', function () {
	        window.location.hash = target;
	    });
	});

	// Sticky menu

	var nav = $('.left-panel-user');
	var left_panel = $('.left-panel');
	var score_panel = $('.user-score');

	nav.waypoint({
		handler: function(direction) {

    		if (direction == 'down'){
    			nav.addClass('sticky');
    			left_panel.css({ 'height' : nav.outerHeight() });
    			score_panel.slideUp();
    		} else {
    			nav.removeClass('sticky');
    			left_panel.css({ 'height' : 'auto' });
    			score_panel.slideDown();
    		}
    		
		}
	});

	var sections = $('section');
  	var navigation_links = $('.user-nav li a');

	sections.waypoint({
		handler: function(direction) {
		
		var active_section;
		active_section = $(this);
		
		if (direction === "up") active_section = active_section.prev();

		var active_link = $('.user-nav li a[href="#' + active_section.attr("id") + '"]');

		navigation_links.removeClass("selected");
		active_link.addClass("selected");

		},
		offset: '35%'
	});

});