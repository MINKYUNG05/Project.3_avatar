
// menu
$(document).ready(function () {
    $(".menu_icon").click(function () {
        $(this).toggleClass("active")
        $('.header_menu').toggleClass('right');
    });

    $('.footer_menu_wrap').hide();
    $(".menu_button").click(function () {
        $('.close').toggleClass("none")
        $('.open').toggleClass("none")
        $('.footer_menu_wrap').stop().slideToggle();
    });
});



//아바타움직임
$(function(){
    $('#chater1').click(function(){
        $('#textbox').slideToggle("slow");
		$('#textbox2').hide("slow");
        });
    });

$(function(){
	$('#chater2').click(function(){
		$('#textbox').hide("slow");
		$('#textbox2').slideToggle("slow");
		});
	});

