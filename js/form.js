$(document).ready(function () {
$("#dateinput").datepicker({
          minDate: new Date(2001, 6, 19),
          maxDate: new Date(2019, 0, 1),
          changeYear:true,
          changeMonth:true
        });
        $("input").focus(function(){
          $(this).css('background','pink');
        });
        $("input").blur(function(){
          $(this).css('background','white');
        });
});