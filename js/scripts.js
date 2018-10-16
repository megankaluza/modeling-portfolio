//Time and Date Stamp
var MONTH_NAME = ['January', 'Febuary', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];
function showTime() {
    function twoDigit(n) {
        return ('0' + n).slice(-2);
    }
    function iso8601(date) {
        return date.getFullYear() +
               '-' + twoDigit(1 + date.getMonth()) +
               '-' + twoDigit(date.getDate()) +
               'T' + twoDigit(date.getHours()) +
               ':' + twoDigit(date.getMinutes());
    }
    function en_US(date) {
        var h = date.getHours() % 12;
        return MONTH_NAME[date.getMonth()] +
               ' '  + date.getDate() +
               ', ' + date.getFullYear() +
               '<br />' + (h == 0 ? 12 : h) +
               ':'  + twoDigit(date.getMinutes()) +
               ' ' + (date.getHours() < 12 ? 'am' : 'pm');
    }

    var timeEl = document.getElementById('time');
    if (timeEl !== null) {
        var now = new Date();
        timeEl.innerHTML = en_US(now);
        timeDiv.setAttribute('datetime', iso8601(now));
    }
};
setInterval(showTime, 1000);

$(document).ready(function(){
  //Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
  //Open Modal
  $('#open').click(function(){
    $('.one')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  //Exit Modal
  $('.exit').click(function(){
    $('.modal').modal('hide');
  });
  $('#open2').click(function(){
    $('.two')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open3').click(function(){
    $('.three')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open4').click(function(){
    $('.four')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open5').click(function(){
    $('.five')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open6').click(function(){
    $('.six')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open7').click(function(){
    $('.seven')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open8').click(function(){
    $('.eight')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open9').click(function(){
    $('.nine')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open10').click(function(){
    $('.ten')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open11').click(function(){
    $('.eleven')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open12').click(function(){
    $('.twelve')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open13').click(function(){
    $('.thirteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open14').click(function(){
    $('.fourteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open15').click(function(){
    $('.fifteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open16').click(function(){
    $('.sixteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open17').click(function(){
    $('.seventeen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open18').click(function(){
    $('.eighteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open19').click(function(){
    $('.nineteen')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open20').click(function(){
    $('.twenty')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open21').click(function(){
    $('.twentyOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open22').click(function(){
    $('.twentyTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open23').click(function(){
    $('.twentyThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open24').click(function(){
    $('.twentyFour')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open25').click(function(){
    $('.twentyFive')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open26').click(function(){
    $('.twentySix')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open27').click(function(){
    $('.twentySeven')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open28').click(function(){
    $('.twentyEight')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open29').click(function(){
    $('.twentyNine')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open30').click(function(){
    $('.thirty')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open31').click(function(){
    $('.thirtyOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open32').click(function(){
    $('.thirtyTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open33').click(function(){
    $('.thirtyThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open34').click(function(){
    $('.thirtyFour')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open35').click(function(){
    $('.thirtyFive')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open36').click(function(){
    $('.thirtySix')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open37').click(function(){
    $('.thirtySeven')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open38').click(function(){
    $('.thirtyEight')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open39').click(function(){
    $('.thirtyNine')
    .modal({
      blurring: true
    })
    .modal('show');
  });
  $('#open40').click(function(){
    $('.forty')
    .modal({
      blurring: true
    })
    .modal('show');
  });

});
