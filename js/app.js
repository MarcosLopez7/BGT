/**
 * Created by marcoslopez7 on 14/01/17.
 */


$(window).scroll(function () {
    var $scrollPosition = $(window).scrollTop();
    var $nav = $('nav');
    var $imageBT = $('div.crop-img img');
    
    var max = 150;
    var px = 54;

    if ($scrollPosition > max){
        $nav.addClass("navbar-fixed-top");
        //$imageBT.css("height", ($imageBT.height() + px)+ "px");
    } else {
        $nav.removeClass("navbar-fixed-top");
        //$imageBT.css("height", ($imageBT.height() + px) + "px");
    }
});