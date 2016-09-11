$(document).ready(function (){

  var hotel;
  var room;
  var count;

  $('#id1 button').on('click', function (){
    hotel = $('td[name="hotel_name1"]').text();
    $('.hotel_name').removeClass('show');
    $('.rooms').removeClass('hide');
    $('.hotel_name').addClass('hide');
    $('.rooms').addClass('show');
  });

  $('#id2 button').on('click', function (){
    hotel = $('td[name="hotel_name2"]').text();
    $('.hotel_name').removeClass('show');
    $('.rooms').removeClass('hide');
    $('.hotel_name').addClass('hide');
    $('.rooms').addClass('show');
  });

  $('#id3 button').on('click', function (){
    hotel = $('td[name="hotel_name3"]').text();
    $('.hotel_name').removeClass('show');
    $('.rooms').removeClass('hide');
    $('.hotel_name').addClass('hide');
    $('.rooms').addClass('show');
  });

  $('#cl1 button').on('click', function (){
    count = $('#cl1 input').val();
    if (count == 0 || count == null) {
      alert('Введите количество жильцов');
    } else {
      room = $('.cl1_name').text();
      $('.rooms').removeClass('show');
      $('.rooms').addClass('hide');
      $('.other').removeClass('hide');
      $('.other').addClass('show');
    }
  });

  $('#cl2 button').on('click', function (){
    count = $('#cl2 input').val();
    if (count == 0 || count == null) {
      alert('Введите количество жильцов');
    } else {
      room = $('.cl2_name').text();
      $('.rooms').removeClass('show');
      $('.rooms').addClass('hide');
      $('.other').removeClass('hide');
      $('.other').addClass('show');
    }
  });

  $('#cl3 button').on('click', function (){
    count = $('#cl3 input').val();
    if (count == 0 || count == null) {
      alert('Введите количество жильцов');
    } else {
      room = $('.cl3_name').text();
      $('.rooms').removeClass('show');
      $('.rooms').addClass('hide');
      $('.other').removeClass('hide');
      $('.other').addClass('show');
    }
  });

  $('.other button').on('click', function (){
    alert('Ваш отель: ' + hotel + '\nВаш номер: ' + room + '\nКол-во человек: ' + count);
  });
});
