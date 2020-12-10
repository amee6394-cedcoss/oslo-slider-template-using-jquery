        $(document).ready(function () {
            var x = 0;

            //**********Automatic silder*************** */
            setInterval(function(){
                x = (x <= 300) ? (x + 100) : 0;
                $('figure').css('left', -x + '%');
            },4000);


        //**************next button***************** */
            $('.btn-next').click(function () {

                x = (x <= 300) ? (x + 100) : 0;
                $('figure').css('left', -x + '%');
            });
        //******************prev button***********************/
            $('.btn-prev').click(function () {

                x = (x >= 100) ? (x - 100) : 400;
                $('figure').css('left', -x + '%');
            });


        //******************first dot*****************************/
            $(".dot").on("click", function () {

                x = 0;
                $('figure').css('left', -x + '%');
            });
        //******************second dot*****************************/

            $(".dot2").on("click", function () {
                x = 100;
                $('figure').css('left', -x + '%');
            });
        //******************third dot**************************** */

            $(".dot3").on("click", function () {
                x = 200;
                $('figure').css('left', -x + '%');
            });

        //******************fourth dot**************************** */

            $(".dot4").on("click", function () {
                x = 300;
                $('figure').css('left', -x + '%');
            });

        //******************fifth dot**************************** */

            $(".dot5").on("click", function () {
                x = 400;
                $('figure').css('left', -x + '%');
            });
        });