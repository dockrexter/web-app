$(document).ready(function () {
        // body...
        $('#foot').load('header_footer/footer.html');
        $('#nav').load('header_footer/navbar.html');
        $('.list-group-item').mouseenter(function (){
          $(this).find('ul').show();
        });
        $('.list-group-item').mouseleave(function (){
          $(this).find('ul').hide();
        });
      });