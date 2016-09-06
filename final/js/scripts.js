$(document).ready(function() {
  $('.stage_1_submit').on('click', function() {
    $('.room_desc').slideDown('slow');
    $('.stage_1_submit a').attr('disabled','disabled');
  });

  $('.stage_2_submit').on('click', function() {
    $('.others').slideDown('slow');
    $('.stage_2_submit a').attr('disabled','disabled');
  });

  $('.stage_3_submit').on('click', function() {
    alert();
  });

  $(".datepicker1").datepicker({minDate:0});
  $(".datepicker2").datepicker({minDate:+1});
});
