$(jQuery).ready(function($){

    $('#name .more').on('click', function(){
        if ($(this).children().eq(0).text() === "More") {
            $(this).children().eq(0).empty();
            $(this).children().eq(0).append("<h3>Less</h3>");
          }else {
            $(this).children().eq(0).empty();
            $(this).children().eq(0).append("<h3>More</h3>");
          }
        $('#drop-down').slideToggle();

    })


    var checkFirst = true;
    $('#name .update').on('click', function(){
      checkFirst = !checkFirst;
        if(checkFirst){
            $('#name .input-box').fadeIn();
            $('#name h1').css("display", "none");
            $(this).empty();
            $(this).append('<h3>Close</h3>');
        }else{
            $('#name .input-box').css("display", "none");
            $('#name h1').fadeIn();
            $(this).empty();
            $(this).append('<h3>Update</h3>');
        }
    })

    $('#drop-down .update').click(function () {
        if ($(this).children().eq(0).text() === "Update") {
          $(this).children().eq(0).empty();
          $(this).children().eq(0).append("<h3>Close</h3>");
        }else if($(this).children().eq(0).text() === "Close") {
          $(this).children().eq(0).empty();
          $(this).children().eq(0).append("<h3>Update</h3>");
        }
        var $this = $(this);
    
        var clickCount = ($this.data("click-count") || 0) + 1;
        if (clickCount === 3) {
          clickCount = 1;
        }
        $this.data("click-count", clickCount);
        if (clickCount == 1) {
          $(this).parent().parent().children().eq(0).children().eq(1).css("display","block");
          $(this).parent().parent().children().eq(0).children().eq(0).css("display","none");
        }else {
          $(this).parent().parent().children().eq(0).children().eq(1).css("display","none");
          $(this).parent().parent().children().eq(0).children().eq(0).css("display","block");
        }
      })

      var checkSecond = true;
      $('#insert i').on('click', function(){
          $('#drop-down-insert').slideToggle();
          if (checkSecond) {
            $(this).css({
            "-webkit-transform": "rotate(180deg)",
            "-moz-transform": "rotate(180deg)",
            "transform": "rotate(180deg)" /* For modern browsers(CSS3)  */
           });
         }else {
            $(this).css({
           "-webkit-transform": "rotate(360deg)",
           "-moz-transform": "rotate(360deg)",
           "transform": "rotate(360deg)" /* For modern browsers(CSS3)  */
          });
        }
        checkSecond = !checkSecond;
      })
      
})