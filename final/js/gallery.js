$(document).ready(function(){
  $(".gallery-mini img:first").addClass('active');

  $(".gallery-mini li a").click(function(){
    $(".gallery-view img").hide().attr({
        "src": $(this).attr("href"),
        "title": $("> img", this).attr("title"),
        "class": ".active"
    });

    return false;
  });

  $(".gallery-view>img").load(function(){
    $(".gallery-view>img:hidden").fadeIn("slow");
  });

  $(".gallery-mini img").on('click', function() {
    $('.active').removeClass('active');
    $(this).addClass('active');
  });
});
