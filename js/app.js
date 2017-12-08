
$(function() {
  var bgImages = 9;
  var bgTransition = 3;

  var transitionAdded = false;

  function random(min, max) {
    return  Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  }

  function randomizeBG() {
    // var url = 'http://deelay.me/1000/http://localhost:3000/img/' + random(1,bgImages) + '.jpg';
    var url = '/img/' + random(1,bgImages) + '.jpg';
    $('#image-preloader').attr('src', url).load(function(){
      $('body').css('background-image','url(' +url+ ')');
    });
  }

  function transition() {
    if (!transitionAdded) {
      $('body').css('transition', 'background ' + bgTransition + 's linear');
      transitionAdded = true;
    }
    randomizeBG();
    setTimeout(transition, bgTransition*2000);
  }

  function run() {
    randomizeBG();
    $(window).load(function(){
      document.getElementById('preload').style.display = 'none';
      $('body').addClass('ready');
    });
    setTimeout(transition, bgTransition*2000);
  }

  run();
});


