




(function(s){
    $(document).ready(function(){

    $(function() {

        $('#slider').slider({
            range: "min",
            animate: true,
            min: 1000, 
            max: 30000, 
            step: 1000, 
            value: 1000, 
            create: setInputsFromSlider,
            slide: setInputsFromSlider,
            stop: setInputsFromSlider
        })

        function setInputsFromSlider() {
            $('#slideVal').val($('#slider').slider("value"));


        }


        $('#slider2').slider({
            range: "min",
            animate: true,
            min: 1, 
            max: 30,
            step: 1, 
            value: 1, 
            create: setInputsFromSlider2,
            slide: setInputsFromSlider2,
            stop: setInputsFromSlider2
        });

        function setInputsFromSlider2() {
            $('#slideVal2').val($('#slider2').slider("value"));

        }



        $('input').change(function(e) {
            switch (this.id) {

                case "slideVal":
                    $('#slider').slider("value", $(this).val())
                    break;


                case "slideVal2":
                    $('#slider2').slider("value", $(this).val())
                    break;
            }
        })


    })



    $('input,select').styler({
 });


    $(".text_hide").hide();

    $('.pers_dan').click(function(){
        $(".text_hide").slideToggle(500);
        return false
    });




    });

})(jQuery);

