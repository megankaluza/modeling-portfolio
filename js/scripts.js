//Scroll Reveal
ScrollReveal({ reset: true });
ScrollReveal().reveal('.revealOne', { delay: 100 });
ScrollReveal().reveal('.revealTwo', { delay: 800 });
ScrollReveal().reveal('.revealThree', { delay: 1600 });
ScrollReveal().reveal('.revealFour', { delay: 2400 });

$(document).ready(function(){
  //Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });

  //Open Modal

  //ART
  $('#openArt1').click(function(){
    $('.artOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openArt2').click(function(){
    $('.artTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openArt3').click(function(){
    $('.artThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openArt4').click(function(){
    $('.artFour')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openArt5').click(function(){
    $('.artFive')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  //JE SUIS HUMAN
  $('#openHuman1').click(function(){
    $('.humanOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openHuman2').click(function(){
    $('.humanTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  //Glorka
  $('#openGlorka1').click(function(){
    $('.glorkaOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openGlorka2').click(function(){
    $('.glorkaTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openGlorka3').click(function(){
    $('.glorkaThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openGlorka4').click(function(){
    $('.glorkaFour')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  //Venice
  $('#openVenice1').click(function(){
    $('.veniceOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openVenice2').click(function(){
    $('.veniceTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openVenice3').click(function(){
    $('.veniceThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  //Vegas
  $('#openNew1').click(function(){
    $('.newOne')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openNew2').click(function(){
    $('.newTwo')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openNew3').click(function(){
    $('.newThree')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openNew4').click(function(){
    $('.newFour')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openNew5').click(function(){
    $('.newFive')
    .modal({
      blurring: true
    })
    .modal('show');
  });

  $('#openNew7').click(function(){
    $('.newSeven')
    .modal({
      blurring: true
    })
    .modal('show');
  });

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

  //Photos
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
  // $('#open23').click(function(){
  //   $('.twentyThree')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open24').click(function(){
  //   $('.twentyFour')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open25').click(function(){
  //   $('.twentyFive')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open26').click(function(){
  //   $('.twentySix')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open27').click(function(){
  //   $('.twentySeven')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open28').click(function(){
  //   $('.twentyEight')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open29').click(function(){
  //   $('.twentyNine')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open30').click(function(){
  //   $('.thirty')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open31').click(function(){
  //   $('.thirtyOne')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open32').click(function(){
  //   $('.thirtyTwo')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open33').click(function(){
  //   $('.thirtyThree')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open34').click(function(){
  //   $('.thirtyFour')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open35').click(function(){
  //   $('.thirtyFive')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open36').click(function(){
  //   $('.thirtySix')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open37').click(function(){
  //   $('.thirtySeven')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open38').click(function(){
  //   $('.thirtyEight')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open39').click(function(){
  //   $('.thirtyNine')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
  // $('#open40').click(function(){
  //   $('.forty')
  //   .modal({
  //     blurring: true
  //   })
  //   .modal('show');
  // });
});
