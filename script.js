$(document).ready(function () {
  $(window).scroll(function () {
    //  sticky navbar on scroll script  //
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    //  scroll-up button show/hide script  //
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  //  slide-up script  //

  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    //  removing smooth scroll on slide-up button click  //
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    //  Smooth scroll on Menu Items click  //

    $("html").css("scrollBehavior", "smooth");
  });

  //  Toggle Navbar  //

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  //  Typing Text Animation  //

  var typed = new Typed(".typing", {
    strings: [
      "Mern Stack Developer",
      "Problem Solver",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: [
      "Problem Solver",
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  //  Owl Carousel  this is for move in a loop //

  $(".carousel").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: false,
    autoplayTimeOut: 2000,
    autoplayHoverPause: false ,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});
