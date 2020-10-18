	//Маска для формы телефона
$(function() {
	$("#phone").mask("+9(999) 999-9999");
});

//Плавный скролл до якоря
$(document).ready(function(){
    $('a.yakor[href^="#portfolio"], *[data-href^="#portfolio"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });

    $('a.yakor[href^="#services"], *[data-href^="#services"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });

    $('a.yakor[href^="#advantages"], *[data-href^="#advantages"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });

    $('a.yakor[href^="#stock"], *[data-href^="#stock"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });

    $('a.yakor[href^="#contacts"], *[data-href^="#contacts"]').on('click', function(e){
        e.preventDefault();
        var t = 1000; //Скорость скролла
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({ scrollTop: $(d).offset().top - 93 }, t);
        //Немного выше из-за фиксированного меню
    });
});


$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 3; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 4000,
        navSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<a class="a-left"><div class="sp-arrow-bg-left sp-arrow-bg"></div></a>', '<a class="a-right"><div class="sp-arrow-bg-right sp-arrow-bg"></div></a>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            responsive : {
                0: {
                    items: 1,
                },
                575: {
                    items: 2,
                },
               992: {
                    items: 3,
                },                
            },            
            dots: true,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
            dotsSpeed: 1000,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});

$(document).ready(function(){
  $(".owl-carousel-services-mob").owlCarousel({
    dots: false,
    nav: true,
    navSpeed: 2000,
    navText: ['<a class="a-left"><div class="sp-arrow-bg-left sp-arrow-bg"></div></a>', '<a class="a-right"><div class="sp-arrow-bg-right sp-arrow-bg"></div></a>'],
    responsive : {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
       1200: {
            items: 3,
        },                
    },
  });
  $('.owl-carousel-services-mob .owl-stage').addClass('row justify-content-center');
  $('.owl-carousel-services-mob .owl-stage .owl-item').addClass('col-4');
});


$(document).ready(function(){
  $(".owl-carousel-advantages").owlCarousel({
    dots: false,
    nav: true,
    navSpeed: 2000,
    navText: ['<a class="a-left"><div class="sp-arrow-bg-left sp-arrow-bg"></div></a>', '<a class="a-right"><div class="sp-arrow-bg-right sp-arrow-bg"></div></a>'],
    items: 1,
  });
});

$(document).ready(function(){
  $(".owl-carousel-stock").owlCarousel({
    dots: false,
    nav: true,
    navSpeed: 2000,
    navText: ['<a class="a-left"><div class="sp-arrow-bg-left sp-arrow-bg"></div></a>', '<a class="a-right"><div class="sp-arrow-bg-right sp-arrow-bg"></div></a>'],
     responsive : {
        0: {
            items: 1,
        },
        992: {
            items: 2,
        },              
    },
  });
});


var menu = document.querySelector('.mobile-menu');
document.onscroll = function() {

  if (window.scrollY > 0 && !menu.classList.contains('fixed')) {
    menu.classList.add('fixed');
  }

  if (window.scrollY <= 0 && menu.classList.contains('fixed')) {
    menu.classList.remove('fixed');
  }
  
};


$(document).ready(function() {

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
           // alert("Спасибо!");

$('.btn-primary')[0].click();

            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
