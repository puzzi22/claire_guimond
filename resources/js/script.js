$(document).ready(function () {
  /* For the sticky navigation */
  $(".js--section-introduction").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "40px;",
    }
  );

  /* Scroll on buttons */
  $(".js--scroll-to-multimedia").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-multimedia").offset().top },
      1000
    );
  });

  $(".js--scroll-to-introduction").click(function () {
    $("html, body").animate(
      { scrollTop: $(".js--section-introduction").offset().top },
      1000
    );
  });

  /* Navigation scroll */
  $(function () {
    $("a[href*=\\#]:not([href=\\#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            1000
          );
          return false;
        }
      }
    });
  });

  /* Animation on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "70%",
    }
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-5").waypoint(
    function (direction) {
      $(".js--wp-5").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-6").waypoint(
    function (direction) {
      $(".js--wp-6").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-7").waypoint(
    function (direction) {
      $(".js--wp-7").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-8").waypoint(
    function (direction) {
      $(".js--wp-8").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-9").waypoint(
    function (direction) {
      $(".js--wp-9").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-10").waypoint(
    function (direction) {
      $(".js--wp-10").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-11").waypoint(
    function (direction) {
      $(".js--wp-11").addClass("animated pulse");
    },
    {
      offset: "50%",
    }
  );

  $(".js--wp-12").waypoint(
    function (direction) {
      $(".js--wp-12").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-13").waypoint(
    function (direction) {
      $(".js--wp-13").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-14").waypoint(
    function (direction) {
      $(".js--wp-14").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  $(".js--wp-15").waypoint(
    function (direction) {
      $(".js--wp-15").addClass("animated fadeInLeftBig");
    },
    {
      offset: "90%",
    }
  );

  /* Mobile nav */

  $(".js--nav-icon").click(function () {
    var nav = $(".main-nav");
    var icon = $(".js--nav-icon i");

    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon");
    } else {
      icon.addClass("ion-navicon");
      icon.removeClass("ion-close-round");
    }
  });

  // Back to the top button
  // Get the button:
  let mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
});
