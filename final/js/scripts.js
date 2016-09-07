$(document).ready(function() {
  $('.stage_1_submit a').on('click', function() {
    $('.stage_2').slideDown('slow');
    $('.stage_1_submit a').attr('disabled','disabled');
  });

  $('.stage_2_submit a').on('click', function() {
    $('.stage_3').slideDown('slow');
    $('.stage_2_submit a').attr('disabled','disabled');
  });

  $('.stage_3_submit a').on('click', function() {
    alert();
  });

  $(".datepicker1").datepicker({minDate:0});
  $(".datepicker2").datepicker({minDate:+1});

  $('.room_1_more').on('click', function() {
    if ($('.room_more_1').is(':hidden')) {
      $('.room_more_1').slideDown('slow');
      $('.room_1_more').text('свернуть');
    } else {
      $('.room_more_1').slideUp('slow');
      $('.room_1_more').text('подробнее');
    }
  });

  $('.room_2_more').on('click', function() {
    if ($('.room_more_2').is(':hidden')) {
      $('.room_more_2').slideDown('slow');
      $('.room_2_more').text('свернуть');
    } else {
      $('.room_more_2').slideUp('slow');
      $('.room_2_more').text('подробнее');
    }
  });

  $('.room_accept_1').on('click', function() {
    $('.stage_3').slideDown('slow');
    $('.room_accept_1').attr('disabled','disabled');
  });

  $('.room_accept_2').on('click', function() {
    $('.stage_3').slideDown('slow');
    $('.room_accept_2').attr('disabled','disabled');
  });
});
