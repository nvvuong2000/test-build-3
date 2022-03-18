$(function () {
  $(window).on("scroll", function () {
    triggerSticky();
    testScroll();
    AOS.init();
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    $(".slider").slick("refresh");
  });
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    if($(".slider-wrapper")){
      $(".slider-wrapper").slick("refresh");
    }
  });
  $('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
    $("#video-slider").slick("refresh");
  });

  $(".js__toggle-menu").click(function () {
    $("header").toggleClass("open");
    return false;
  });
 
  $(".slider").slick({
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    arrows: true,
    prevArrow: '<button class="prev-arrow"></button>',
    nextArrow: '<button class="next-arrow"></button>',
  });
  $(function () {
    $(".slider-thumb").slick({
      autoplay: false,
      vertical: true,
      infinite: true,
      verticalSwiping: true,
      slidesPerRow: 3,
      slidesToShow: 3,
      asNavFor: ".slider-preview",
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
          },
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 3,
            slidesToShow: 3,
          },
        },
      ],
    });
    $(".slider-thumb-test").slick({
      autoplay: false,
      vertical: false,
      infinite: false,
      verticalSwiping: false,
      // slidesPerRow: 4,
      slidesToShow: 4,
      // asNavFor: '.slider-preview',
      focusOnSelect: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
          },
        },
        {
          breakpoint: 479,
          settings: {
            vertical: false,
            slidesPerRow: 3,
            slidesToShow: 3,
          },
        },
      ],
    });
    $(".slider-preview").slick({
      autoplay: false,
      vertical: true,
      infinite: true,
      slidesPerRow: 1,
      slidesToShow: 1,
      asNavFor: ".slider-thumb",
      arrows: false,
      draggable: false,
      responsive: [
        {
          breakpoint: 767,
          settings: {
            vertical: false,
            fade: true,
          },
        },
      ],
    });
  });
  $(".slider-1").slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: false,
    autoplay: false,
    prevArrow: '<button class="prev-arrow-blog"></button>',
    nextArrow: '<button class="next-arrow-blog"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  setTimeout(function () {
    jQuery(".loading_main .logo").addClass("fade");
  }, 500);

  function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  function testScroll() {
    let viewed = false;
    if (isScrolledIntoView($(".number")) && !viewed) {
      viewed = true;
      $('.counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');
        
        $({ countNum: $this.text()}).animate({
          countNum: countTo
        },
        {
          duration: 2000,
          easing:'linear',
          step: function() {
            if (parseInt(this.countNum) === this.countNum){
              $this.text(Math.floor(this.countNum));
            } else {
              $this.text(Math.round(this.countNum * 100) / 100);
            }
          },
          complete: function() {
            $this.text(this.countNum);
            // alert('finished');
          }
        });
      });  
    } else {
      var a = 0;
      $(window).scroll(function () {
        var oTop = $("#introduce").offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $(".count-number").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-count");
            $({
              countNum: $this.text(),
            }).animate(
              {
                countNum: countTo,
              },
              {
                duration: 2000,
                easing: "swing",
                step: function() {
                  if (parseInt(this.countNum) === this.countNum){
                    $this.text(Math.floor(this.countNum));
                  } else {
                    $this.text(Math.round(this.countNum * 100) / 100);
                  }
                },
                complete: function () {
                  $this.text(this.countNum);
                },
              }
            );
          });
          a = 1;
        }
      });
    }
  }

  function triggerSticky() {
    var scroll = $(window).scrollTop();

    if (scroll >= $("header #navbar").position().top && scroll >= 100) {
      $("#gotop").removeClass("d-none");
      if ($("body").hasClass("home-page")) {
        $("body").addClass("sticky-header");
      }
    } else {
      $("#gotop").addClass("d-none");
      if ($("body").hasClass("home-page")) {
        $("body").removeClass("sticky-header");
      }
    }
  }
  
  triggerSticky();
  $('header nav .nav-item a[href^="#"]').on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      let scrollPos = hash === '#oriana' ? $(hash).offset().top - 400 : $(hash).offset().top - 300;
      $("html, body").animate(
        {
          scrollTop: scrollPos
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
      // add class active to the menu
      if (!$(this).parent().hasClass('active')){
        $(this).parent().addClass('active');
      }
      $(this).parent().siblings().each(function (index, element){
        if (element.classList.contains('active')){
          element.classList.remove('active');
        }
      });
    } // End if
  });

  $('.quick-link-footer a[href^="#"]').on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      let scrollPos = hash === '#oriana' ? $(hash).offset().top - 400 : $(hash).offset().top - 300;
      $("html, body").animate(
        {
          scrollTop: scrollPos
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  $("#pills-video-tab").on("click", function () {
    // $("#video-slider").slick("refresh");
  });
  $("#video-slider").slick({
    dots: true,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    prevArrow: '<button class="prev-arrow-blog"></button>',
    nextArrow: '<button class="next-arrow-blog"></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 479,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
