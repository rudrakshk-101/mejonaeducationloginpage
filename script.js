var $loginMsg = $('.loginMsg'),
  $login = $('.login'),
  $signupMsg = $('.signupMsg'),
  $signup = $('.signup'),
  $frontbox = $('.frontbox'),
  $bod = $('body'),
  $lines = $('.lines'),
  $glowing = $('.backroundEffect');

$('#switch1').on('click', function() {
  $loginMsg.toggleClass("visibility");
  $frontbox.addClass("moving");
  $bod.css('background-image', 'url("/office-supplies.jpg")');
  $signupMsg.toggleClass("visibility");
  $signup.toggleClass('hide');
  $login.toggleClass('hide');
  $lines.toggleClass('hide');
  $glowing.toggleClass('hide');
})

$('#switch2').on('click', function() {
    $loginMsg.toggleClass("visibility");
    $frontbox.removeClass("moving");
    $signupMsg.toggleClass("visibility");
    $bod.css('background-image', 'url("/workplace-with-blue-office-supplies.jpg")');
  $signup.toggleClass('hide');
  $login.toggleClass('hide');
  $lines.toggleClass('hide');
  $glowing.toggleClass('hide');
})

setTimeout(function(){
  $('#switch1').click()
},1000)

setTimeout(function(){
  $('#switch2').click()
},3000)