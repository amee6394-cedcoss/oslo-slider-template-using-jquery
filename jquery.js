
$(document).ready(function () {
    var x = 0;
    $('.btn-next').click(function () {

        x = (x <= 300) ? (x + 100) : 0;
        $('figure').css('left', -x + '%');
    });
    $('.btn-prev').click(function () {

        x = (x >= 100) ? (x - 100) : 400;
        $('figure').css('left', -x + '%');
    });



    $(".dot").on("click", function () {

        x = 0;
        $('figure').css('left', -x + '%');
    });

    $(".dot2").on("click", function () {
        x = 100;
        $('figure').css('left', -x + '%');
    });
    $(".dot3").on("click", function () {
        x = 200;
        $('figure').css('left', -x + '%');
    });
    $(".dot4").on("click", function () {
        x = 300;
        $('figure').css('left', -x + '%');
    });
    $(".dot5").on("click", function () {
        x = 400;
        $('figure').css('left', -x + '%');
    });
});
