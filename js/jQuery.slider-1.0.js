(function( $ ) {
  $.fn.wpCookieSlider = function(options) {
  
    // New - you don't have to specify options!
    options = options || {};

	// Default awesomeness
    var defaults = {
      bgColour: '#ffffff',         // The directory we're in
      fontColour: '#333333',           // change me to "right" if you want rightness
	  borderColour: '#e7e7e7',
      imgLocation: 'privacy-image.png' ,       // If this is set to true, the fold will curl/uncurl on mouseover/mouseout.
	  headerTxt: 'Opting out or refusing to accept cookies may cause this website to function incorrectly.',
	  subHeaderTxt: 'This is due to the EU cookie law that is being inforced by May 26th 2012.<br/>Cookies are used to store general information that let web 2.0 sites function.',
	  redirectUrl: 'http://www.wpcookielaw.com/cookie-privacy',
	  poweredBy: '<a href=\"http://www.wpcookielaw.com/\" title=\"Powered By WP Cookie Law\" target=\"_blank\">Powered By WP Cookie Law</a>'
    };

	// Merge options with the defaults
    var options = $.extend(defaults, options);

	addSlider = function(){
		//color: #91a44d; border-color: #c2d288; background-color: #e3ebc6; padding: 10px 10px 10px 40px;'
		//<b><a id=\"powered-by\" href=\"http://www.wpcookielaw.com/\" title=\"Powered By WP Cookie Law\" target=\"_blank\">Powered By WP Cookie Law</a></b>
		$("body").prepend("<div id='sl-container' style='display: block; font-family: sans-serif; font-size: 11px; border: solid 1px; color: "+options.fontColour+";  background-color: "+options.bgColour+"; border-color: "+options.borderColour+"; padding: 6px 10px 10px 40px;'/>");
		$("#sl-container").append("<div id='sl-centre'/>");
		$("#sl-centre").append("<div id='sl-imgDiv' style='float: left;'/>");
		$("#sl-imgDiv").append("<img src='"+options.imgLocation+"' alt='' />");
		$("#sl-centre").append("<div id='sl-content' style='float: left; width: 50%; font-family: \"Trebuchet MS\",\"Lucida Sans Unicode\",\"Lucida Grande\",\"Lucida Sans\",Arial,sans-serif; font-size: 14px; font-weight: normal; margin-left: 25px;'/>");
		$("#sl-content").append("<p style=' margin: 10px 0 0;'><b>"+options.headerTxt+"</b></p><p style=' margin: 10px 0 0; font-size: 11px;'>"+options.subHeaderTxt+"</p>");
		$("#sl-centre").append("<div id='sl-buttons' style='float: right;'/>");
		$("#sl-buttons").append("<p style='margin: 10px 0 0; margin-left: 25px; text-align: right;'>"+"<a class=\"wp-cookie-button green\" style='color: #ffffff; font-weight: bold; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.6);' onclick=\"alue_cookie.doClick();\" title=\"Click To Continue\">Click To Continue</a><br/><a style='padding-right: 30px; font-size: 13px;' href=\""+options.redirectUrl+"\" title=\"More on cookies\">More on cookies</a></p>");
		$("#sl-centre").append("<div style='clear: both;'></div>");
		$("#sl-centre").append("<span style='font-size: 10px;'>"+options.poweredBy+"<span>");
	}

	addSlider();

  };
})( jQuery );