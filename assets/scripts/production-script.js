// _START >> HEADER SCROLLING, NAVBAR TOGGLER SCRIPTS << SHB
$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('html').toggleClass('show-menu');
    });

    function scrolling() {
        var sticky = $('header'), scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.addClass('header-filled');
        else sticky.removeClass('header-filled');
    };
    scrolling();
    $(window).scroll(scrolling);
});

// _CLOSE >> HEADER SCROLLING, BANNER HEIGHT, NAVBAR TOGGLER SCRIPTS << SHB

$(document).ready(function () {
    $('#triggerMenu').on('click', function () {
        $('body').toggleClass('overflow-hidden');
        $('.shb-header').toggleClass('navbar-collapsed');
        $('.shb-header-hamburger').toggleClass('menu-triggered');
        return false;
    });
});

// _START >> NAVBAR ACTIVE LINK WITH CURRENT PAGE << SHB
$(document).ready(function () {
    $(".shb-header-navbar li a").each(function () {
        var pathname1 = window.location.href.substr(window.location.href.lastIndexOf('/') + 1);
        var pathname = pathname1.replace("#/", "");
        if ($(this).attr('href') == pathname) {
            $(this).parent().addClass('active');
        }
    });
});
// _CLOSE >> NAVBAR ACTIVE LINK WITH CURRENT PAGE << SHB

// _START >> CAROUSEL: SWIPER - PORTFOLIO << SHB
const shbPortfolioSwiper = new Swiper('#shbPortfolio', {
    loop: true,
    speed: 1000,
    autoplay: true,
    slidesPerView: 1,
    spaceBetween: 20,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// _CLOSE >> CAROUSEL: SWIPER - PORTFOLIO << SHB

// _START >> CAROUSEL: SWIPER - CLIENT LOGOS << SHB
const shbClientLogosSwiper = new Swiper('#shbClientLogos', {

    loop: true,
    speed: 500,
    autoplay: true,
    rewind: true,

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 4,
            spaceBetween: 40
        },
        // when window width is >= 1600px
        1600: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// _CLOSE >> CAROUSEL: SWIPER - CLIENT LOGOS << SHB

// _START >> CAROUSEL: SWIPER - FEEDBACK << SHB
const shbFeedbackSwiper = new Swiper('#shbClientFeedback', {

    loop: true,
    speed: 1000,
    autoplay: true,
    rewind: true,
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1.12,
            spaceBetween: 20
        },
        // when window width is >= 576px
        576: {
            slidesPerView: 1.20,
            spaceBetween: 20
        },
        // when window width is >= 768px
        768: {
            slidesPerView: 1.50,
            spaceBetween: 20
        },
        // when window width is >= 992px
        992: {
            slidesPerView: 1.90,
            spaceBetween: 18
        },
        // when window width is >= 1200px
        1200: {
            slidesPerView: 2.30,
            spaceBetween: 18
        },
        // when window width is >= 1366px
        1366: {
            slidesPerView: 2.50,
            spaceBetween: 24
        },
        // when window width is >= 1600px
        1600: {
            slidesPerView: 2.75,
            spaceBetween: 24
        }
    },
});
// _CLOSE >> CAROUSEL: SWIPER - FEEDBACK << SHB
// Counting number js start
$('.count-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 10000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
  });
// Counting number js end
// modal js start
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myModalbtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// modal js end
