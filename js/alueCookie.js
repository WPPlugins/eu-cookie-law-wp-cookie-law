/**
	Simple Cookie Prompt
	Idea: @panda_doodle - Coded: @michaelw90
**/
var alue_cookie = {

	doClick: function(){
		document.cookie = "aleu_useCookies=set; path=/; expires=" + (new Date()).toGMTString().replace(/\d{4}/, '2050');
		location.reload(true);
	}
};